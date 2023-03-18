import { Grid } from "@material-ui/core";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useRef, useState } from "react";
import { destToLatLang } from "../../helper/otherHelpers";
import PlaceCard from "./DestinationPlaceCard";

const DataView = ({ destinationData }) => {
  const [locations, setlocations] = useState([]);

  const fetchData = async () => {
    const places = destinationData.map((dest) => {
      return dest.split(":")[0];
    });

    let pairs = [];
    for (let i = 0; i < places.length; i++) {
      const pair = await destToLatLang(places[i]);
      pairs.push(pair);
    }

    setlocations(pairs);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-4 w-full h-full">
      <div className="w-full px-5 h-full">
        <p className="text-3xl font-bold mb-5">Generated Destinations</p>
        <Grid
          container
          spacing={3}
          className="w-full md:overflow-y-scroll max-h-[80vh] mt-5"
        >
          {destinationData.map((destination, index) => (
            <Grid item key={index}>
              <PlaceCard dest={destination} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <LoadScript googleMapsApiKey={process.env.MAPS_API}>
          <GoogleMap
            mapContainerClassName="md:w-full md:h-full w-[90vw] h-[40vh] md:min-h-[70vh]"
            center={locations[0]}
            zoom={0.5}
          >
            {locations.map((place, index) => (
              <Marker
                key={index}
                position={{ lat: place.lat, lng: place.lng }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default DataView;
