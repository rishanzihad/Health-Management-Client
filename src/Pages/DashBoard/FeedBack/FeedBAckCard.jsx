import React from 'react';
import useCamp from '../../Hooks/useCamp';

const FeedBAckCard = ({ participantCamp }) => {
    const [camps] = useCamp()
    let matchedCamp;
    matchedCamp = camps.find(camp => camp?._id == participantCamp?.campItemIds);
    
    if (matchedCamp) {
      const { scheduledDate, location } = matchedCamp;
 
    } else {
      
      console.error("matchedCamp is undefined");
    }
    
const handleFeedBack =()=>{

}
    return(
    

        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
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

                                        placeholder="FeedBack"
                                        className="textarea w-min-[400px] textarea-bordered "
                                    />
                                    <button className='btn bg-green-400 text-white mt-1'> Submit</button>
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