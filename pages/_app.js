import Layout from "../src/components/layout/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>NextJS Events</title>
                <meta name="description" content="NextJS Events" />
                <meta name="racxadze" content="racxa racxashvili" />
            </Head>

            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
