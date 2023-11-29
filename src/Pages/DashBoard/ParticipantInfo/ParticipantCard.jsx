/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const ParticipantCard = ({ regi }) => {
  const axiosSecure = useAxiosSecure();

  const { _id,name,campName, email, phone, gender, healthInfo, emergencyContact,paymentId } = regi;
  const { data: payment = [],refetch } = useQuery({
    queryKey: ['payment'],
    queryFn: async () => {
      const res = await axiosSecure.get('/payment');

      return res.data;
    },
  });
  console.log(paymentId)

  const participantPayment = payment.find((pay) => pay._id === paymentId);
 console.log(participantPayment)

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
const handleRegister =(_id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Decline it!"
}).then((result) => {
    if (result.isConfirmed) {

        axiosSecure.delete(`/registerInfo/${_id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })
    }
});
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
           
                <button onClick={() => handleStatus(participantPayment?._id)} className="btn btn-primary w-full">{participantPayment?.status}</button>
             
            ) : (
              <p>No payment information available</p>
            )}
            {
              participantPayment?.status == 'Approved'? (''):
              (<button onClick={()=>handleRegister(_id)} className='btn bg-red-500 text-white w-full'>Cancel Registration
              </button>)
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;
