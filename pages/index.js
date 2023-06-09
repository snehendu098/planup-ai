import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DisplayFrontCard from "../components/Card";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const [saved, setSaved] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/db/all-itinerary");
      setSaved(res.data.itinerary || null);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching your saved plans");
    }
  };

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  return (
    <div className="w-full pb-10 ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center flex-col p-10 mt-7 mb-7 h-[30vh]">
        <p className="text-3xl font-bold">
          Thinking of a vacation? Plan
          <span className="text-blue-500 text-3xl">Up</span>!
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid md:grid-cols-3 grid-cols-1 place-content-center gap-4 px-3">
          <DisplayFrontCard
            img={"/map.jpeg"}
            title={"Destination Finder"}
            description={
              "Find the perfect destination with our AI destination finder tool"
            }
            href={"/destination"}
          />
          <DisplayFrontCard
            img={"/plan.jpg"}
            title={"Itinerary Planner"}
            description={
              "Get the perfect detailed plan for your trip with our AI itinerary planner"
            }
            href={"/itinerary"}
          />
        </div>
      </div>
      {saved && (
        <div className="flex items-center justify-center mt-5 flex-col">
          <p className="text-3xl font-bold">Saved Plans</p>
          <div className="w-full grid grid-cols-2 gap-4">
            {saved.map((plan, index) => (
              <div className="w-full bg-white rounded-md shadow-lg"></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
