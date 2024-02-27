import { ReactNode } from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main
        style={{ marginTop: "15vh", textAlign: "center", fontSize: "2rem" }}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
