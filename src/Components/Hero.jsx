import React from 'react';
import styled from "styled-components";

export default function hero() {
    return (
        <Container className={"hero"}>
            <div className={"hero-container"}>
                <img className={"background-image"} src={"./Image/fond.png"} alt={""}/>
                <img className={"img-velo"} src={"./Image/velo.png"} alt={""}/>
                <span className={"hero-title"}></span>
                <span className={"hero-subtitle"}></span>
                <button className={"hero-button"}>Order Now</button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .hero-container {
        position: relative;
        top: 0;
        left: 0;
        .background-image {
            position: relative;
            width: 100%;
        }
        .img-velo {
            position: absolute;
            width: 90%;
            top: 42%;
            left: 5%;
        }
    }
`;