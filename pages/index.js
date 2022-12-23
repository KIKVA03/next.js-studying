import Head from "next/head";
import styled from "styled-components";

import EventsList from "../src/components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
    const emailFormSubmitHandler = (event) => {
        event.preventDefault();
        let email = event.target[0].value;
        if (email.length === 0) {
            alert("enter email");
        }
        fetch("/api/newsletter", {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((respone) => respone.json())
            .then((data) => console.log(data.userEmail));

        event.target[0].value = "";
    };

    return (
        <Container>
            <Head>
                <title>NextJS Events</title>
                <meta name="description" content="mwvane rato ar aigheee,mwvane magaria" />
            </Head>
            <form onSubmit={emailFormSubmitHandler}>
                <input type="email" placeholder="enter email" />
                <button>ENTER</button>
            </form>
            <EventsList items={props.items} />
        </Container>
    );
}

export async function getStaticProps() {
    const items = await getFeaturedEvents();
    return {
        props: {
            items: items,
        },
    };
}

export default HomePage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
        margin-top: 10px;
        display: flex;
        gap: 10px;
        input {
            padding: 5px 15px;
        }
        button {
            background-color: lightgreen;
            border: none;
            border-radius: 5px;
        }
    }
`;
