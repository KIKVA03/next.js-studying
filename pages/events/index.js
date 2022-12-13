import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../src/data/dummy-data";
import EventsList from "../../src/components/events/event-list";
import EventsSearch from "../../src/components/events-search/events.search";

const AllEvents = () => {
    const items = getAllEvents();
    const router = useRouter();
    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };
    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventsList items={items} />
        </Fragment>
    );
};

export default AllEvents;
