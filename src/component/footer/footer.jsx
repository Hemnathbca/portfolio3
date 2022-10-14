import './footer.css';
import {FaMouse,FaTwitter,FaInstagram,FaLinkedin,FaGithub,FaFacebook,} from 'react-icons/fa';


function Footer(){
    return(
<div id='footer' className="container footer-container">
    <h1>That's all
        <a href="#home">
            <h2>
                <FaMouse />- scroll up-
        </h2>
        </a>
    </h1>

    <div className="social-links">
        <a href="https://www.instagram.com/">
            <FaInstagram className='social' />
        </a>

        <a href="https://www.facebook.com/">
            <FaFacebook className='social' />
        </a>

        <a href="https://www.linkedin.com/in/hemnath-arivazhagan-29a2551b8/">
            <FaLinkedin className='social' />
        </a>

        <a href="https://github.com/">
            <FaGithub className='social' />
        </a>

        <a href="https://twitter.com">
            <FaTwitter className='social' />
        </a>

    </div>
</div>
    );
};

export default Footer;