import React from 'react';
import { format } from 'date-fns';
import EventPill from './EventPill';

const CalendarDay = ({ day, isCurrentMonth, isToday, isSelected, events, onSelectDate }) => {
  const dayNumberClasses = [
    'h-8 w-8 flex items-center justify-center rounded-full text-sm',
    isToday ? 'bg-blue-600 text-white font-bold shadow' : '',
    !isToday && isSelected ? 'bg-gray-200' : '',
    !isToday && !isSelected ? 'hover:bg-gray-100' : '',
  ].join(' ');

  const cellClasses = [
    'relative flex flex-col h-36 p-2 border-t border-r border-gray-200 transition-colors duration-150',
    isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-400',
    isSelected ? 'bg-blue-50' : '',
    'cursor-pointer'
  ].join(' ');

  return (
    <div className={cellClasses} onClick={() => onSelectDate(day)}>
      <div className="flex justify-end">
        <div className={dayNumberClasses}>
          {format(day, 'd')}
        </div>
      </div>
      <div className="flex-grow overflow-y-auto mt-1 space-y-1 pr-1">
        {events.slice(0, 2).map((event, index) => (
          <EventPill key={index} event={event} />
        ))}
        {events.length > 2 && (
          <div className="text-xs text-gray-500 font-medium mt-1">
            + {events.length - 2} more
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;
