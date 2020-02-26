import React from 'react';
import icon from '../img/map.svg';

const App = () => (
  <section className="second-stage">
    <div className="container ">
      {/* <div className="status">status</div> */}
      <div className="items">
        <div className="item">
          <div className="three-blocks flex">
            <div className="left-block">
              <img alt="item" src={icon} />
            </div>
            <div className="center-block">
              <div className="two-columns flex fw">
                <div className="left-column">
                  <div className="title">
                    <h2>Plymouth Meeting, Pennsylvania Testing Laboratory</h2>
                  </div>
                  <div className="info flex">
                    <p className="miles">60 miles</p>
                    <a className="details-link" href="/#"><p className="details">View Details</p></a>
                  </div>
                </div>
                <div className="right-column flex jcsa">
                  <form className="flex fd-column">
                    <h4 className="form-title">Turn Around Time:</h4>
                    <div className="three-options flex jcsb">
                      <input type="radio" id="choice1" name="option" value="1day" />

                      <label className="label flex" type="text" htmlFor="choice1">
                        <div className="data flex fd-column">
                          <h3 className="time">1 Day</h3>
                          <p className="price"><strong>$ 1200.00</strong></p>
                        </div>
                      </label>

                      <input type="radio" id="choice2" name="option" value="2days" />

                      <label className="label flex" type="text" htmlFor="choice2">
                        <div className="data flex fd-column">
                          <h3 className="time">2 Days</h3>
                          <p className="price"><strong>$ 900.00</strong></p>
                        </div>
                      </label>

                      <input type="radio" id="choice3" name="option" value="1week" />

                      <label className="label flex" type="text" htmlFor="choice3">
                        <div className="data flex fd-column">
                          <h3 className="time">1 Week</h3>
                          <p className="price"><strong>$ 150.00</strong></p>
                        </div>
                      </label>
                    </div>
                  </form>

                </div>
              </div>
            </div>
            <div className="right-block flex aic">
              <button type="button" className="btn-more more"> </button>
              <button type="button" className="btn-view-more"><p>View more</p></button>
            </div>
          </div>


        </div>

      </div>
    </div>
  </section>
);

export default App;
