import React from "react";
import { Navbar } from '../../common';

function Header (){
    return(
        <section className="header">
            <section className="header-top">
              <section className="header-top_logo">
                <a href="/" className="header-logo">LOGO</a> 
              </section>
              <section className="header-top_navbar">
                <Navbar />
              </section>
            </section>
            <section className="header-bottom">
              <section className="header-bottom_phone">
                000000122121
              </section>
              <section className="header-bottom_email">
                lex.info@gmail.com
              </section>   
            </section>
        </section>
    )
}

export default Header;