import { useRouter } from "next/router";
import { getFilteredEvents } from "../../src/data/dummy-data";
import EventsList from "../../src/components/events/event-list";

const FilterdEvents = () => {
    const router = useRouter();

    const date = router.query.slug;

    if (!date) {
        return <p>loading...</p>;
    }
    const month = date[1];

    const year = date[0];

    const numMonth = +month;
    const numYear = +year;

    if (
        isNaN(numMonth) ||
        isNaN(numYear) ||
        numMonth > 12 ||
        numMonth < 1 ||
        numYear > 2022 ||
        numYear < 2021
    ) {
        return <h2>invalid url!!!!!!!!!!!!!!!!!!!!!</h2>;
    }

    const filterdEvents = getFilteredEvents(numYear, numMonth);

    if (!filterdEvents || filterdEvents.length === 0) {
        return <p>no events found with that filter</p>;
    }

    return (
        <div>
            <EventsList items={filterdEvents} />
        </div>
    );
};

export default FilterdEvents;
