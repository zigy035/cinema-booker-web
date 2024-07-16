import React from 'react';

const TimeSlots: React.FC<{ timeSlots: string[] }> = (props) => (
    <div className="time-slots">
        <h4>Available Time Slots:</h4>
        <ul>
            { props.timeSlots.map((slot, index) => (
                <li key={index}>{slot}</li>
            )) }
            { props.timeSlots.length === 0 && <p>No time slots available for selected date.</p> }
        </ul>
    </div>
);

export default TimeSlots;
