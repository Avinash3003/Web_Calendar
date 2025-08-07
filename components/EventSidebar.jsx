import React from 'react';
import { format } from 'date-fns';
import { ClockIcon } from './icons';

const EventPillDetails = ({ event }) => {
  const colorClasses = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500' },
    green: { bg: 'bg-green-500', text: 'text-green-500', border: 'border-green-500' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500' },
    red: { bg: 'bg-red-500', text: 'text-red-500', border: 'border-red-500' },
  };

  const currentColors = colorClasses[event.color];

  return (
    <div className="flex space-x-4">
      <div className={`w-1 flex-shrink-0 rounded-full ${currentColors.bg}`}></div>
      <div>
        <h4 className="font-bold text-gray-800">{event.title}</h4>
        <div className="flex items-center space-x-2 text-gray-500 mt-1">
          <ClockIcon className="w-4 h-4" />
          <span className="text-sm">{event.time}</span>
          <span className="text-sm">({event.duration} min)</span>
        </div>
      </div>
    </div>
  );
};

const EventSidebar = ({ selectedDate, events }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
      <h3 className="text-xl font-bold text-gray-800 mb-1">
        {selectedDate ? format(selectedDate, 'EEEE, MMMM do') : 'No date selected'}
      </h3>
      <p className="text-gray-500 mb-6">
        {selectedDate ? 'Schedule for the day' : 'Select a date to see events.'}
      </p>

      {selectedDate && (
        <div className="space-y-6">
          {events.length > 0 ? (
            events.map((event, index) => <EventPillDetails key={index} event={event} />)
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No events scheduled for this day.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EventSidebar;
