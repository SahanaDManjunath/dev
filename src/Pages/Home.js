import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Nav from '../components/Navbar/Nav'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'
import Store from '../components/Store/Store'
import Products from '../components/Products/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
// import Announcement from "./components/Announcement/Announcement";
// import Categories from "./components/Categories/Categories";
// import Footer from "./components/Footer";
// import Nav from "./components/Navbar/Nav";
// import Newsletter from "./components/Newsletter";
// import ProductLists from "./components/ProductLists/ProductLists";
// import Products from "./components/Products/Products";
// import Slider from "./components/Slider/Slider";
// import Store from "./components/Store/Store";

const Home = () => {
  return (
    <div>
<Announcement/>
  <Nav/>
  <Slider/>
  {/* <Categories/> */}
  <Store/>
  <Products/>
  <Newsletter/>
   <Footer/>
    </div>
  )
}

export default Home