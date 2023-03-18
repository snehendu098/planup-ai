import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "../components/Nav";
import { ThemeProvider } from "@material-tailwind/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ToastContainer />
          <div className="max-w-screen min-h-screen bg-gray-300">
            <div className="py-2 px-6 ">
              <Navbar />
            </div>
            <Component {...pageProps} />
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
