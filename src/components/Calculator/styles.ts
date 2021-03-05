import styled from "styled-components";

export const Container = styled.section`
  background: ${(props) => props.theme.colors.background};
  box-shadow: 1px 1px 5px #cacaca;
  max-width: 400px;
  height: calc(100vh - 60px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .calculator {
    &__theme {
      margin: 20px auto auto;
    }

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
