import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const options = ["Budget Friendly", "Mid Range", "Luxurious"];

const Form = () => {
  const [value, setValue] = React.useState(options[null]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <Typography variant="h2" color="blue-gray">
        Generate Itinerary
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Generate the perfect plan of your visit
      </Typography>
      <form className="mt-8 mb-2 md:w-[50vw] lg:w-[30vw] w-[90vw]">
        <div className="mb-4 flex flex-col gap-6">
          <div>
            <p>Destination of your visit</p>
            <Input
              size="lg"
              type="tel"
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
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
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
            <DatePicker className="w-full" />
          </div>
          <div>
            <TextField
              type={"number"}
              id="outlined-basic"
              label="Number of Days"
              variant="outlined"
              className="w-full"
            />
          </div>

          <Button className="mt-6" fullWidth>
            Generate Itinerary
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
