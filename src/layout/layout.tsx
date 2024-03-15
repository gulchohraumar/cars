import { useEffect } from "react";
import Navbar from "./navbar";
import Header from "./header";
import About from "../components/about";
import Cars from "../components/cars";
import Footer from "./footer";
import Cart from "./cart";

function Layout({ cartCount }: any) {
  return (
    <div className="layout-con">
      <Navbar cartCount={cartCount} />
      <div className="h-screen" style={{ position: 'relative',  }}>
        <Header />
      </div>
      <div style={{ padding: '0 70px' }}>
        <About />
        <Cars />
      </div>
      <div className="pt-5 mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;