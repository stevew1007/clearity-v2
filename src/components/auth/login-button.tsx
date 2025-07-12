"use client";

export function LoginButton() {
  const handleLogin = () => {
    window.location.href = "/api/auth/authorize/eve";
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700 transition-colors"
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      Login with EVE Online
    </button>
  );
}

export function LogoutButton() {
  const handleLogout = () => {
    window.location.href = "/api/auth/signout";
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 transition-colors"
    >
      Logout
    </button>
  );
}