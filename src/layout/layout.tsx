import { useEffect } from "react";
import Navbar from "./navbar";
import Header from "./header";
import About from "../components/about";
import Cars from "../components/cars";
import Footer from "./footer";
import Cart from "./cart";

function Layout({ cartCount }: any) {
  useEffect(() => {
    // window.onscroll = function (ev) {
    //   if (window.scrollY < 798) {
    //     document.getElementById("navbar")!.style.backgroundColor = "transparent";
    //     document.getElementById("navbar")!.style.boxShadow = "none";
    //     document.getElementById("0")!.style.color = "#85848e";
    //     document.getElementById("1")!.style.color = "#85848e";
    //     document.getElementById("2")!.style.color = "#85848e";
    //     document.getElementById("icon0")!.style.color = "rgb(255 145 56)";
    //     document.getElementById("icon1")!.style.color = "rgb(255 145 56)";
    //     document.getElementById("icon2")!.style.color = "rgb(255 145 56)";
    //     document.getElementById("nav-bar-bottom")!.style.display = "none";
    //   }
    //   else {
    //     document.getElementById("navbar")!.style.backgroundColor = "rgb(107 107 107)";
    //     document.getElementById("navbar")!.style.boxShadow = "0 4px 20px #95959526";
    //     document.getElementById("0")!.style.color = "rgb(255 145 56)";
    //     document.getElementById("1")!.style.color = "rgb(255 145 56)";
    //     document.getElementById("2")!.style.color = "rgb(255 145 56)";
    //     document.getElementById("icon0")!.style.color = "rgb(222 220 236)";
    //     document.getElementById("icon1")!.style.color = "rgb(222 220 236)";
    //     document.getElementById("icon2")!.style.color = "rgb(222 220 236)";
    //     document.getElementById("nav-bar-bottom")!.style.display = "block";
    //   }
    // };
  }, [])

  return (
    <div className="layout-con">
      <Navbar cartCount={cartCount} />
      <div style={{ position: 'relative', height: '100vh' }}>
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