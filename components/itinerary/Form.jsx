import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Form = ({ itineraryConfig, setItineraryConfig, options, formClick }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-3">
      <Typography variant="h2" color="blue-gray">
        Generate Itinerary
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Generate the perfect plan of your visit
      </Typography>
      <form className="mt-8 mb-2 w-full">
        <div className="mb-4 flex flex-col gap-6">
          {/* dest */}
          <div>
            <p>Destination of your visit</p>
            <Input
              size="lg"
              type="tel"
              value={itineraryConfig.dest}
              onChange={(e) => {
                setItineraryConfig({
                  ...itineraryConfig,
                  dest: e.target.value,
                });
              }}
              className="focus:!border-t-blue-500 active:!border-t-blue-500 !border-t-blue-gray-200"
              variant="text"
              placeholder="Mumbai, India"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
            />
          </div>

          {/* budget */}
          <div>
            <Autocomplete
              value={itineraryConfig.budget}
              onChange={(event, newValue) => {
                setItineraryConfig({ ...itineraryConfig, budget: newValue });
              }}
              inputValue={itineraryConfig.budget}
              onInputChange={(event, newInputValue) => {
                setItineraryConfig({
                  ...itineraryConfig,
                  budget: newInputValue,
                });
              }}
              id="controllable-states-demo"
              options={options}
              renderInput={(params) => <TextField {...params} label="Budget" />}
              className=""
            />
          </div>
          {/* Date */}
          <div>
            <p>Start Date</p>
            <DatePicker
              className="w-full"
              value={itineraryConfig.date}
              onChange={(e) => {
                console.log(e.$d);
                setItineraryConfig({ ...itineraryConfig, date: e });
              }}
            />
          </div>
          <div>
            <TextField
              type={"number"}
              id="outlined-basic"
              label="Number of Days"
              variant="outlined"
              className="w-full"
              value={itineraryConfig.days}
              onChange={(e) => {
                setItineraryConfig({
                  ...itineraryConfig,
                  days: e.target.value,
                });
              }}
            />
          </div>

          <Button onClick={formClick} className="mt-6" fullWidth>
            Generate Itinerary
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
