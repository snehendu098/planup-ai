import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "../components/Nav";
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <div className="max-w-screen min-h-screen bg-gray-300">
          <div className="py-2 px-4">
            <Navbar />
          </div>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
