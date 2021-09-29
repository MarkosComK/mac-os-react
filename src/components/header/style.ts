import styled from 'styled-components';
import { Apple } from '../../styles/Icons'
import { PowerOutline } from '../../styles/Icons';
import { VolumeUpFill } from '../../styles/Icons'

export const Container = styled.div`
    width: 100%;
    height: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: rgba(255, 255, 255, 0.2);
`;
export const AppleIcon = styled(Apple)`
    width: 20px;
    height: 20px;
    margin-left: 15px;
    fill: white;
    &:hover{
        cursor: pointer;
    }
`;


export const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    width: 100px;
    height: 100%;
    
    background: rgba(255, 255, 255, 0.2);
    
    border-radius: 6px 0px 0px 6px;
`;

export const SoundIcon = styled(VolumeUpFill)`
    width: 20px;
    height: 20px;
    fill: white;
    &:hover{
        cursor: pointer;
    }
`;

export const PowerIcon = styled(PowerOutline)`
    width: 20px;
    height: 20px;
    fill: white;
    &:hover{
        cursor: pointer;
    }
`;