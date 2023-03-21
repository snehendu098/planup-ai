import { Typography } from "@material-tailwind/react";
import { Grid } from "@material-ui/core";
import React from "react";

const DataView = ({ data }) => {
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
      </div>
    </>
  );
};

export default DataView;
