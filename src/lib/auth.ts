import { openauth } from "@openauthjs/openauth";
import { env } from "~/env";
import { db } from "~/server/db";
import { users, sessions } from "~/server/db/schema";

export const auth = openauth({
  secret: env.OPENAUTH_SECRET,
  storage: {
    type: "drizzle",
    db,
    schema: {
      user: users,
      session: sessions,
    },
  },
  providers: {
    eve: {
      type: "oauth2",
      clientId: env.EVE_CLIENT_ID,
      clientSecret: env.EVE_CLIENT_SECRET,
      authorization: "https://login.eveonline.com/v2/oauth/authorize",
      token: "https://login.eveonline.com/v2/oauth/token",
      userinfo: "https://esi.evetech.net/verify/",
      scopes: ["publicData"],
      transform: {
        user: (user: any) => ({
          id: user.CharacterID.toString(),
          name: user.CharacterName,
          email: `${user.CharacterID}@eve.local`,
          image: `https://images.evetech.net/characters/${user.CharacterID}/portrait?size=128`,
        }),
      },
    },
  },
  success: async (ctx, { user, session }) => {
    return ctx.subject(user.id, {
      session: session.id,
      user: user.id,
    });
  },
});

export type Session = typeof auth.$type.session;
export type User = typeof auth.$type.user;