import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import { CookieBanner } from "@/components/CookieBanner";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";
import Terms from "./pages/Terms";
import NotFound from "./pages/not-found/Index";

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <CookieBanner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie-policy" element={<Cookie />} />
            <Route path="/termini" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
