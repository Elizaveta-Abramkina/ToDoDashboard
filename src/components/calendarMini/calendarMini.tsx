import React, {useState} from 'react';
import {DateTime} from 'luxon'
import './calendarMini.scss'

const CalendarMini = () => {

    const [date, setDate] = useState(DateTime.now())


    const arrayWeekDays = [
        <div className='calendar-week-days' key={Math.random()}>MON</div>,
        <div className='calendar-week-days' key={Math.random()}>TUE</div>,
        <div className='calendar-week-days' key={Math.random()}>WED</div>,
        <div className='calendar-week-days' key={Math.random()}>THU</div>,
        <div className='calendar-week-days' key={Math.random()}>FRI</div>,
        <div className='calendar-week-days' key={Math.random()}>SAT</div>,
        <div className='calendar-week-days' key={Math.random()}>SUN</div>,
    ];

    const firstDayMonth = date.startOf('month').toLocaleString({day: 'numeric'})
    const lastDayMonth = date.endOf('month').toLocaleString({day: 'numeric'})

    const getNextMonth = () => {
        setDate(date.plus({month: 1}))
    }

    const getPrevMonth = () => {
        setDate(date.minus({month: 1}))
    }

    const createPrevDays = () => {
        let arrayDaysAll = [];

        const lastDayPrevMonth = date.minus({month: 1}).endOf('month').toLocaleString({day: 'numeric'});
        const firstDayWeek = date.startOf('month').weekday

        let prevDays = +lastDayPrevMonth
        let count = firstDayWeek;
        while (count > 1) {
            arrayDaysAll.unshift(<div key={prevDays} className="calendar-prev-days">{prevDays}</div>)
            prevDays--
            count--
        }
        return arrayDaysAll
    }

    const createNextDays = () => {
        let arrayDaysAll = [];

        const lastDayWeek = date.endOf('month').weekday

        let count = 7 - lastDayWeek;
        let dateDay = 1;
        while (count > 0) {
            arrayDaysAll.push(<div key={Math.random()} className="calendar-prev-days">{dateDay}</div>)
            dateDay++
            count--
        }
        return arrayDaysAll
    }

    const createDays = (now:DateTime) => {
        let arrayDaysMonth = [];
        arrayDaysMonth.push(createPrevDays())
        const todayDay = date.day
        for (let i = +firstDayMonth; i <= +lastDayMonth; i++) {
            if (i === todayDay && now.month === DateTime.now().month && now.year === DateTime.now().year) {
                arrayDaysMonth.push(<div key={i} className="calendar-days today">{i}</div>)
            } else {
                arrayDaysMonth.push(<div key={i} className="calendar-days">{i}</div>)
            }

        }
        arrayDaysMonth.push(createNextDays())
        return arrayDaysMonth
    }

    return (
        <div className='calendar-mini'>
            <div className='calendar-header'>
                <h3 className='calendar-title-month'>{date.toLocaleString({month: 'short', year: 'numeric'})}</h3>
                <div className='calendar-buttons'>
                    <button onClick={() => {
                        getPrevMonth()
                    }}><i className='arrow left'></i></button>
                    <button onClick={() => {
                        getNextMonth()
                    }}><i className='arrow right'></i></button>
                </div>
            </div>
            <div className='calendar-form'>
                <div className='calendar-week-days-form'>{arrayWeekDays}</div>
                <div className='calendar-form'>{createDays(date)}</div>
            </div>
        </div>
    );
};

export default CalendarMini;
