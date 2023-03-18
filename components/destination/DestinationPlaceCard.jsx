import React from "react";
import { MdLocationOn } from "react-icons/md";

const PlaceCard = ({ dest }) => {
  return (
    <div className="mb-5 relative">
      <p className="text-md bg-white rounded-md p-5">{dest}</p>
      <div className="absolute bottom-2 right-2 text-4xl text-red-600/50 ">
        <MdLocationOn />
      </div>
    </div>
  );
};

export default PlaceCard;
