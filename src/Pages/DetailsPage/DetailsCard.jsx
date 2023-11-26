/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationModal from "./RegistrationModal";




const DetailCard = ({ camp }) => {
    const { _id, organizers, name, image, fees, scheduledDate, scheduledTime, location, specializedServices, healthcareProfessionals, targetAudience, comprehensiveDescription } = camp
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            .
            <div className="mt-12 ">
                <div className="relative flex rounded-t-xl rounded-b-xl flex-col text-gray-700 bg-white shadow-md   bg-clip-border">
                    <div className="relative rounded-t-xl    overflow-hidden text-white shadow-lg  bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <div className=" flex-1 w-full">
                            <img
                                src={image}
                                alt="img-blur-shadow"
                                className=" h-full  w-full "


                            />
                        </div>
                    </div>
                    <div className="p-6 rounded-b-xl bg-gradient-to-tr from-orange-400 to-red-300">
                        <div className="flex justify-around">
                            <h5 className="block mb-2 text-3xl font-semibold font-sans md:text-4xl antialiased  leading-snug tracking-normal text-blue-gray-900">
                                Name:{name}
                            </h5>

                        </div>
                        <div className="lg:flex gap-2 justify-between">
                            <h5 className="block mb-2 font-semibold font-sans text-2xl antialiased  leading-snug tracking-normal text-blue-gray-900">
                                Specialized Services:  {specializedServices}
                            </h5>
                            <h5 className="block mb-2 font-semibold font-sans text-2xl antialiased  leading-snug tracking-normal text-blue-gray-900">
                                Health care Professionals:  {healthcareProfessionals}
                            </h5>

                        </div>
                        <div className="md:flex gap-2 justify-between">
                            <h5 className="block mb-2 font-semibold font-sans text-2xl antialiased  leading-snug tracking-normal text-blue-gray-900">
                                ScheduledDate:  {scheduledDate}
                            </h5>
                            <h5 className="block mb-2 font-semibold font-sans text-2xl antialiased  leading-snug tracking-normal text-blue-gray-900">
                                ScheduledTime:  {scheduledTime}
                            </h5>

                        </div>
                        <div className="md:flex gap-10">
                            <h5 className="block mb-2 font-semibold font-sans text-2xl antialiased  leading-snug tracking-normal text-blue-gray-900">
                                Location::  {location}
                            </h5>
                            <h5 className="block mb-2 font-semibold font-sans text-2xl antialiased  leading-snug tracking-normal text-blue-gray-900">
                                Fees:  ${fees}
                            </h5>

                        </div>
                        <div className="  mb-2">
                            <div className="md:flex justify-between">
                                <h1 className="block text-black-400 font-sans font-bold text-base antialiased  leading-relaxed text-inherit">
                                    Organizer Name:{organizers}
                                </h1>
                                <h1 className="block text-black-400 font-sans font-bold text-base antialiased  leading-relaxed text-inherit">
                                    Target Audience:{targetAudience}
                                </h1>

                            </div>
                            <p className="block font-sans font-bold text-base antialiased  leading-relaxed text-inherit">
                                <span className=" text-gray-500">DesCription:{comprehensiveDescription}</span>
                            </p>

                        </div>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">

                        </p>
                        <div className="w-full py-2 pt-0">
                            <button onClick={openModal} className="btn bg-red-500 w-full text-white">
                                Join Camp
                            </button>
                        </div>
                        <RegistrationModal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            onRegister={(participantDetails) => {
                   
                                
                                closeModal();
                            }}
                           
                            camp={camp}
                        />
                    
                </div>

            </div>

        </div>
        </div >
    );
};

export default DetailCard;