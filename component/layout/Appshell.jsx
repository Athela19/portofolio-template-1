import Navbar from "./navbar";
import Footer from "./footer";
export default function Appshell({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
