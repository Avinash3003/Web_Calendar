import React, { useState, useMemo } from 'react';
import { addMonths, subMonths } from 'date-fns';
import CalendarHeader from '../components/CalendarHeader';
import CalendarGrid from '../components/CalendarGrid';
import EventSidebar from '../components/EventSidebar';
import { events as staticEvents } from '../data/Events.js';

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const events = staticEvents;
  console.log("New Date:", subMonths(new Date(),1));

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const handleGoToToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
  };

  const selectedDateEvents = useMemo(() => {
    if (!selectedDate) return [];
    console.log("Selected: "+selectedDate)
    return events
      .filter(event => event.date.toDateString() === selectedDate.toDateString())
      .sort((a, b) => a.time.localeCompare(b.time));
  }, [selectedDate, events]);

  return (
    <div className="min-h-screen bg-gray-100/50 text-gray-800 p-4 sm:p-6 lg:p-8">
      <main className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <CalendarHeader
            currentDate={currentDate}
            onNextMonth={handleNextMonth}
            onPrevMonth={handlePrevMonth}
            onGoToToday={handleGoToToday}
          />
          <CalendarGrid
            currentDate={currentDate}
            selectedDate={selectedDate}
            events={events}
            onSelectDate={handleSelectDate}
          />
        </div>
        <div className="lg:col-span-1">
          <EventSidebar 
            selectedDate={selectedDate} 
            events={selectedDateEvents} 
          />
        </div>
      </main>
    </div>
  );
};

export default App;
