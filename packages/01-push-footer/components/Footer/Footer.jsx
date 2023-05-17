import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'

import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.main}>
          <div>
            <div className={classes.footerTitle}>
              Categories
            </div>
            <ul>
              <li>
                <a href="#">
                  Wall Clocks
                </a>
              </li>
              <li>
                <a href="#">
                  Alarm Clocks
                </a>
              </li>
              <li>
                <a href="#">
                  Wrist Clocks
                </a>
              </li>
              <li>
                <a href="#">
                  Grandfather Clocks
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className={classes.footerTitle}>
              Help
            </div>
            <ul>
              <li>
                <a href="#">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#">
                  Returns
                </a>
              </li>
              <li>
                <a href="#">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className={classes.footerTitle}>
              GET IN TOUCH
            </div>
            <div className={classes.socials}>
              <FaFacebook />
              <FaInstagram />
              <FaPinterest />
            </div>
          </div>
          <div>
            <div className={classes.footerTitle}>
              Newsletter
            </div>
            <form>
              <div>
                <input type="text" name="email" className={classes.emailInput}
                       placeholder="email@example.com"/>
                  <div></div>
              </div>
              <div>
                <button>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
