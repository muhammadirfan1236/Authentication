import Head from "next/head";
import HeaderTitle from "../components/HeaderTitle";
import Registerform from "../components/auth/Registerform";
import Layout from "../layouts/Layout";

export default function Register() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderTitle title="Register" />
      <Registerform />
    </Layout>
  );
}
