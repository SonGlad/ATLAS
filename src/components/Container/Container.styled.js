import { styled } from 'styled-components';


export const ContainersStyle = styled.div`
  min-width: 300px;
  margin: 0 auto;
  /* max-width: 320px; */
  padding: 0 16px;

  /* outline: 2px solid red;
  outline-offset: -2px; */

  @media screen and (min-width: 768px) {
    /* max-width: 834px; */
    padding: 0 40px;
  }

  @media screen and (min-width: 1440px) {
    /* max-width: 1440px; */
    padding: 0 80px;
  }
`
