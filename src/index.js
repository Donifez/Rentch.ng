import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"


function App() {
  return (
    <Router>
    <main>
    <header >
      <div className="header-overlay">
      <nav>
        <div className="logo">
           <h1>Rentch</h1>
        </div>
        <ul className="">
          <li><Link> List a Space</Link></li>
          <li><Link> Properties</Link></li>
          <li><Link> Blog</Link></li>
          <li><Link> Login</Link></li>
          <li className="login-btn"><Link> Sign up</Link></li>
      </ul>
      </nav>
        <section className="hero-section">
          <h2>Search and Find <span>Living Apartments</span></h2>
            <div className="filter-wrapper">
              <div className="select">
                <select >
                  <option>Space Type</option>
                </select>
              </div>
               <div className="select">
                <select >
                  <option>Location</option>
                </select>
              </div>
             <div className="select">
              <select >
                <option>Category</option>
              </select>
              </div>
              <button className="filter-search">
                Search
              </button>
              
            </div>
        </section>
        </div>
      </header>
        <section className="popular-locations">
          <h3> Popular Locations</h3>
          <hr />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
          <div className="four-row">
            <div className="row-card">
              <figure>
              <img src="/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" width="150" height="200"/>
              <figcaption>Kubwa</figcaption>
              </figure>
            </div>
            <div className="row-card">
            <figure>
              <img src="/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" width="150" height="200"/>
              <figcaption>Gwarimpa</figcaption>
              </figure>
            </div>
            <div className="row-card">
            <figure>
              <img src="/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" width="150" height="200"/>
              <figcaption>Kubwa</figcaption>
              </figure>
            </div>
            <div className="row-card">
            <figure>
              <img src="/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" width="150" height="200" />
              <button className="caret">	&#x203a;</button>
              <figcaption>Kubwa</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="featured-listing">
          <h3> Featured Exclusives</h3>
          <hr />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
          <div className="three-row">
            <div className="row-card">
              <div>
            <figure>
              <img src="/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" width="250" height="200" />
            
              <figcaption>#50,000</figcaption>
              </figure>
              </div>

              <div className="below-details">
              <p>2 bedroom</p>
                <p>2 bathroom</p>
              </div>
            </div>
            <div className="row-card">
              <div>
            <figure>
              <img src="/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" width="250" height="200" />
            
              <figcaption>#10,000</figcaption>
              </figure>
              </div>

              <div className="below-details">
                <p>2 bedroom</p>
                <p>2 bathroom</p>
              </div>
            </div>

            <div className="row-card">
              <div>
            <figure>
              <img src="/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" width="250" height="200" />
            
              <figcaption>#10,000</figcaption>
              </figure>
              </div>

              <div className="below-details">
                <p>2 bedroom</p>
                <p>2 bathroom</p>
              </div>
            </div>
            
          </div>
        </section>
        <section className="featured-people">
          <h3> Featured People</h3>
          <hr />
         
          <div className="three-row">
            <div className="people-card">
              <div className="rounded"> <img src="/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" width="100" height="100" /></div>
           
            <div> <p className="info"><strong>James John</strong>is interested in sharing his space at Kuje, Abuja. He also will not mind sharing in Gwarimpa</p></div>
            <div  className="button"><p>View Profile</p></div>
            </div>
            <div className="people-card">
            <div  className="rounded"> <img src="/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" width="100" height="100" /></div>
            <div> <p className="info"><strong>James John</strong>is interested in sharing his space at Kuje, Abuja. He also will not mind sharing in Gwarimpa</p></div>
            <div  className="button"><p>View Profile</p></div>
            </div>
            <div className="people-card">
            <div  className="rounded"> <img src="/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" width="100" height="100" /></div>
           <div><p className="info"><strong>James John</strong>is interested in sharing his space at Kuje, Abuja. He also will not mind sharing in Gwarimpa</p></div> 

           <div className="button"><p>View Profile</p></div>
            </div>
            </div>
        </section>
        <section className="how-it--works">
          <h3> How it Works</h3>
          <hr />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
          <div className="works-row">
            <div className="work-card">
              <div className="work-icon">
              </div>
              <h4> Search for a Space</h4>
             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="work-card">
                <div className="work-icon">
                </div>
                <h4> Book a Tour</h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="work-card"> 
              <div className="work-icon">
              </div>
              <h4> Move in</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
          </div>
        </section>
        <section className="testimonials">
            <h3> Testimonial</h3>
            <hr />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
            <div className="testimonial-row">
              <div className="testimonial-card">
                <p>"</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                <hr />
                <div className="testi-image">
                </div>
                <h4> Tony Stark</h4>
              </div>
              <div className="testimonial-card">
                <p>"</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                <hr />
                <div className="testi-image">
                </div>
                <h4> Tony Stark</h4>
              </div>
              <div className="testimonial-card">
                <p>"</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                <hr />
                <div className="testi-image">
                </div>
                <h4> Tony Stark</h4>
              </div>
          </div>
        </section>
        <section className="blog">
        </section>
        <section className="earn">
        </section>
        <footer >
        </footer>
    </main>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
