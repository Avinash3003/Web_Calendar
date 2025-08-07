import React from 'react';
import { format } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const CalendarHeader = ({ currentDate, onPrevMonth, onNextMonth, onGoToToday }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-gray-800">
        {format(currentDate, 'MMMM yyyy')}
      </h2>
      <div className="flex items-center space-x-2">
        <button
          onClick={onGoToToday}
          className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Today
        </button>
        <div className="flex items-center">
          <button
            onClick={onPrevMonth}
            aria-label="Previous month"
            className="p-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={onNextMonth}
            aria-label="Next month"
            className="p-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
