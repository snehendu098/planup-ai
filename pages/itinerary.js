import React, { useEffect, useState } from "react";
import Form from "../components/itinerary/Form";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { toast } from "react-toastify";
import { destToLatLang, formatDataString } from "../helper/otherHelpers";

import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import DataView from "../components/itinerary/DataView";
import { useUser } from "@auth0/nextjs-auth0/client";

const options = ["Budget Friendly", "Mid Range", "Luxurious"];

const App = () => {
  const [map, setMap] = useState(null);
  const [itineraryConfig, setItineraryConfig] = useState({
    budget: options[null],
    dest: "",
    date: "",
    days: "",
  });

  const m = useUser();

  const [data, setData] = useState([]);
  const [bounds, setBounds] = useState(null);
  const [location, setLocation] = useState(null);

  console.log(m);

  useEffect(() => {
    const getPscale = async () => {
      try {
        const users = await fetch("/api/db", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("data", users);
      } catch (error) {
        console.log(error);
      }
    };
    getPscale();
  }, []);

  const formClick = async () => {
    if (
      !itineraryConfig.dest ||
      !itineraryConfig.date ||
      !itineraryConfig.days
    ) {
      console.log(itineraryConfig);
      return toast.error("Please provide all the details");
    }

    const pairs = await destToLatLang(itineraryConfig.dest);
    if (!pairs) {
      return toast.error("Please provide a valid destination");
    } else {
      setLocation(pairs);
    }

    const res = await axios.post("/api/itinerary", {
      place: itineraryConfig.dest,
      days: itineraryConfig.days,
      startdate: itineraryConfig.date,
      budget: itineraryConfig.budget,
    });

    let data = formatDataString(res.data.data);
    console.log(data);
    setData(data);
  };

  return (
    <div className="flex flex-col items-center justify-center px-10">
      <div className="grid grid-cols-1 w-[95vw] md:grid-cols-2 gap-4 lg:grid-cols-3">
        <div className="col-span-1 w-full rounded-md pt-3 mb-2">
          {data.length === 0 && (
            <Form
              itineraryConfig={itineraryConfig}
              setItineraryConfig={setItineraryConfig}
              options={options}
              formClick={formClick}
            />
          )}
          {data.length !== 0 && <DataView data={data} />}
        </div>
        {/* map */}
        <div className="lg:col-span-2 col-span-1">
          <LoadScript googleMapsApiKey={process.env.MAPS_API}>
            <GoogleMap
              mapContainerClassName="md:w-full md:h-full w-[90vw] h-[40vh] md:min-h-[70vh]"
              center={location || { lat: -3.745, lng: -38.523 }}
              zoom={10}
              onLoad={(map) => {
                setMap(map);
              }}
            >
              {location && <Marker position={location} />}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default App;
export const getServerSideProps = withPageAuthRequired();
