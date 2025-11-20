import Home from "../pages/index";
import Vagas from "../pages/vagas";
import Networking from "../pages/networking";
import Header from "@/components/Header";
import { ThemeProvider } from "../context/ThemeContext";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="app-container">
      <ThemeProvider>
        {" "}
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
