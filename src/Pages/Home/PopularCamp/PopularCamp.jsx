import React, { useState } from 'react';
import PopularCard from './PopularCard';
import useCamp from '../../Hooks/useCamp';

const PopularCamp = () => {
  const [camps] = useCamp();
  const [sortBy, setSortBy] = useState('participant'); 
  const [sortOrder, setSortOrder] = useState('High to Low'); 

  const handleSortChange = (value) => {
    if (sortBy === value) {
    
      setSortOrder((order) => (order === 'Low To High' ? 'High to Low' : 'Low To High'));
    } else {
     
      setSortBy(value);
      setSortOrder('Low To High');
    }
  };

  const sortedCamps = [...camps].sort((a, b) => {
    if (sortBy === 'participant') {
      return sortOrder === 'Low To High' ? a.participant - b.participant : b.participant - a.participant;
    }
  
    return 0;
  });

  const top8Camps = sortedCamps.slice(0, 8);

  return (
    <div>
      <h1 className='text-4xl font-bold text-white text-center underline mb-5'>Popular Camp</h1>

   
      <div className='mb-5 flex justify-center'>
        <button className='btn bg-red-500 text-white' onClick={() => handleSortChange('participant')}>
          Sort by Participants {sortBy === 'participant' && `(${sortOrder === 'Low To High' ? 'Low to High' : 'High to Low'})`}
        </button>
     
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {top8Camps.map((camp) => (
          <PopularCard key={camp._id} camp={camp}></PopularCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCamp;
