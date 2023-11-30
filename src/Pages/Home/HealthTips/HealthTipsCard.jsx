import React from 'react';

const HealthTipsCard = ({tip}) => {
    const {name,image,author,source,description,userImage,userName}=tip
    return (
        <div
  className="relative grid w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div
  style={{ backgroundImage: `url('${image}')`,  }}
  className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none  bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
 
  <div className="relative p-6 px-6 py-14 md:px-12">
  <h1 className='text-4xl font-bold text-white mb-5'>Title: {name}</h1>
  <h4 className='text-white mb-4'>{author}</h4>
  <h4 className='text-white mb-4'>{source}</h4>
    <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
     {description}
    </h2>
   
    <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
      {userName}
    </h5>
    <img alt="Tania Andrew"
      src={userImage}
      className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
  </div>
</div>  

    );
};

export default HealthTipsCard;