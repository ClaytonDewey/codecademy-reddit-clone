import React from 'react';
import styled from 'styled-components';

type BackTopButtonProps = {};

const StyledButton = styled.div`
  position: sticky;
  top: calc(100vh - 8px);
  margin-top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);

  button {
    position: relative;
    cursor: pointer;
    background-color: var(--color-branding);
    border: none;
    color: var(--white);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    min-height: 32px;
    min-width: 32px;
    padding: var(--spacing-0) var(--spacing-2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    text-align: center;
    width: auto;
    transition: opacity 0.25s ease-in-out;

    &:hover {
      opacity: 0.75;
    }
  }
`;

const BackTopButton: React.FC<BackTopButtonProps> = () => {
  const scrollTotop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledButton>
      <button onClick={scrollTotop}>Back to Top</button>
    </StyledButton>
  );
};
export default BackTopButton;
