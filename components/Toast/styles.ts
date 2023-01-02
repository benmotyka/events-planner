import styled from "styled-components/native";
import { MotiView } from "moti";

export const ToastText = styled.Text`
    font-size: 22px;
    text-align: center;
    color: ${({ theme }) => theme.white}; // should be always white
    opacity: 0.9;
`;

export const ToastCancelText = styled(ToastText)`
    margin-left: 20px;
    opacity: 0.6;
    font-size: 18px;
`;

export const ToastWrapper = styled(MotiView)<{
    backgroundColor: string;
}>`
    position: absolute;
    top: 40px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 5px;
    align-self: center;
    max-width: 350px;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
