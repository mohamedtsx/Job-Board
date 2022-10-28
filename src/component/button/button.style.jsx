import styled from 'styled-components';

export const baseBtn = styled.button`
    height: 5.1rem;
    padding: 1.6rem 2.5rem;
    border: none;

    color: #fff;
    font-size: 1.6rem;
    text-transform: capitalize; 
    
    border-radius: 0.4rem;
    background-color: #00D363;
    cursor: pointer;
`

export const addToFavoritesBtn = styled.button`
    border: none;
    width: 4.2rem;
    height: 4.2rem;
    background-color: #EFFDF5;
    cursor: pointer;
`

export const removeJobBtn = styled.button`
    background-color: blue;
    
`

export const baseMiniBtn = styled.button`
    height: 4.2rem;
    overflow:hidden;
    padding: 0 2.5rem;

    weight: 700;
    font-size: 1.4rem;
    border: none;

    color: #fff;
    text-transform: capitalize; 

    border-radius: 0.4rem;
    background-color: #00D363;
    cursor: pointer;
`

export const dropdownToggleBtn = styled.button`
    width: 4rem;
    height: 4.2rem;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: none;

    span {
        display: block;
        width: 3rem;
        height: 0.3rem;
        background-color: #00D363;
        position: absolute;
        transition: all 500ms;
    }

    .top {
        transform: translateY(-0.8rem);
    }
    .bottom {
        transform: translateY(0.8rem);
    }

    &.active .mid{
        transform: translateX(4rem);
    }
    &.active .top{
        transform: translateY(0) rotate(45deg);
        transition-delay: 125ms;
    }
    &.active .bottom{
        transform: translateY(0) rotate(315deg);
        transition-delay: 250ms;
    }

    @media screen and (max-width: 500px) {
        display: block;
    }
`