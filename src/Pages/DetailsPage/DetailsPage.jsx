import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';
import useCamp from '../Hooks/useCamp';

const DetailsPage = () => {
    //const camps =useLoaderData()
    const [camp,setCamp] =useState([])
    const [camps] = useCamp();

    const {id} =useParams()
   
    useEffect(()=>{
        const findCamp =camps && camps?.find(Camp => Camp._id == id)
        setCamp(findCamp)
        console.log(findCamp)
      
    },[id,camps])
  
    return (
        <div>
        {camp ? (
          <DetailsCard key={camp._id} camp={camp} />
        ) : (
          <p>Camp details not found.</p>
        )}
      </div>
    );
};


export default DetailsPage;