import React, { useMemo } from 'react';
import { DAY_NAMES, generateMonthMatrix } from '../utils/calendarUtils';
import CalendarDay from './CalendarDay';
import { isSameMonth, isToday, isSameDay } from 'date-fns';

const CalendarGrid = ({ currentDate, selectedDate, events, onSelectDate }) => {
  const monthMatrix = useMemo(() => generateMonthMatrix(currentDate), [currentDate]);

  const eventsByDate = useMemo(() => {
    return events.reduce((acc, event) => {
      const dateKey = event.date.toDateString();
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(event);
      // Sort events by time
      acc[dateKey].sort((a, b) => a.time.localeCompare(b.time));
      return acc;
    }, {});
  }, [events]);

  return (
    <div className="grid grid-cols-7">
      {DAY_NAMES.map((day) => (
        <div key={day} className="text-center font-semibold text-sm text-gray-500 py-3 border-b">
          {day}
        </div>
      ))}
      {monthMatrix.flat().map((day, index) => {
        const dayEvents = eventsByDate[day.toDateString()] || [];
        return (
          <CalendarDay
            key={index}
            day={day}
            isCurrentMonth={isSameMonth(day, currentDate)}
            isToday={isToday(day)}
            isSelected={selectedDate ? isSameDay(day, selectedDate) : false}
            events={dayEvents}
            onSelectDate={onSelectDate}
          />
        );
      })}
    </div>
  );
};

export default CalendarGrid;
