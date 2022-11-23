import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import HeaderTitle from "../components/HeaderTitle";
import Layout from "../layouts/Layout";
import AppContext from "../context/AppContext";
import Router from "next/router";

export default function Members(props) {
  const router = useRouter();
  const { user, setUser } = useContext(AppContext);
  if (user == null) {
    useEffect(() => {
      Router.push("/");
    });
  }

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderTitle title="Members only" />
      <h1 className="pb-6">
        Members only should see this page, otherwise redirect to home
      </h1>
    </Layout>
  );
}
