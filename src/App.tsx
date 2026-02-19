import CookieBanner from "./components/CookieBanner";
import About from "./pages/About";
import Trademark from "./pages/Trademark";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";

import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
    <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/about" element={<About />} />
  <Route path="/privacy" element={<Privacy />} />
  
  <Route path="/cookies" element={<Cookies />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/trademark" element={<Trademark />} />
  <Route path="*" element={<NotFound />} />
</Routes>
     </BrowserRouter>

<CookieBanner />

</TooltipProvider>

  </QueryClientProvider>
);

export default App;
