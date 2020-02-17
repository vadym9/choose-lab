import React from 'react';
import icon from '../img/map.svg';

const App = () => (
  <section className="second-stage">
    <div className="container ">
      <div className="status">status</div>
      <div className="items debug-red">
        <div className="item">
          <div className="two-blocks">
            <div className="block">
              <img alt="item" src={icon} />
            </div>
            <div className="block">
              <div className="two-columns">
                <div className="column">
                  <div className="title">
                    <h2>Title</h2>
                  </div>
                  <div className="info">
                    32
                  </div>
                </div>
                <div className="column">
                  <div className="three-options">
                    <form>
                      <p>d</p>
                      <div>

                        <label type="text" htmlFor="choice1">
                          1 Day
                          <input type="radio" id="choice1" name="option" value="1day" />
                        </label>
                        <label type="text" htmlFor="choice2">
                          2 Days
                          <input type="radio" id="choice2" name="option" value="2days" />
                        </label>
                        <label type="text" htmlFor="choice3">
                          1 Week
                          <input type="radio" id="choice3" name="option" value="1week" />
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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
