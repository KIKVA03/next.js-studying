import React, { Fragment } from "react";
import MainHeader from "./main-header";
import styled from "styled-components";

const Layout = (props) => {
    return (
        <Fragment>
            <MainHeader />
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Layout;
const Container = styled.div``;
