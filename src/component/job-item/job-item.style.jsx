import styled from "styled-components";


export const JobItemSt = styled.div`
    margin: 1.2rem auto;
    text-transform: capitalize;
    background-color: #fff;

    display: flex;
    justify-content: space-between;

    padding: 2.1vw 2.3vw;
    overflow: hidden;

    transition: box-shadow 240ms cubic-bezier(0.2,0,0.38,0.9);

    :hover {
        box-shadow: 0px 8px 10px rgb(0 118 221 / 30%);        
    }

    @media screen and (max-width: 37.5em) {
        flex-direction: column;
        justify-content: stretch;
    }
`

export const Info = styled.div`
    flex-grow: 1;
    display: flex;
    gap: 2rem;
    align-items: center;
    padding-right: 1rem;
    color: #2d2d2d;

    h1 {
        font-size: 2.4rem;
    }

    .image-container {
        border: 1px solid #f0f0f0;
        background-color: #F5F7FA;
        padding: 1rem;
        border-radius: 0.5rem;
    }
    img {
        width: 6.2rem;
        height: 6.2rem;
    }

    .text-container {
        min-width: 21.5rem;
        width: 100%;
    }

    .job-title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .favoriteLeft {
        display: none;
    }

    .highlights {
        max-width: 32rem;

        margin: 1.2rem 1rem 1.2rem 0;
        color: #777; 
        display: flex;
        justify-content: space-between;
    }

    .highlights span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 1rem;
    }

    @media screen and (max-width: 37.5em) {
        width: 100%;
        gap: 1rem;
        padding-right: 0;

        .favoriteLeft {
            display: block;
        }

        h1 {
            font-size: 2rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .highlights {            
            padding-right: 2rem;
        }

    }

    @media screen and (max-width: 23.5em) {
        .highlights span {
            padding: 0;
        }
    }

`

export const Actions = styled.div`
    font-size: 1.4rem;
    width: 17.5rem;
    height: 7.7rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    span {
        grid-column: span 2;
        justify-self: end;
        color: #777;
    }

    .action-buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-item: center;
    }

    @media screen and (max-width: 37.5em) {
        width: 100%;
        height: fit-content;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-end;

        .action-buttons {
            width: auto; 
            height: auto;
        }

        .favoriteRight {
            display: none;
        }

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


