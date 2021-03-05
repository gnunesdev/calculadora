import styled from "styled-components";

export const Container = styled.section`
  background: ${(props) => props.theme.colors.background};
  box-shadow: 1px 1px 5px #cacaca;
  max-width: 400px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .calculator {

    &__keyboard {
      width: 100%;
    }

    &__values {
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      background: ${(props) => props.theme.colors.primary};
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
