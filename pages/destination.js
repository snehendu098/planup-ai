import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import DestinationCard from "../components/destination/DestinationCard";
import { formatDataString } from "../helper/otherHelpers";
import DataView from "../components/destination/DataView";

const App = () => {
  const [destionationConfig, setDestionationConfig] = useState({
    interests: null,
    country: null,
    likings: null,
  });

  const [destinationData, setDestinationData] = useState([]);

  const handleDestClick = async () => {
    if (!destionationConfig.likings) {
      return toast.error("Please provide your likings");
    }

    const res = await axios.post("/api/destination", {
      interests: destionationConfig.interests,
      country: destionationConfig.country?.label || "abroad",
      likings: destionationConfig.likings,
    });

    let data = formatDataString(res.data.data);
    setDestinationData(data);
  };

  return (
    <div className="flex flex-col items-center justify-center px-5 p-10">
      {destinationData.length === 0 && (
        <DestinationCard
          destionationConfig={destionationConfig}
          setDestionationConfig={setDestionationConfig}
          handleDestClick={handleDestClick}
        />
      )}
      {destinationData.length > 0 && (
        <DataView destinationData={destinationData} />
      )}
    </div>
  );
};

export default App;
