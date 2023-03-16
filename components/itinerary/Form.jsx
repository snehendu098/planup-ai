import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Budget Friendly", "Luxurious"];

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
              // label="Name"
              className="focus:!border-t-blue-500"
              variant="text"
              placeholder="Mumbai, India"
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
          <Button className="mt-6" fullWidth>
            Find Destination 🔍
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
