import Header from './component/header/header';
 import Navbar from './component/nav/nav';
 import Home from './component/home/home';
 import About from './component/about/about';
 import Members from './component/members/members';
 import Contact from './component/contact/contacts';
 import Footer from './component/footer/footer'; 

function WebContent() {
  return(
    <>
    <div className='bg-circle1'></div>
    <div className='bg-circle2'></div>
    <Header/> 
<Navbar/>
<Home/>
<About/>
<Members/>
<Contact/>
<Footer/>
    </>
  );
};

export default WebContent;
