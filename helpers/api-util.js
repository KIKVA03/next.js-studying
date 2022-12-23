export async function getAllEvents() {
    const response = await fetch(
        "https://nextjs-course-a2b5b-default-rtdb.firebaseio.com/events.json"
    );
    const data = await response.json();
    const events = [];
    for (const key in data) {
        events.push({
            id: key,
            ...data[key],
        });
    }
    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();

    return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    const allEvents = await getAllEvents();

    return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(year, month) {
    const allEvents = await getAllEvents();

    let filteredEvents = allEvents.filter((event) => {
        const eventDate = new Date(event.date);

        console.log(eventDate);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}
