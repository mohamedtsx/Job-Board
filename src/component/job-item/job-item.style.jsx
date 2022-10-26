import styled from "styled-components";

export const JobItemSt = styled.div`
    height: 14.4rem;
    border-reduce: 0.4rem;
    margin: 1.2rem auto;
    text-transform: capitalize;
    background-color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 3.4rem;
`

export const Info = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    img {
        width: 8.2rem;
        height: 8.2rem;
        border: 1px solid #f0f0f0;
    }

    .text-container {
        width: 31.9rem;

    }

    .highlights {
        margin-top: 1.2rem;
        color: #777; 
        display: flex;
        justify-content: space-between;
    }
`

export const Actions = styled.div`
    font-size: 1.4rem;
    width: 18.1rem;
    height: 7.7rem;
    border: 1px solid #EFFDF5;

    display: grid;
    grid-template-columns: repeat(2,auto);
    justify-content: space-between;
    align-content: space-between;

    span {
        grid-column: span 2;
        justify-self: end;
        color: #777;
    }
`

// export const 

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