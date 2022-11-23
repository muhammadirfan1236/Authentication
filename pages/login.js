import Head from "next/head";
import Layout from "../layouts/Layout";
import Loginform from "../components/auth/Loginform";
import HeaderTitle from "../components/HeaderTitle";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderTitle title="Login" />
      <Loginform />
    </Layout>
  );
}
