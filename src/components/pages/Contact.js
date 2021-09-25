import React from 'react';

const Contact = () => {
    return (
        <div className="contact" id="contact-light-text">
           <p>Address: <i>Karshi Abuja, NG</i></p> 
           <p>Email: <i><a href='mailto:contact@mahdiabubakar.me' target="_blank" rel="noreferrer" >contact@mahdiabubakar.me</a></i></p>
           <div className="social-media">
                <ul>
                    <li>Other Links: </li>
                    <li>
                        <a href='https://twitter.com/nigeriancoder' target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://instagram.com/nigeriancoder' target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/mahdiabubakar" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mahdiabubakar" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
           </div>
        </div>
    )

}

export default Contact;
