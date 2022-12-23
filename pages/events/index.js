import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import EventsList from "../../src/components/events/event-list";
import EventsSearch from "../../src/components/events-search/events.search";

const AllEvents = ({ allEvents }) => {
    const router = useRouter();

    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    };
    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />

            <EventsList items={allEvents} />
        </Fragment>
    );
};

export async function getServerSideProps() {
    const allEvents = await getAllEvents();
    return {
        props: {
            allEvents: allEvents,
        },
    };
}

export default AllEvents;
