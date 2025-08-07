import React from 'react';

const colorClasses = {
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
  purple: 'bg-purple-100 text-purple-800',
  red: 'bg-red-100 text-red-800',
};

const EventPill = ({ event }) => {
  return (
    <div
      className={`p-1.5 rounded-md text-xs font-medium truncate ${colorClasses[event.color]}`}
    >
      {event.title}
    </div>
  );
};

export default EventPill;
