import { useState, useEffect } from "react";
import {
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import axios from "axios";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const { user } = useUser();
  const [data, setData] = useState(null);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.post("/api/db", {
        id: user.sub.split("|")[1],
      });
      setData(res.data);
      console.log("data", res);
    }
    user && fetchData();
  }, [user]);

  return (
    <div className="w-full py-2 px-4 lg:px-8 lg:py-4 bg-white rounded-md shadow-xl">
      <div className="container flex items-center justify-between text-blue-gray-900">
        <Link href={"/"}>
          <p className="mr-4 cursor-pointer py-1.5 font-bold text-xl">
            <span>Plan</span>
            <span className="text-blue-500">Up</span>
          </p>
        </Link>
        <div className="flex items-center">
          {user && (
            <Typography
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block text-slate-900 font-semibold mr-5"
            >
              <span>Planned Trips</span>
            </Typography>
          )}
          <a href={`/api/auth/${(!user && "login") || "logout"}`}>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block bg-blue-500 text-white font-bold rounded-md"
            >
              <span>{(!user && "Log In") || "Log Out"}</span>
            </Button>
          </a>
          {user && data && (
            <p className="ml-4 p-3 bg-gray-600 text-white rounded-md">
              🪙 {data?.points}
            </p>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {user && (
            <p
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2 !text-slate-800 my-5"
            >
              <span className="text-right">Planned Trips</span>
            </p>
          )}
          <a href={`/api/auth/${(!user && "login") || "logout"}`}>
            <Button
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2 bg-blue-500 rounded-md"
            >
              <span>{(!user && "Log In") || "Log Out"}</span>
            </Button>
          </a>
        </div>
      </MobileNav>
    </div>
  );
}
