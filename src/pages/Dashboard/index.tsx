import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { isAfter, isToday } from 'date-fns';
import { format } from 'date-fns/esm';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css'
import { FiClock, FiPower } from 'react-icons/fi';

import { Container, Header, HeaderContent, NextAppointment, Profile, Schedule, Calendar, Content, Section, Appointment } from './styles'

import logoImg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface MonthAvailabilityItem {
  day: number;
  available: boolean
}

interface Appointment {
  id: string;
  date: string;
  user: {
    id: string;
    name: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const { user, logOut } = useAuth()

  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const [monthAvailability, setMonthAvailability] = useState<MonthAvailabilityItem[]>([])
  const [appointments, setAppointments] = useState<Appointment[]>([])

  const handleDateChange = useCallback(
    (day: Date, modifiers: DayModifiers): void => {
      if (modifiers.available && !modifiers.disabled) setSelectedDate(day)
    },
    [],
  )

  const handleMonthChange = useCallback(
    (month: Date) => setCurrentMonth(month),
    [],
  )

  const disabledDays = useMemo(() => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    const dates = monthAvailability
      .filter(day => !day.available)
      .map(day => new Date(year, month, day.day))

    return dates
  }, [currentMonth, monthAvailability])

  const selectedWeekdayAsText = useMemo(() => format(selectedDate, 'EEEE'),
    [selectedDate]
  )

  const selectedDayAsText = useMemo(() => format(selectedDate, 'LLLL do'),
    [selectedDate]
  )

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1
        }
      })
      .then(response => {
        setMonthAvailability(response.data)
      })
  }, [currentMonth, user.id])

  useEffect(() => {
    api
      .get('/appointments/schedule', {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
        }
      })
      .then(response => {
        setAppointments(response.data)
      })

  }, [selectedDate])

  const morningAppointments = useMemo(() => appointments.filter(
    appointment => new Date(appointment.date).getHours() < 13
  ), [appointments])

  const afternoonAppointments = useMemo(() => appointments.filter(
    appointment => new Date(appointment.date).getHours() >= 13
  ), [appointments])

  const nextAppointment = useMemo(() => {
    return appointments
      .sort((a, b) => new Date(a.date) > new Date(b.date) ? 1 : -1)
      .find(appointment => isAfter(new Date(appointment.date), new Date()))
  }, [appointments])

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Welcome,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
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
            {isToday(selectedDate) && <span>Today</span>}
            <span>{selectedWeekdayAsText}</span>
            <span>{selectedDayAsText}</span>
          </p>

          {isToday(selectedDate) && nextAppointment && <NextAppointment>
            <strong>Next appointment</strong>
            <div>
              <img src={nextAppointment.user.avatar_url} alt={nextAppointment.user.name} />
              <strong>{nextAppointment.user.name}</strong>
              <span><FiClock /> {format(new Date(nextAppointment.date), 'hh:mma')}</span>
            </div>
          </NextAppointment>}

          <Section>
            <strong>Morning</strong>
            {morningAppointments.length === 0 && <p>No appointments.</p>}
            {morningAppointments.sort((a, b) => new Date(a.date) > new Date(b.date) ? 1 : -1).map(appointment => (
              <Appointment key={appointment.id}>
                <span>
                  <FiClock />
                  {format(new Date(appointment.date), 'hh:mma')}
                </span>

                <div>
                  <img src={appointment.user.avatar_url} alt={appointment.user.name} />
                  <strong>{appointment.user.name}</strong>
                </div>
              </Appointment>
            ))}
          </Section>

          <Section>
            <strong>Afternoon</strong>
            {afternoonAppointments.length === 0 && <p>No appointments.</p>}
            {afternoonAppointments.sort((a, b) => new Date(a.date) > new Date(b.date) ? 1 : -1).map(appointment => (
              <Appointment key={appointment.id}>
                <span>
                  <FiClock />
                  {format(new Date(appointment.date), 'hh:mma')}
                </span>

                <div>
                  <img src={appointment.user.avatar_url} alt={appointment.user.name} />
                  <strong>{appointment.user.name}</strong>
                </div>
              </Appointment>
            ))}
          </Section>
        </Schedule>

        <Calendar>
          <DayPicker
            weekdaysShort={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] }
            }}
            onDayClick={handleDateChange}
            onMonthChange={handleMonthChange}
            selectedDays={selectedDate}
          />
        </Calendar>
      </Content>
    </Container>
  )
};

export default Dashboard;
