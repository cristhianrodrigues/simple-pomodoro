import { createGlobalStyle } from "styled-components";

export const GlobalStyles =  createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-family: 'Montserrat', sans-serif;
        background-color: #1e212d;
        color: #eabf9f;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    }

    .main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 2rem;
    }

    .timer-status {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .timer-container {
        display: flex;
        flex-direction: column;
        padding: 4.5rem 1.5rem;
        border: 0.2rem solid;
        border-radius: 100%;
        min-width: 10rem;
    }

    .timer {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        gap: 0.4rem;
        letter-spacing: 0.15rem;
    }

    .controller-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    .controller-buttons button {
        background-color: transparent;
        border: none;
        color: #eabf9f;
        cursor: pointer;
    }

`;