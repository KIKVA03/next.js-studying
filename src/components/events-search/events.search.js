import { useRef } from "react";
import styled from "styled-components";
// import { useRouter } from "next/router";

const EventsSearch = (props) => {
    const yearValue = useRef();
    const monthValue = useRef();

    const submitHendler = (event) => {
        event.preventDefault();

        const selectedYear = yearValue.current.value;

        const selectedMonth = monthValue.current.value;

        props.onSearch(selectedYear, selectedMonth);
    };

    return (
        <Container onSubmit={submitHendler}>
            <div>
                <label htmlFor="year">Year</label>
                <select id="year" ref={yearValue}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div>
                <label htmlFor="month">Month </label>
                <select id="month" ref={monthValue}>
                    <option value="1">January</option>
                    <option value="2">Fabruary</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">Septenbe</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
            <button>Find Events</button>
        </Container>
    );
};

export default EventsSearch;
const Container = styled.form`
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;

    div {
        display: flex;
        align-items: center;
        gap: 5px;
        select {
            padding: 5px 15px;
            option {
                padding: 5px 10px;
            }
        }
    }
    button {
        background-color: lightgreen;
        border: none;
    }
`;
