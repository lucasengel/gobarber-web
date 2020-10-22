import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
`;

export const Header = styled.header`
  height: 144px;
  background-color: #28262e;
  display: flex;
  align-items: center;

  div {
    max-width: 1120px;
    margin: 0 auto;
    width: 100%;

    svg {
      color: #999591;
      height: 24px;
      width: 24px;
    }
  }
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: -93px auto 0;
  place-content: center;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 340px;

    h1 {
      font-size: 20px;
      text-align: left;
      margin-bottom: 24px;
    }

    .mb-24 {
      margin-bottom: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  align-self: center;
  margin-bottom: 32px;
  position: relative;

  img {
    border-radius: 50%;
    height: 186px;
    width: 186px;
  }

  label {
    border-radius: 50%;
    background: #ff9000;
    border: none;
    bottom: 0;
    cursor: pointer;
    height: 48px;
    position: absolute;
    right: 0;
    transition: background-color 250ms ease-in-out;
    width: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      color: #312E38;
      height: 20px;
      width: 20px;
    }


    &:hover {
      background: ${shade(.2, '#ff9000')}
    }
  }
`
