import EventsList from "../src/components/events/event-list";
import { getFeaturedEvents } from "../src/data/dummy-data";

function HomePage() {
    const items = getFeaturedEvents();

    return (
        <div>
            <EventsList items={items} />
        </div>
    );
}

export default HomePage;
