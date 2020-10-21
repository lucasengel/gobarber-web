import styled from "styled-components";

export const Container = styled.div``

export const Header = styled.div`
  padding: 32px 0;
  background: #28262e;
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: none;

    svg {
      color: #999591;
      height: 20px;
      width: 20px;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    border-radius: 25%;
    height: 56px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9000;
    }
  }
`

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`
export const Schedule = styled.div`
  flex: 1;
  margin-right: 160px;

  h1 {
    font-size: 36px;
  }

  p {
    align-items: center;
    color: #ff9000;
    display: flex;
    font-weight: 500;
    margin-top: 8px;

    span {
      align-items: center;
      display: flex;
    }

    span + span:before {
      background-color: #ff9000;
      content: '';
      height: 12px;
      margin: 0 8px;
      width: 1px;
    }
  }
`

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    align-items: center;
    background: #3e3b47;
    border-radius: 10px;
    display: flex;
    padding: 16px 24px;
    margin-top: 16px;
    position: relative;

    &:before {
      content: '';
      background-color: #ff9000;
      height: 80%;
      left: 0;
      position: absolute;
      top: 10%;
      width: 1px;
    }

    img {
      border-radius: 50%;
      height: 80px;
      width: 80px;
    }

    strong{
      margin-left: 24px;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 8px;
      }
    }
  }
`

export const Calendar = styled.aside`
  width: 380px;
`
