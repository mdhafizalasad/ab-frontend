import React from 'react';
import { format } from "date-fns";
import { useQuery } from '@tanstack/react-query';
import AppointmentOption from './AppointmentOption';
import Loading from '../../../Shared/Loading/Loading';

const VisaAvailableAppointments = ({ selected }) => {
    
    const { data: appointmentOptions, isLoading  } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("visaappointments.json");
            
            return res.json();
        },
    });

   if(isLoading){
    return <Loading></Loading>
   }

    return (
        <div className='my-10 px-5 mx-auto'>
            <div className="text-center font-semibold mb-3 md:mb-10">
                <h2 className="text-primary">Visa Appointments</h2>
                <h3 className="text-2xl md:text-3xl">
                    Visa Appointment on: {format(selected, 'PP')}
                </h3>
            </div>
            

                <div className='grid md:grid-cols-3 gap-4'>
                {
                     appointmentOptions.map(option=>(
                       <AppointmentOption 
                       key={option._id}
                       appointmentOption={option}
                       ></AppointmentOption>
                     ))
                }
            </div>
            
        </div>
    );
};

export default VisaAvailableAppointments;
