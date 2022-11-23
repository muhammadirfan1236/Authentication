<header className="bg-white shadow">
  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
  </div>
</header>;

<img
  className="h-8 w-8"
  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
  alt="Workflow"
/>;

import Link from "next/link";
import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { logout } from "../lib/auth";

export default function Header(props) {
  const { user, setUser } = useContext(AppContext);
  return (
    <header className="h-16 border-b border-gray-800">
      <Link href="/">
        <a>
          <h1 className="text-4xl">Login project</h1>
        </a>
      </Link>
      {user ? (
        <>
          <Link href="/">
            <a
              onClick={() => {
                logout();
                setUser(null);
              }}
            >
              Logout
            </a>
          </Link>
        </>
      ) : (
        <>
          <Link href="/register">
            <a>Register</a>
          </Link>{" "}
          or{" "}
          <Link href="/login">
            <a>Login</a>
          </Link>
        </>
      )}
    </header>
  );
}
