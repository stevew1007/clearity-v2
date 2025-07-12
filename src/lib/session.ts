import { cookies } from "next/headers";
import { auth } from "./auth";

export async function getSession() {
  const token = (await cookies()).get("token")?.value;
  if (!token) return null;

  try {
    const session = await auth.verify(token);
    return session;
  } catch {
    return null;
  }
}

export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    throw new Error("Authentication required");
  }
  return session;
}