import { useState } from "react";
import { getEventById } from "../../helpers/api-util";
import styled from "styled-components";
import Link from "next/link";

const SingleEvent = ({ event }) => {
    const [comments, setComments] = useState([]);
    const commentSubmitHendler = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const name = event.target[1].value;
        const comment = event.target[2].value;
        if (email.length === 0 || name.length === 0 || comment.length === 0) {
            alert("fill all inputs correctly");
        }
        const addedData = { email, name, text: comment };
        fetch("/api/1", {
            method: "POST",
            body: JSON.stringify(addedData),
            headers: {
                "Contetnt-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = " ";
    };
    return (
        <Container>
            <div className="mother">
                <img src={`/${event.image}`} alt="" />
                <div className="child">
                    <h1>{event.title}</h1>
                    <h4>{event.description}</h4>
                    <h5>{event.date}</h5>
                    <h5>{event.location}</h5>
                    <Link href="/">click</Link>
                </div>
            </div>

            <form onSubmit={commentSubmitHendler}>
                <div className="firstChild">
                    <div className="Wrapper">
                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="Wrapper">
                        <label htmlFor="email">Your name</label>
                        <input type="text" id="nameInput" />
                    </div>
                    <div></div>
                </div>
                <div className="secondChild">
                    <label htmlFor="commentInput">Your comment</label>
                    <textarea id="commentInput" rows="5"></textarea>
                </div>
                <div className="buttonWrapper">
                    <button>submit</button>
                </div>
            </form>
            <ul>{/* {comments&&comments.map(())} */}</ul>
        </Container>
    );
};

export async function getServerSideProps(context) {
    const { params } = context;
    const eventId = params.id;
    const event = await getEventById(eventId);

    return {
        props: {
            event: event,
        },
    };
}

export default SingleEvent;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    .mother {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            flex: 1;
            max-width: 20%;
        }

        .child {
            flex: 1;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            align-items: center;

            h4 {
                width: 80%;
            }
        }
    }
    form {
        background-color: lightgreen;
        height: 200px;
        width: 500px;
        display: flex;
        flex-direction: column;
        .firstChild {
            display: flex;
            justify-content: space-around;
        }
        .secondChild {
            display: flex;
            flex-direction: column;
        }
        .Wrapper {
            display: flex;
            flex-direction: column;
        }
        .buttonWrapper {
            display: flex;
            justify-content: center;
            button {
                padding: 5px 8px;
                margin-top: 5px;
                border: none;
                border-radius: 5px;
            }
        }
    }
`;
