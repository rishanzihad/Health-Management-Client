import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useCamp from "../Hooks/useCamp";
import CampCard from "./CampCard";

const AvailableCamp = () => {
  const [camps] = useCamp();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("mostRegistered"); 


  const filteredCamps = camps.filter((camp) =>
    camp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const sortedCamps = [...filteredCamps].sort((a, b) => {
    switch (sortOption) {
      case "mostRegistered":
        return b.participant - a.participant;
      case "targetAudience":
        return a.targetAudience.localeCompare(b.targetAudience);
      case "alphabeticalOrder":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="px-4">
      <Helmet>
        <title>Medical Camp || Available</title>
      </Helmet>
      .
      <div>
        <h1 className="text-4xl font-bold mt-20 text-white flex underline justify-center">
          Available Camps
        </h1>
        <div className="grid grid-cols-1 gap-5 mt-10">
    
          <input
            type="text"
            placeholder="Search camps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" border-white input "
          />

     
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="mt-3  border-white input"
          >
            <option value="mostRegistered">Most Registered</option>
            <option value="targetAudience">Target Audience</option>
            <option value="alphabeticalOrder">Alphabetical Order</option>
          </select>

     
          {sortedCamps.map((camp) => (
            <CampCard key={camp._id} camp={camp}></CampCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableCamp;
