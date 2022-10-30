import styled from "styled-components";
import Banner from '../../assets/banner.svg';

const width = window.innerHeight < 1000;
// const width = false;


export const HeaderSt = styled.div`
    width: 100%;
    padding: 0 5vw;
    min-height: 100vh;

    overflow: hidden;
    background-image: url(${Banner});
    background-size: cover;

    display: flex;
    justify-content: center;
    position: relative;

`

export const Hero = styled.div `
    max-width: 128.3rem;
    height: 51.1rem;
    margin-top: 15.8rem;    
    display: flex;

    @media screen and (max-width: 1300px) {
        display: grid;
        row-gap: 5rem;
        margin-top: 10rem;
        width: 90%;
    }

    @media screen and (max-width: 750px) {
        padding: 0;
        margin: 7rem 2rem;
        width: 100%;
    }

    @media screen and (max-width: 570px) {
        padding-left: 0.5rem;
        padding-right: 0.5rem;

        -webkit-transform: translate(-3rem);
        -moz-transform: translate(-3rem);
        -ms-transform: translate(-3rem);
        -o-transform: translate(-3rem);
        transform: translate(-3rem);
    }

`

export const HeroImage = width ? styled.img`
    width: 50%;
    height: auto;


    @media screen and (max-width: 1300px) {
        width: 30rem;
        justify-self: end;
        -webkit-transform: translate(0, -5rem);
        -moz-transform: translate(0, -5rem);
        -ms-transform: translate(0, -5rem);
        -o-transform: translate(0, -5rem);
        transform: translate(0, -5rem);
    }

    @media screen and (max-width: 570px) {
      transform: translate(0, 4rem);
    }

`: styled.img`
    width: 90%;
    position: absolute;
    bottom: 20rem;
    left: 0;
    height: auto;
`

export const HeroText = styled.div`
    width: 63.5rem;
    height: 24.5rem;
    color: #fff;
    transform: translate(3rem,6.7rem);

    h1 {
        font-weight: 600;
        font-size: 5.6rem;
        text-transform: capitalize;
        margin-bottom: 1.6rem;
    }

    h4 {
        font-weight: 500;
        font-size: 3rem;
        margin-bottom: 1.4rem;
    }

    p {
        font-weight: 500;
        margin-bottom: 4.1rem;    
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        
        h1{
            font-size: 4.2rem;
        }

        h4{
            font-size: 2.8rem;
        }
    }

    @media screen and (max-width: 570px) {
     
        h1 {
            font-size: 3.4rem;
        }

        h4 {
            font-size: 2.4rem;
        }
    }

    @media screen and (max-width: 390px) {
        h1 {
            font-size: 2.8rem;
        }

        h4 {
            font-size: 1.8rem;
        }

        p {
            font-size: 1.4rem;
        }
    }
`