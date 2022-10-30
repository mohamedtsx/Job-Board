import styled from "styled-components";

const ipad = window.innerHeight > 1000;


export const JobItemSt = styled.div`
    border-reduce: 0.4rem;
    margin: 1.2rem auto;
    text-transform: capitalize;
    background-color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.1vw 2.3vw;
    overflow: hidden;


    @media screen and (max-width: 560px) {
        flex-direction: column-reverse;
        align-items: stretch;
    }
`

export const Info = styled.div`
    flex-grow: 1;
    display: flex;
    gap: 2rem;
    align-items: center;
    padding-right: 1rem;

    h1 {
        font-size: 2.4rem;
    }

    img {
        width: 8.2rem;
        height: 8.2rem;
        border: 1px solid #f0f0f0;
    }

    .text-container {
        min-width: 21.5rem;
        width: 100%;
    }

    .highlights {
        max-width: 32rem;
        margin: 1.2rem 1rem 1.2rem 0;
        color: #777; 
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 560px) {
        h1 {
            font-size: 1.8rem;
        }
        img {
            width: 6.5rem;
            height: 6.5rem;
        }
    }

    @media screen and (max-width: 400px) {
        gap: 1rem;

        h1 {
            font-size: 1.6rem;
        }

        .highlights {
            font-size: 1.4rem;
            margin: 1rem 3rem 0.5rem 0;
        }

        img {
            width: 5.5rem;
            height: 5.5rem;
        }
        
    }
`

export const Actions = styled.div`
    font-size: 1.4rem;
    width: 18.1rem;
    height: 7.7rem;
    border: 0.1rem solid #EFFDF5;

    display: grid;
    grid-template-columns: repeat(2,auto);
    justify-content: space-between;
    align-content: space-between;

    span {
        grid-column: span 2;
        justify-self: end;
        color: #777;
    }

    .action-buttons {
        ${'' /* width: 18.1rem; */}
        width: fit-content;
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    @media screen and (max-width: 560px) {
        width: 100%;
        height: auto;
        padding-bottom: 0.6rem;

        span {
            grid-row-start: 1;
            grid-column-end: 1;
            justify-self: start;
        }
    }

    @media screen and (max-width: 400px) {
        padding-bottom: 0;
    }
`

/* {
    "company_email": "test@test.com",
    "company_logo": "https://ucarecdn.com/3ec2e65c-b1a5-4961-8dbd-c921572e4a95/",
    "company_name": "Google",
    "created_at": "2022-10-22T19:54:02.995021+00:00",
    "description": "<h1>test</h1><p>test</p>&lt;div&gt;test&lt;/div&gt;",
    "id": 1,
    "location": "USA",
    "salary": "80 - 150k",
    "title": "Software Engineer",
    "type": 1,
    "vacancy": 3
} */