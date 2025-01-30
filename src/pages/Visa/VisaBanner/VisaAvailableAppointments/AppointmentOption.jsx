import React from 'react';



const AppointmentOption = ({appointmentOption}) => {
    const { name, slots } = appointmentOption;
     
    return (
        <div className="card shadow-xl p-6 text-center bg-gradient-to-r from-primary to-secondary">
  
        <div className="card-body py-2">
          <h2 className="text-2xl font-semibold text-center">{name}</h2>
            <p>{slots.length} {slots.length > 1 ? "Times": "Time"} Available </p>
            <button className='btn btn-outline'>Get Service</button>
          
        </div>
      </div>
    );
};

export default AppointmentOption;