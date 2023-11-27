/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const ParticipantCard = ({ regi }) => {
  const axiosSecure = useAxiosSecure();

  const { name,campName, email, phone, gender, healthInfo, emergencyContact } = regi;
  const { data: payment = [],refetch } = useQuery({
    queryKey: ['payment'],
    queryFn: async () => {
      const res = await axiosSecure.get('/payment');

      return res.data;
    },
  });

  const participantPayment = payment.find((pay) => pay.email === email);
  
  //console.log(participantPayment)
const handleStatus =()=>{
    axiosSecure.patch(`/payment/${participantPayment?._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
          toast.success(`${participantPayment.name}Participant Status Approved`)
        }
    })
}
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{campName}</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Health Info: {healthInfo}</p>
          <p>Gender: {gender}</p>
          <p>Emergency Contact: {emergencyContact}</p>
          <p>TransactionId:{participantPayment?.transactionId}</p>

          <div className="card-actions justify-end">
            {participantPayment ? (
              <button onClick={() => handleStatus(participantPayment?._id)} className="btn btn-primary w-full">{participantPayment.status}</button>
            ) : (
              <p>No payment information available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;
