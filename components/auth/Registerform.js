import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { registerUser } from "../../lib/auth";
import AppContext from "../../context/AppContext";
import { v4 as uuidv4 } from "uuid";

export default function Registerform(props) {
  const [data, updateData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const appContext = useContext(AppContext);

  useEffect(() => {
    if (appContext.isAuthenticated) {
      router.push("/"); // redirect if you're already logged in
    }
  }, []);

  function onChange(event) {
    event.preventDefault();
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const uniq = uuidv4();
    updateData({ ...data, username: uniq });
    registerUser(data.username, data.email, data.password)
      .then((res) => {
        // set authed user in global context object
        appContext.setUser(res.data.user);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response.data) {
          setError(error.response.data);
        } else {
          setError("login successful");
        }
        setLoading(false);
      });
  };

  return (
    <div className="container flex mt-3 mb-16">
      <div className="max-w-md w-full">
        <div className="bg-white border-t border-gray-200 rounded-lg overflow-hidden shadow-2xl">
          <div className="p-8">
            {Object.entries(error).length !== 0 &&
              error.constructor === Object &&
              error.message.map((error) => {
                return (
                  <div key={error.messages[0].id} style={{ marginBottom: 10 }}>
                    <small style={{ color: "red" }}>
                      {error.messages[0].message}
                    </small>
                  </div>
                );
              })}
            <form onSubmit={submitForm}>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-left mb-2 text-sm font-medium text-gray-600"
                >
                  Email
                </label>

                <input
                  onChange={(event) => onChange(event)}
                  name="email"
                  type="email"
                  className="block  text-left w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
              </div>

              <div className="mb-5">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="block inline text-left mb-2 text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                </div>
                <input
                  onChange={(event) => onChange(event)}
                  type="password"
                  name="password"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 mt-4 bg-gray-800 hover:bg-gray-900 text-white rounded shadow"
              >
                {loading ? "Registering... " : "Register"}
              </button>
            </form>

            <div className="mt-5 text-right">
              <Link href="/login">
                <a className="hover:underline text-blue-600  text-sm font-medium">
                  Allready have a user? Log in
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
