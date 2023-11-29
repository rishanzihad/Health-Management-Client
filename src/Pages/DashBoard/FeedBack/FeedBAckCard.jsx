import React from 'react';
import useCamp from '../../Hooks/useCamp';

import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const FeedBAckCard = ({ participantCamp }) => {
    const [camps] = useCamp()
    const axiosSecure =useAxiosSecure()
    let matchedCamp;
    matchedCamp = camps.find(camp => camp?._id == participantCamp?.campItemIds);

    if (matchedCamp) {
        const { campName,scheduledDate, location } = matchedCamp;

    } else {

        console.error("matchedCamp is undefined");
    }

    const handleFeedBack = async(e) => {
        e.preventDefault()
        const form =e.target 
        const feedback =form.feedback.value 
        const feedbackForm ={
            campName:participantCamp.campName,
            feedback,
            date:matchedCamp?.scheduledDate
        }
        const feedRes =await axiosSecure.post('/feedback',feedbackForm)
        if(feedRes.data.insertedId){
          
            form.reset()
            toast.success(`FeedBack Submit`)
            
        }
        

       
    }
    return (


        <div className="overflow-x-auto">
            <table className="table table-zebra">

                <thead>
                    <tr>
                        <th className='text-center'>Camp Name</th>
                        <th className='text-center'>FeedBack</th>
                        <th className='text-center'>Fees</th>
                        <th className='text-center'>Transaction Id</th>
                        <th className='text-center'>Status</th>
                        <th className='text-center'>Venue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >

                        <th>{participantCamp.campName}</th>
                        <td>
                            <form onSubmit={handleFeedBack}>
                                <div className="form-control w-full my-6">

                                    <textarea
                                        required
                                        name='feedback'
                                        placeholder="FeedBack"
                                        className="textarea w-min-[400px] textarea-bordered "
                                    />
                                    <button type='submit' className='btn bg-green-400 text-white mt-1'> Submit</button>
                                </div>
                            </form>
                        </td>
                        <td>${participantCamp.fees}</td>
                        <th >{participantCamp.transactionId}</th>
                        <td>{participantCamp.status}</td>
                        <td>{matchedCamp?.location}</td>

                    </tr>


                </tbody>
            </table>
        </div>

    );
};

export default FeedBAckCard;