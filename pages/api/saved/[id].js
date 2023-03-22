import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const App = () => {
  const router = useRouter();
  const { id } = router.query;

  const [itinerary, setItinerary] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/unique-itinerary`, {
        data: { id: id },
      });
      setItinerary(res.data);
      console.log(itinerary);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full grid md:grid-cols-2 grid-cols-1">
      <div className="overflow-y-auto w-full p-4"></div>
    </div>
  );
};

export default App;
