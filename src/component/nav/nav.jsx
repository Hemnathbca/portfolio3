import './nav.css';
import {FaHome} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {FaRegObjectGroup} from 'react-icons/fa'
import {FaArrowAltCircleDown,FaBars} from 'react-icons/fa'
import { MdConnectWithoutContact } from "react-icons/md";

function Navbar(){
    return(
        <div className='navigation'>
            <a href='#home'>
            <FaHome className='icon action-nav'/>
            </a>
            <a href='#about'>
            <FaUser className='icon'/>
            </a>
            <a href='#members'>
            <FaRegObjectGroup className='icon'/>
            </a>
            <a href='#contact'>
            <MdConnectWithoutContact className='icon'/>
            </a>
            <a href='#footer'>
            <FaArrowAltCircleDown className='icon'/>
            </a>
        </div>
    );
}

let Icons = document.querySelectorAll('.navigation.icon');
Icons.forEach(icon=>{
    icon.addEventListener('click', () =>{
        changeactive();
        icon.classList.add('active-nav');
    });
});

function changeactive(){
    Icons.forEach((icon)=> {
        icon.classList.remove('active-nav');
    });
}

export default Navbar;