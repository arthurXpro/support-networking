
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetails from "./pages/ServiceDetails";
import ServicePage from "./pages/ServicePage";
import AssociationsPage from "./pages/AssociationsPage";
import AssociationDetails from "./pages/AssociationDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import BeneficiaryDashboard from "./pages/BeneficiaryDashboard";
import AssociationDashboard from "./pages/AssociationDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Admin from "./pages/Admin";
import Settings from "./pages/Settings";
import News from "./pages/News";
import ArticlesPage from "./pages/ArticlesPage";
import JobsPage from "./pages/JobsPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Donate from "./pages/Donate";
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
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/service/:id" element={<ServicePage />} />
          <Route path="/associations" element={<AssociationsPage />} />
          <Route path="/associations/:id" element={<AssociationDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Beneficiary Dashboard Routes */}
          <Route path="/profile/dashboard" element={<BeneficiaryDashboard />} />
          <Route path="/profile/my-services" element={<BeneficiaryDashboard />} />
          <Route path="/profile/requests" element={<BeneficiaryDashboard />} />
          <Route path="/profile/success-stories" element={<BeneficiaryDashboard />} />
          <Route path="/profile/settings" element={<BeneficiaryDashboard />} />
          
          {/* Association Dashboard Routes */}
          <Route path="/association-dashboard" element={<AssociationDashboard />} />
          <Route path="/association-dashboard/services" element={<AssociationDashboard />} />
          <Route path="/association-dashboard/requests" element={<AssociationDashboard />} />
          <Route path="/association-dashboard/events" element={<AssociationDashboard />} />
          <Route path="/association-dashboard/jobs" element={<AssociationDashboard />} />
          <Route path="/association-dashboard/settings" element={<AssociationDashboard />} />
          
          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminDashboard />} />
          <Route path="/admin/associations" element={<AdminDashboard />} />
          <Route path="/admin/services" element={<AdminDashboard />} />
          <Route path="/admin/registration-requests" element={<AdminDashboard />} />
          <Route path="/admin/articles" element={<AdminDashboard />} />
          <Route path="/admin/success-stories" element={<AdminDashboard />} />
          <Route path="/admin/settings" element={<AdminDashboard />} />
          
          <Route path="/settings" element={<Settings />} />
          <Route path="/news" element={<News />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<Donate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
