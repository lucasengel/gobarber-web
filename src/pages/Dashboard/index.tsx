import React from 'react';
import { Container, Header, HeaderContent, NextAppointment, Profile, Schedule, Calendar, Content } from './styles'

import logoImg from '../../assets/logo.svg'
import { FiClock, FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { user, logOut } = useAuth()

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div><span>Welcome,</span><strong>{user.name}</strong></div>
          </Profile>
          <button type="button" onClick={logOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Scheduled appointments</h1>
          <p>
            <span>Today</span>
            <span>Day 6</span>
            <span>Monday</span>
          </p>

          <NextAppointment>
            <strong>Next appointment</strong>
            <div>
              <img src="http://localhost:3333/files/57e9068169ea9934d628-profile-sq.jpg" alt="Lucas Engel" />
              <strong>Lucas Engel</strong>
              <span><FiClock /> 08:00</span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar>

        </Calendar>
      </Content>
    </Container>
  )
};

export default Dashboard;
