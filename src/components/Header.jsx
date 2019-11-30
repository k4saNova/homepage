import React, { useState } from 'react';
import {pageTypes, pageProps, imageList} from './variables.js';
import testMd from './md/international-conference.md';

const renderTitle = (p) => {
    switch (p){
    case "profile":
    case "research":
    case "links":
        return (
            <h1 className="title"> {pageProps.title[p]} </h1>            
        );
    default: // home
        const image = imageList[Math.floor(Math.random() * imageList.length)];
        return (
          <div className="columns is-vcentered">
            <div className="column is-5">
              <figure className="image is-square">
                <img src={`${process.env.PUBLIC_URL}/top-image/${image}`} />
              </figure>
            </div>
            <div className="column is-6 is-offset-1">
              <h1 className="title is-3">Kohei Asano</h1>
              <h2 className="subtitle is-4">
                Graduate School of Information Sciences<br />Tohoku University<br />
                Chun Laboratry: Doctor student
              </h2>
	      <p>
		<a href="#" target="_blank">About me (CV)</a>
	      </p>
            </div>
          </div>            
        );
    }
};

const Header = (props) => {
    const [burger, setBurger] = useState(false);
    return (
	<section className="hero is-dark">
          <div className="hero-head">
            <nav className="navbar is-dark">
              <div className="container">
	        <div className="navbar-brand">
                  <span className={burger ? "navbar-burger burger is-active" : "navbar-burger burger"}
                        onClick={() => setBurger(!burger)}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
	        </div>
	        <div className={burger ? "navbar-menu is-active" : "navbar-menu"}>
                  <div className="navbar-end">
	            <div className="tabs is-right">
	              <ul>
                        {pageTypes.map(
                            (p) => <li key={p+".li"}
                                       className={props.page===p ? "is-active" : ""}>
                                     <a onClick={() => props.changePage(p)}>
                                       <span className="icon">
			                 <i className={pageProps.icon[p]}></i>
                                       </span>
                                       {pageProps.title[p]}
                                     </a>
                                   </li>
                        )}
	              </ul>
	            </div>
	          </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              {renderTitle(props.page)}
            </div>
          </div>
	</section>
    );
};

export default Header;
