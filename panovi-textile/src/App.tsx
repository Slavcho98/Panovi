import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import About from "./pages/AboutPage/About";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Gallery from "./pages/Gallery";
import CookieConsent from "./components/CookieConsent";
import CookieConsent from "./components/CookieConsent";

export default function App() {
  return (
    <BrowserRouter>
      <CookieConsent brand="PANOVI" policyHref="/privacy" />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { fontSize: "14px" },
          success: { iconTheme: { primary: "#10B981", secondary: "#fff" } },
          error: { iconTheme: { primary: "#ef4444", secondary: "#fff" } },
        }}
      />

      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
