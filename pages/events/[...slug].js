import { getFilteredEvents } from "../../helpers/api-util";
import EventsList from "../../src/components/events/event-list";
import styled from "styled-components";

const FilterdEvents = ({ filteredEvents }) => {
    console.log(filteredEvents);
    if (filteredEvents.length === 0) {
        return <p>data not found</p>;
    }

    return (
        <Container>
            <EventsList items={filteredEvents} />

            <form>
                <div>
                    <div>
                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="email">Your name</label>
                        <input type="text" id="nameInput" />
                    </div>
                    <div></div>
                </div>
            </form>
        </Container>
    );
};

export async function getServerSideProps(context) {
    const { params } = context;

    let numMonth = +params.slug[1];

    let numYear = +params.slug[0];

    const filteredEvents = await getFilteredEvents(numYear, numMonth);

    if (filteredEvents.length === 0) {
        console.log("warning...");
    }
    return {
        props: {
            filteredEvents: filteredEvents,
        },
    };
}
export default FilterdEvents;

const Container = styled.div``;
