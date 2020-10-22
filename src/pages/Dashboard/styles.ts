import { shade } from "polished";
import styled from "styled-components";
import ArrowLeftIcon from '../../assets/ArrowLeftIcon.svg';
import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';

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

    a {
      color: #ff9000;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#ff9000')}
      }
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

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    border-bottom: 1px solid #3e3b47;
    color: #999591;
    display: block;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 16px;
    padding-bottom: 16px;
  }

  p {
    color: #999591;
  }
`

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 16px;
  }

  span {
    display: flex;
    align-items: center;
    color: #f4ede8;
    flex-basis: 100px;

    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }

  div {
    align-items: center;
    background: #3e3b47;
    border-radius: 10px;
    display: flex;
    flex: 1;
    padding: 16px 24px;
    margin-left: 24px;

    img {
      border-radius: 50%;
      height: 56px;
      width: 56px;
    }

    strong{
      font-size: 20px;
      margin-left: 24px;
      color: #fff;
    }
  }
`

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    border-radius: 10px;
    font-size: 16px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 10px;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    background: url(${ArrowLeftIcon}) no-repeat center;
    right: auto;
    left: 16px;
    margin-right: 0;
  }

  .DayPicker-NavButton--next {
    background: url(${ArrowRightIcon}) no-repeat center;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
    color: #fff;
  }

  .DayPicker-Day--disabled {
    color: #666360;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`
