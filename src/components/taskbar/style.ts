import styled from 'styled-components';
import  SafariImg  from './icons/safari.svg'
import CalculatorImg from './icons/calculator.svg'
import FilesImg from './icons/files.svg'
import MapsImg from './icons/maps.svg'
import NotesImg from './icons/notes.svg'
import TerminalImg from './icons/terminal.svg'

export const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 62px;
    background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));

    border-radius: 10px;
`;

export const Icon = styled.div`
    width: 50px;
    height: 50px;
    margin: 0 15px;
    box-shadow: 0px 16px 34px 6px rgba(0,0,0,0.25);
    border-radius: 15px;
    &:hover{
        cursor: pointer;
        transform: scale(2);
        transition: 0.1s ;
        margin-bottom: 50px;
    }
`;

export const SafariIcon = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${SafariImg});

`;

export const CalculatorIcon = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${CalculatorImg});

`;
export const FilesIcon = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${FilesImg});

`;
export const MapsIcon = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${MapsImg});

`;
export const NotesIcon = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${NotesImg});

`;
export const TerminalIcon = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${TerminalImg});

`;