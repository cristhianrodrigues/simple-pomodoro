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
        gap: 1.5rem;
    }

    .controller-buttons button {
        background-color: transparent;
        border: none;
        color: #eabf9f;
        cursor: pointer;
    }

    .modal-options {
        display: none;
        position: fixed;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 1rem;
        width: 22.5rem;
        height: 17rem;
        background-color: #1e212d;
        border: 1px solid #eabf9f;
        border-radius: 0.5rem;
        color: #eabf9f;
        gap: 2rem;
    }

    .modal-options p {
        font-size: 0.80rem;
    }
    
    .modal-tittle {
        font-size: 1.5rem;
    }

    .options-input {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
    }

    .options-input div, .input-long-breaks {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
    .input-long-breaks {
        padding: 0 1rem;
    }

    .options-input input, .input-long-breaks input {
        width: 3rem;
        padding: 0.5rem;
        background-color: transparent;
        border: 1px solid;
        border-radius: 0.25rem;
        color: #eabf9f;
    }
    
    .close-modal-options {
        display: flex;
        justify-content: right;
        gap: 1rem;
    }
    
    .close-modal-options button {
        width: 4rem;
        height: 2rem;
        background-color: transparent;
        border: 1px solid;
        border-radius: 0.25rem;
        cursor: pointer;
    }

    .modal-button-cancel {
        color: #d23131;
    }

    .modal-button-apply {
        color: #6ddf44;
    }

`;