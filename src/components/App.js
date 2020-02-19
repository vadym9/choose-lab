import React from 'react';
import icon from '../img/map.svg';

const App = () => (
  <section className="second-stage">
    <div className="container ">
      {/* <div className="status">status</div> */}
      <div className="items debug-red">
        <div className="item">
          <div className="two-blocks flex debug-purple">
            <div className="left-block debug-red">
              <img alt="item" src={icon} />
            </div>
            <div className="center-block debug-green">
              <div className="two-columns flex fw debug-blue">
                <div className="left-column debug-green">
                  <div className="title">
                    <h2>Plymouth Meeting, Pennsylvania Testing Laboratory</h2>
                  </div>
                  <div className="info flex">
                    <p>60 miles</p>
                    <a className="details-link" href="/#"><p className="details">View Details</p></a>
                  </div>
                </div>
                <div className="right-column flex jcsa debug-red">
                  <form>
                    <p className="form-title">Turn Around Time:</p>
                    <div className="three-options flex jcsb">
                      <label className="label flex" type="text" htmlFor="choice1">
                        <input type="radio" id="choice1" name="option" value="1day" />
                        <div className="data flex fd-column">
                          <h3 className="time">1 Day</h3>
                          <p className="price"><strong>$ 1200.00</strong></p>
                        </div>
                      </label>
                      <label className="label flex" type="text" htmlFor="choice2">

                        <input type="radio" id="choice2" name="option" value="2days" />
                        <div className="data flex fd-column">
                          <h3 className="time">2 Days</h3>
                          <p className="price"><strong>$ 900.00</strong></p>
                        </div>
                      </label>
                      <label className="label flex" type="text" htmlFor="choice3">

                        <input type="radio" id="choice3" name="option" value="1week" />
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
            <div className="right-block debug-green">
              <button type="button" className="btn-more more"> </button>
            </div>
          </div>


        </div>
        <div className="item">
          3
        </div>
        <div className="item">
          3
        </div>
      </div>
    </div>
  </section>
);

export default App;
