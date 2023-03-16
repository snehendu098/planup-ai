import React from "react";
import Form from "../components/itinerary/Form";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <Form />
    </div>
  );
};

export default App;
export const getServerSideProps = withPageAuthRequired();
