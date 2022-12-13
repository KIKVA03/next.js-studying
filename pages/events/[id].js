import { useEffect } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../src/data/dummy-data";
import styled from "styled-components";
import Link from "next/link";

const SingleEvent = () => {
    const router = useRouter();

    const event = getEventById(router.query.id);

    return (
        <Container>
            {event && (
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
            )}
        </Container>
    );
};

export default SingleEvent;
const Container = styled.div`
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
`;
