import Link from "next/link";
import React from "react";
import styled from "styled-components";

const MainHeader = () => {
    return (
        <Container>
            <div>
                <Link className="link" href="/">
                    TrueEvents
                </Link>
            </div>
            <h2>LOGO</h2>
            <nav>
                <ul>
                    <li>
                        <Link className="link" href="/events">
                            Brows All Events
                        </Link>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

export default MainHeader;

const Container = styled.header`
    padding: 0 20px;
    background-color: lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        list-style-type: none;
    }

    .link {
        color: black;
        text-decoration: none;
        font-size: larger;
        text-shadow: 1px 5px 6px gray;
    }
`;
