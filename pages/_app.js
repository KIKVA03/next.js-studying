import Layout from "../src/components/layout/layout";
import Head from "next/head";
import Notification from "../src/components/notifikation";
import { NotificationContextProvaider } from "../src/components/store/notification-context";

function MyApp({ Component, pageProps }) {
    return (
        <NotificationContextProvaider>
            <Layout>
                <Head>
                    <title>NextJS Events</title>
                    <meta name="description" content="NextJS Events" />
                    <meta name="racxadze" content="racxa racxashvili" />
                </Head>

                <Component {...pageProps} />

                <Notification />
            </Layout>
        </NotificationContextProvaider>
    );
}

export default MyApp;
