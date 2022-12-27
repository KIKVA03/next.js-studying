import styled from "styled-components";

const Notification = ({}) => {
    return (
        <Container>
            <div className="shown">
                <h3>test</h3>
                <h3>this is test</h3>
            </div>
        </Container>
    );
};

export default Notification;

const Container = styled.div`
    .shown {
        padding: 0 30px;
        height: 80px;
        width: 95%;
        background-color: lightblue;
        position: fixed;
        bottom: 0;
        opacity: 1;
        transition: 1s;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .hidden {
        opacity: 0;
        transition: 1s;

        /* opacity: 0;
        transition: 3s;
        pointer-events: none; */
    }
`;
