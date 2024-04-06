import React from 'react';
import logo from '../../src/assets/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <Link to="/" className="items-center grid-flow-col">
                    <img src={logo} alt="" className='h-1/2 md:h-3/5' />
                    <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
                </Link>

                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link to="/"><FaFacebookSquare className="facebook-icon-container text-white " /></Link>
                        <Link to="/"><FaSquareXTwitter className="twitter-icon-container text-white " /></Link>
                        <Link to="/"><FaYoutube className="youtube-icon-container text-white " /></Link>

                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <Link to="/">
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </Link>
            </footer>
        </div>
    );
};

export default Footer;