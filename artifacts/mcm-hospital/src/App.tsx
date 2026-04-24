import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Layout from "@/components/layout/Layout";
import Home from "@/pages/home";
import About from "@/pages/about";
import Departments from "@/pages/departments";
import Doctors from "@/pages/doctors";
import DoctorDetail from "@/pages/doctor-detail";
import News from "@/pages/news";
import NewsDetail from "@/pages/news-detail";
import Gallery from "@/pages/gallery";
import Contact from "@/pages/contact";
import Appointment from "@/pages/appointment";
import FAQ from "@/pages/faq";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/departments" component={Departments} />
        <Route path="/doctors" component={Doctors} />
        <Route path="/doctors/:slug" component={DoctorDetail} />
        <Route path="/news" component={News} />
        <Route path="/news/:slug" component={NewsDetail} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/faq" component={FAQ} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
