import React from 'react';
import map from '../../img/map.svg';

const Table = () => (
  <div className="second-stage-table">
    <div className="container">
      <div>
        <h1>d</h1>
      </div>
      <table className="items">

        <tbody>
          <tr className="item flex debug-purple">
            <td className="first-column debug-green">
              <tr>
                <td>
                  <img alt="map" src={map} />
                </td>
              </tr>

            </td>
            <td className="second-column debug-purple">
              <tr>
                <td className="name debug-green">
                  <h2>Plymouth Meeting, Pennsylvania Testing Laboratory</h2>
                </td>
              </tr>
              <tr className=" ">
                <td className="details flex debug-red">
                  <p>60 miles</p>
                  <a href="/#"><p className="link-view-details">View details</p></a>
                </td>

              </tr>
            </td>
            <td className="thirld-column flex fd-column debug-red">
              <tr>
                <td className="options-title debug-purple">
                  <h4>Turn around time:</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <form>
                    <tr className="options flex jcsb">
                      <td className="option">
                        <label htmlFor="option1">
                          <tr className="flex">
                            <td>
                              <input type="radio" id="option1" name="option" value="1day" />
                            </td>
                            <td className="option-text">
                              <tr>
                                <h3>1 Day</h3>
                              </tr>
                              <tr>
                                <p><strong>$ 1200.00</strong></p>
                              </tr>
                            </td>


                          </tr>
                        </label>
                      </td>

                      <td className="option">
                        <label htmlFor="option2">
                          <tr className="flex">
                            <td>
                              <input type="radio" id="option2" name="option" value="2days" />

                            </td>
                            <td className="option-text">
                              <tr>
                                <h3>2 Days</h3>
                              </tr>
                              <tr>
                                <p><strong>$ 900.50</strong></p>
                              </tr>
                            </td>
                          </tr>
                        </label>
                      </td>

                      <td className="option">
                        <label htmlFor="option3">

                          <tr className="flex">
                            <td>
                              <input type="radio" id="option3" name="option" value="1week" />
                            </td>
                            <td className="option-text">
                              <tr>
                                <h3>1 Week</h3>
                              </tr>
                              <tr>
                                <p><strong>$ 150.00</strong></p>
                              </tr>
                            </td>
                          </tr>
                        </label>
                      </td>
                    </tr>

                  </form>
                </td>
              </tr>
            </td>
            <td className="fourth-column debug-blue">
              <button type="button" className="btn-more more"> </button>
            </td>
          </tr>
          <tr>
            <td>first row first col</td>
            <td>1 2</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
);

export default Table;
