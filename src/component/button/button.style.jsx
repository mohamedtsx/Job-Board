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

    transition: background-color 250ms;

    :hover {
        background-color: rgb(12, 170, 65);
    }
`

export const addToFavoritesBtn = styled.button`
    width: 4.2rem;
    height: 4.2rem;
    border: none;
    background-color: #EFFDF5;
    cursor: pointer;
    border-radius: 0.4rem;
    transition: box-shadow 200ms;

    :hover {
        box-shadow: 0 1px 2px 0 rgb(255 0 0 / 40%); 
    }

`

export const removeJobBtn = styled.button`
    
`

export const baseMiniBtn = styled.button`
    height: 4.2rem;
    padding: 0 2.5rem;
    overflow:hidden;

    font-size: 1.4rem;
    font-weight: 700;
    border: none;

    color: #fff;
    text-transform: capitalize; 

    border-radius: 0.4rem;
    background-color: #00D363;
    cursor: pointer;

    transition: background-color 250ms;

    :hover {
        background-color: rgb(12, 170, 65);
    }

    @media screen and (max-width: 560px) {
        height: 3.2rem;
        padding: 0 1rem;
        font-weight: 500;
        border-radius: 0.2rem;
    }
`

export const dropdownToggleBtn = styled.button`
    width: 40px;
    height: 42px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    display: none;

    span {
        display: block;
        width: 30px;
        height: 3px;
        background-color: #00D363;
        position: absolute;
        transition: all 500ms;
    }

    .top {
        transform: translateY(-8px);
    }
    .bottom {
        transform: translateY(8px);
    }

    &.active .mid{
        transform: translateX(40px);
    }
    &.active .top{
        transform: translateY(0) rotate(45deg);
        transition-delay: 125ms;
    }
    &.active .bottom{
        transform: translateY(0) rotate(315deg);
        transition-delay: 250ms;
    }
${'' /* 
    @media screen and (max-width: 510px) {
        display: inline-block;
    } */}
`