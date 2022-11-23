import React, { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import HeaderTitle from "../components/HeaderTitle";
import Layout from "../layouts/Layout";
import AppContext from "../context/AppContext";

export default function Home(props) {
  const { user, setUser } = useContext(AppContext);
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderTitle title="Welcome" />
      {user ? (
        <div className="pb-6">Your email: {user.email}</div>
      ) : (
        <div className="pb-6">
          <Link href="/login">
            <a className="underline hover:no-underline text-blue-600">Login</a>
          </Link>{" "}
          or{" "}
          <Link href="/register">
            <a className="underline hover:no-underline text-blue-600">
              register
            </a>
          </Link>{" "}
          to get started.
        </div>
      )}
    </Layout>
  );
}
