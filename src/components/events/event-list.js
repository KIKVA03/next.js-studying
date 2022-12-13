import React from "react";
import EventItem from "./event-item";
import styled from "styled-components";

const EventsList = ({ items }) => {
    return (
        <Container>
            {items.map((item) => (
                <EventItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    location={item.location}
                    date={item.date}
                    image={item.image}
                />
            ))}
        </Container>
    );
};

export default EventsList;

const Container = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;
