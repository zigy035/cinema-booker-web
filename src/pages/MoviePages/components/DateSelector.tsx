import React from 'react';

export const DateSelector: React.FC<{ onDateChange: any }> = (props) => {

    // Generate next 5 dates starting from today
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 5; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toISOString().split('T')[0]);
    }

    return (
        <div className="form-group">
            <label htmlFor="date-select">Select Date:</label>
            <select className="form-control" id="date-select" onChange={(e) => props.onDateChange(e.target.value)}>
                <option value="">Select a date...</option>
                {dates.map((date, index) => (
                    <option key={index} value={date}>{date}</option>
                ))}
            </select>
        </div>
    );
};

export default DateSelector;
