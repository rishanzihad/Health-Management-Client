import React from 'react';
import { Link } from 'react-router-dom';

const PopularCard = ({camp}) => {
    const {_id,participant,organizers,name,image,fees,scheduledDate,scheduledTime,location,specializedServices,healthcareProfessionals,targetAudience, comprehensiveDescription}=camp
    return (
        <div className="card    bg-base-100 shadow-xl">
  <figure className='h-full'><img className='h-full'  src={image} alt="Shoes" /></figure>
  <div className="card-body ">
    <h2 className="card-title">
     {name}

    </h2>
    <p>Camp Fees:{fees}</p>
    
    <p>Participant:{participant}</p>
    
    <div className=" w-full py-2 px-6 pt-0">
  <Link className="btn bg-yellow-300 w-full text-white" to={`/details/${_id}`}> <button >Details</button></Link>
  </div>
  </div>
</div>
    );
};

export default PopularCard;