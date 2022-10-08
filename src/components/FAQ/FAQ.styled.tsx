import styled from 'styled-components';

export const FaqStyle = styled.div`
    .heading {
        color: #212943;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 2rem;
    }
    .container {
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }
    form {
        display: flex;
        width: 35rem;
        background-color: #fff;
        align-items: center;
        margin: 0 auto;
        border-radius: 1rem;
    }
    form svg {
        height: 1rem;
        fill: #9ea6ae;
        position: fixed;
        width: 4rem;
    }
    .searchbar {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        border: none;
        padding: 1rem;
        padding-left: 4rem;
        width: 100%;
        box-shadow: 0px 5px 13px 0px #dee4f1;
        border-radius: 0.8rem;
    }
    .searchbar:focus {
        outline: none;
        box-shadow: 0 0 0 1.5px #dee4f1, 0px 5px 13px 0px #dee4f1;
    }
    .faq {
        margin: 3rem 0;
    }
    .question-wrapper {
        width: 35rem;
        border-bottom: 1px solid #dee4f1;
        margin: 0 auto;
        padding: 1rem;
        transition: 1s;
    }
    .question {
        display: flex;
        font-size: 1rem;
        font-weight: 500;
        color: #212943;
        display: flex;
        justify-content: space-between;
    }
    .question svg {
        width: 1rem;
        height: 1.5rem;
        fill: #9ea6ae;
    }
    .question svg.active {
        transform: rotate(180deg);
    }
    .question svg:hover {
        opacity: 0.8;
    }
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    button:focus {
        outline: none;
    }
    .answer {
        display: none;
    }
    .answer.active {
        display: block;
        text-align: left;
        padding-top: 1.5rem;
        font-weight: light;
        font-size: 0.8rem;
        line-height: 1.5;
        color: #9ea6ae;
        height: 0%;
        animation: slidein 0.4s;
        animation-fill-mode: forwards;
    }
    @keyframes slidein {
        from {
            opacity: 0.3;
            transform: translateY(-20%);
        }
        to {
            opacity: 1;
            transform: translateY(0%);
        }
    }
`;
