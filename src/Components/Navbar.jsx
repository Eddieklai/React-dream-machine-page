import React from 'react';
import styled from "styled-components";

export default function navbar() {
    return (
        <Container className={"navbar"}>
            <div className={"navbar-container"}>
                <div className={"navbar-left"}>
                    <ul className={"navbar-left-list"}>
                    <img className={"Cowboy"} src={"./Image/Cowboy.png"} alt={""}/>
                        <li className={"navbar-left-list-item"}>overview</li>
                        <li className={"navbar-left-list-item"}>key features</li>
                        <li className={"navbar-left-list-item"}>ride awake</li>
                        <li className={"navbar-left-list-item"}>reviews</li>
                        <li className={"navbar-left-list-item"}>tech specs</li>
                    </ul>
                </div>
                <div className={"navbar-right"}>
                    <div className={"navbar-right-discount-container"}>
                        <span className={"navbar-right-discount"}>From $2,190 $2,190</span>
                        <span className={"navbar-right-discount-text"}>Discounts available</span>
                    </div>
                    <button className={"navbar-right-button"}>Order Now</button>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .navbar-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 1rem 0 2rem 0;
        .navbar-left-list {
            .Cowboy {
                width: 9rem;
                height: 2rem;
                margin-right: 60px;
            }
            display: flex;
            align-items: center;
            gap: 30px;
        }
    
        .navbar-right {
            display: flex;
            .navbar-right-discount-container {
                display: flex;
                align-items: center;
                flex-direction: column;
                margin-right: 10px;
            }
        }
    }
`;