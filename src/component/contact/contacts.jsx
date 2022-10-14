import './contacts.css';
import { FaInstagram,FaWhatsapp,FaFacebook} from 'react-icons/fa';


const Contact = () => {
    return(
        <div id='contact' className="container contact-container">
            <h1>Contact me</h1>
            <div className="contact-links">
                <a href="#" className="contact instagram">
                    <FaInstagram className='icon' />
                    <h2>Instagram<span>hemnath_fed</span></h2>
                </a>

                <a href="#" className="contact whatsapp">
                    <FaWhatsapp className='icon' />
                    <h2>Whatsapp<span>+91 6382735981</span></h2>
                </a>

                <a href="#" className="contact facebook">
                    <FaFacebook className='icon' />
                    <h2>Facebook<span>hemnath A</span></h2>
                </a>

            </div>
        </div>
    );
};

export default Contact;