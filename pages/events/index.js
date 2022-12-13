import React from "react";
import { getAllEvents } from "../../src/data/dummy-data";
import EventsList from "../../src/components/events/event-list";

const AllEvents = () => {
    const items = getAllEvents();
    console.log(items);

    return (
        <div>
            <EventsList items={items} />
        </div>
    );
};

export default AllEvents;
