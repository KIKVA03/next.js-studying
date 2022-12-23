import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const EventItem = ({ title, image, date, location, id }) => {
    return (
        <Container>
            <Image src={`/${image}`} alt={title} width={200} height={300} className="img" />
            <div className="mother">
                <div className="child">
                    <h2>{title}</h2>
                    <div>
                        <time>{date}</time>
                    </div>
                    <div>
                        <address>{location}</address>
                    </div>
                </div>
                <div>
                    <Link href={`/events/${id}`}>CLICK ME</Link>
                </div>
            </div>
        </Container>
    );
};

export default EventItem;

const Container = styled.li`
    display: flex;
    gap: 10px;
    .img {
        max-width: 200px;
        flex: 1;
    }
    .mother {
        display: flex;
        flex-direction: column;
        .child {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
        }
    }
`;
