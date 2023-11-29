import React from 'react';

const FeedBAckCard = ({participantCamp}) => {
    return (
        <div className='overflow-x-auto'>
      
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Camp Name</th>
                            <th>Fees</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr >
                    
                            <th>{participantCamp.campName}</th>
                           
                            <td>${participantCamp.fees}</td>
                            <th >{participantCamp.transactionId}</th>
                            <td>{participantCamp.status}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeedBAckCard;