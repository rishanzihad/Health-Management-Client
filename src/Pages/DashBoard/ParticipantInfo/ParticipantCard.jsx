/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ParticipantCard = ({ regi }) => {
  const axiosSecure = useAxiosSecure();

  const { campName, email, phone, gender, healthInfo, emergencyContact } = regi;
  const { data: payment = [] } = useQuery({
    queryKey: ['payment'],
    queryFn: async () => {
      const res = await axiosSecure.get('/payment');
      return res.data;
    },
  });

  // Find the payment for the specific participant
  const participantPayment = payment.find((pay) => pay.email === email);

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{campName}</h2>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Health Info: {healthInfo}</p>
          <p>Gender: {gender}</p>
          <p>Emergency Contact: {emergencyContact}</p>

          <div className="card-actions justify-end">
            {participantPayment ? (
              <button className="btn btn-primary w-full">{participantPayment.status}</button>
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
