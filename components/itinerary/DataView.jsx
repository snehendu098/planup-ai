import { Typography } from "@material-tailwind/react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { formatDataString } from "../../helper/otherHelpers";

const DataView = ({ data, location, budget, dest }) => {
  const saveItinerary = async () => {
    console.log(location);
    try {
      console.log("clicked");
      console.log(location);
      const res = await axios.post("/api/itinerary/save", {
        plan: data.join("\n\n"),
        location,
        budget: budget,
        name: dest,
      });
      if (res.data.success) {
        return toast.success("Itinerary saved");
      }
    } catch (error) {
      console.log(error);
      return toast.error("Error saving itinerary");
    }
  };
  return (
    <>
      {/* filter */}
      <p className="text-3xl px-2 font-bold">Browse the place</p>

      {/* shower */}
      <div className="w-full overflow-y-scroll md:max-h-[90vh] mt-5 p-2">
        <Typography className="text-xl font-semibold mb-2">
          Itenerary
        </Typography>
        <Grid spacing={3}>
          {data.map((item, index) => (
            <>
              <p className="text-sm" key={index}>
                {item}
              </p>
              <br />
            </>
          ))}
        </Grid>
        <div
          onClick={saveItinerary}
          className="bg-blue-500 cursor-pointer rounded-md p-3 text-white font-semibold text-center"
        >
          Save Itinerary (10 points)
        </div>
      </div>
    </>
  );
};

export default DataView;
