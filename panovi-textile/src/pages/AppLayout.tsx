import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";
import Footer from "../ui/Footer";

export default function AppLayout() {
  return (
    <>
      <PageNav />
      <Outlet />
      <Footer/>
    </>
  );
}
