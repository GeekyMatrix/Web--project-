import React, { useState, useEffect } from 'react';
import Card from './Card';

const Board = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => setTickets(data));
  }, []);

  // Function to group tickets based on selected grouping option
  const groupTickets = (option) => {
    // Logic to group tickets based on option (status, user, or priority)
    // Return grouped tickets
  };

  // Function to sort tickets based on selected sorting option
  const sortTickets = (option) => {
    // Logic to sort tickets based on option (priority or title)
    // Return sorted tickets
  };

  return (
    

      {/* Render grouping and sorting options */}
      {/* Render cards */}
    

  );
};

export default KanbanBoard;