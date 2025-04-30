import { styled } from 'styled-components';


export const ContainersStyle = styled.div`
  min-width: 300px;
  margin: 0 auto;
  padding: 0 16px;

  outline: 2px solid red;
  outline-offset: -2px;

  @media screen and (min-width: 768px) {
    padding-left: calc(40px + (40 * ((100vw - 768px) / 672)));
    padding-right: calc(40px + (40 * ((100vw - 768px) / 672)));
  }

`
