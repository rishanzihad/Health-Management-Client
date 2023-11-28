import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const CampCard = ({camp}) => {
  const {user}=useContext(AuthContext)
  const {_id,organizers,name,image,fees,scheduledDate,scheduledTime,location,specializedServices,healthcareProfessionals,targetAudience, comprehensiveDescription,participant}=camp
    return (
        <div className='md:flex'>
           <div className='md:w-2/3'>
        <img className='w-full h-full md:rounded-l-lg' src={image} alt="" />
           </div>
           <div className="relative flex-1 flex w-full  flex-col md:rounded-r-lg bg-gradient-to-tr from-red-600 to-green-400 bg-clip-border px-8 py-2 text-white shadow-md shadow-pink-500/40">
  <div className="relative pb-8 m-0 mb-2 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
    <p className="block font-bold text-3xl antialiased font-sans leading-normal text-white ">
      Fees
    </p>
    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
      <span className="mt-2 text-4xl">$</span>{fees}
     
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <h1 className="block font-sans text-xl antialiased font-bold leading-relaxed text-inherit">
          {name}
        </h1>
      </li>
      {
        user?.email?  <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        <span className='font-bold'>Healthcare Professionals: </span>{healthcareProfessionals}
        </p>
      </li>:''
      }
     {
      user?.email? <li className="flex items-center gap-4">
      <span className="p-1 border rounded-full border-white/20 bg-white/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          ></path>
        </svg>
      </span>
      <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
      <span className='font-bold'>Organizers: </span>{organizers}
      </p>
    </li>:''
     }
      {
        user?.email?<li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        <span className='font-bold'>Participants: </span>{participant}
        </p>
      </li>:''
      }
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        <span className='font-bold'>specializedServices: </span>{specializedServices}
        </p>
      </li>
    </ul>
  </div>
  <div className="p-0 mt-4">
  <div className=" w-full py-2 px-6 pt-0">
  <Link className="btn bg-yellow-300 w-full" to={`/details/${_id}`}> <button >Details</button></Link>
  </div>
  </div>
</div>

        </div>
    );
};

export default CampCard;