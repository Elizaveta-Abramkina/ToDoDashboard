import React, { useState} from 'react';
import {DateTime} from 'luxon'
import './CalendarMini.scss'



const arrayWeekDays = new Array(7).fill(null).map((i, ind) => {
    const valueWeekDay = DateTime.fromObject({weekday: ind + 1}).toLocaleString({weekday: "short"})
    return <div className='calendar-week-days' key={Math.random()}>{valueWeekDay}</div>
})

const CalendarMini  = () => {

    const [date, setDate] = useState(DateTime.now())
    const firstDayMonth = date.startOf('month').toLocaleString({day: 'numeric'})
    const lastDayMonth = date.endOf('month').toLocaleString({day: 'numeric'})
    const [elDay, setElDay] = useState<HTMLDivElement | null>(null)

    const getNextMonth = () => {
        setDate(date.plus({month: 1}))
    }

    const getPrevMonth = () => {
        setDate(date.minus({month: 1}))
    }

    const createPrevDays = () => {
        const arrayDaysAll = [];

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
        const arrayDaysAll = [];

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

    // const handleClickDay = (event: React.MouseEvent ) :void=> {
    //     const el = event.target as HTMLDivElement
    //     console.log(el)
    //     if (elDay === null) {
    //         el.classList.add('selected')
    //         setElDay(el)
    //         return;
    //     }
    //     if(elDay !== el){
    //         elDay.classList.remove('selected')
    //         el.classList.add('selected')
    //         setElDay(el)
    //     }
    // }

    const addClassDays = (i: number, now: DateTime) => {
        const todayDay = date.day
        const dayElement = (classNameDay: string) => <div key={i} className={`calendar-days ${classNameDay}`}>{i}</div>

        if (i === todayDay && now.month === DateTime.now().month && now.year === DateTime.now().year) {
            return dayElement('today')
        } else {
            return dayElement('')
        }
    }

    const createDays = (now: DateTime) => {
        const arrayDaysMonth = [];
        arrayDaysMonth.push(createPrevDays())
        for (let i = +firstDayMonth; i <= +lastDayMonth; i++) {
            arrayDaysMonth.push(addClassDays(i, now))
        }
        arrayDaysMonth.push(createNextDays())
        return arrayDaysMonth
    }

    return (
        <div className='calendar-mini'>
            <div className='calendar-header'>
                <h3 className='calendar-title-month'>{date.toLocaleString({month: 'short', year: 'numeric'})}</h3>
                <div className='calendar-buttons'>
                    <button className='calendar-button button-left' onClick={() => {
                        getPrevMonth()
                    }}><i className='arrow left'></i></button>
                    <button className='calendar-button button-right' onClick={() => {
                        getNextMonth()
                    }}><i className='arrow right'></i></button>
                </div>
            </div>
            <div className='calendar-form'>
                <div className='calendar-week-days-form'>{arrayWeekDays}</div>
                {/*<div className='calendar-form' onClick={handleClickDay}>{createDays(date)}</div>*/}
                <div className='calendar-form' >{createDays(date)}</div>
            </div>
        </div>
    );
};

export default CalendarMini;
