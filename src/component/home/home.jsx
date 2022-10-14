import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import {BsMouse} from 'react-icons/bs';

const Home = () => {

   

  return (
<div id='home' className='container home-container'>
    <div className='Logo'>
        <div className="main-img">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
        </div>

        <img src={img} />
    </div>
    <a href="#footer" className="scroll-down">
        <hr/>
        <h5>scroll down</h5>
        <BsMouse className='scroll'/>
        <hr/>
    </a>

    <h2><span>About me</span> <br />
    <p>hpuhuhuhagiuhjghhjufb vjhuhjghghjhhgjhihjhjhjhuhgjjhjhvjhjhjjjjhjhjhvj
        hhjjjj
    </p>
    </h2>
    <Buttons/>
   </div>
 );
}

const toggle = document.querySelector('.main-img');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
});



export default Home;