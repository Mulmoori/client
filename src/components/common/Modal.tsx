import React, { ReactNode } from "react";
import { theme } from "../../style/theme";
import styled, { css } from "styled-components";

// Overlay 스타일 컴포넌트
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 90;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface StyledButtonProps {
    colorCode: string;
    textColorCode: string;
}

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
`;

const StyledButton = styled.button<StyledButtonProps>`
    width: 100%;
    border-radius: 20px;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    ${({ textColorCode }) => css`
        color: ${textColorCode};
    `}
    ${({ colorCode }) => css`
        background-color: ${colorCode};
    `}
    ${theme.Fonts.H2};
`;

const Container = styled.div`
    width: 30rem;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 16px;
    background: var(--White, #fff);
    box-shadow: 0px 2px 6px 0px rgba(98, 98, 114, 0.2);
    z-index: 100;
`;

const Title = styled.h1`
    ${theme.Fonts.H1};
    margin-bottom: 2rem;
`;

const Description = styled.p`
    color: ${theme.Colors.neutral700};
    ${theme.Fonts.Sub2};
    margin-bottom: 2rem;
`;

// CustomModal 컴포넌트 타입 정의
interface CustomModalProps {
    title: string;
    description: string;
    children?: ReactNode;
    onOk: () => void;
    onCancel: () => void;
    text1: string;
    text2: string;
    // joinCode?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
    title,
    description,
    children,
    onOk,
    onCancel,
    text1,
    text2,
}) => {
    return (
        <Overlay onClick={onCancel}>
            <Container onClick={(e) => e.stopPropagation()}>
                <Title>{title}</Title>
                <Description>{description}</Description>
                {children}
                <ButtonContainer>
                    <StyledButton
                        onClick={onCancel}
                        textColorCode={theme.Colors.neutral}
                        colorCode={theme.Colors.neutral200}
                    >
                        {text2}
                    </StyledButton>
                    <StyledButton
                        onClick={onOk}
                        textColorCode={theme.Colors.white}
                        colorCode={theme.Colors.primary}
                    >
                        {text1}
                    </StyledButton>
                </ButtonContainer>
            </Container>
        </Overlay>
    );
};

export default CustomModal;
