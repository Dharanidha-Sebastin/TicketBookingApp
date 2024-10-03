import React from "react";
import { useState } from "react";
import "../css/home_components_css/FormSearch.css";
var data = require("./place.json");

const FormSearch = () => {
  const [value, setValue] = useState("");
  const [values, setValues] = useState("");
  const onChange = (eve) => {
    setValue(eve.target.value);
  };
  const onChanges = (eve) => {
    setValues(eve.target.value);
  };
  const onSearch = (searchTerm) => {
    setValue(searchTerm);

    //our api to fetch the search result
    console.log("search", searchTerm);
  };
  const onSearchs = (searchTerms) => {
    setValues(searchTerms);
    console.log(searchTerms, "searchs");
  };

  return (
    <div className="form-section">
      <form className="form-component">
        <h4>Search And Book Tickets</h4>
        <hr />
        <p>
          <label>
            From:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input type="text" value={value} onChange={onChange} />
          {/* <button onClick={()=> onSearch(value)}>search</button> */}
          <div className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fromPlace = item.from_place.toLowerCase();
                return (
                  searchTerm &&
                  fromPlace.startsWith(searchTerm) &&
                  fromPlace !== searchTerm
                );
              })
              .slice(0, 5)
              .map((item) => (
                <div
                  onClick={() => onSearch(item.from_place)}
                  className="dropdown-row"
                  key={item.from_place}
                >
                  {item.from_place}
                </div>
              ))}
          </div>
        </p>

        <p>
          <label>
            To:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input type="text" value={values} onChange={onChanges} />
          <div className="dropdown">
            {data
              .filter((item) => {
                const searchTerms = values.toLowerCase();
                const fromPlace = item.from_place.toLowerCase();
                return (
                  searchTerms &&
                  fromPlace.startsWith(searchTerms) &&
                  fromPlace !== searchTerms
                );
              })
              .slice(0, 4)
              .map((item) => (
                <div
                  onClick={() => onSearchs(item.from_place)}
                  className="dropdown-row"
                  key={item.from_place}
                >
                  {item.from_place}
                </div>
              ))}
          </div>
        </p>

        <hr />
        <p>
          <label>Onward Journey Date:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="date" />

          <label className="label-time">Time:</label>
          <select name="time" id="time" >
            <option selected disabled>Any</option>
            <option value="BEFORE 12PM">BEFORE 12PM</option>
            <option value="12PM - 08PM">12PM - 08PM</option>
            <option value="08PM - 12AM">08PM - 12AM</option>
          </select>
        </p>

        <p>
          <label>
            Return Journey Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input type="date" />

          <label className="label-time">Time:</label>
          <select name="time" id="time" >
            <option selected disabled>Any</option>
            <option value="BEFORE 12PM">BEFORE 12PM</option>
            <option value="12PM - 08PM">12PM - 08PM</option>
            <option value="08PM - 12AM">08PM - 12AM</option>
          </select>
        </p>

        <hr />
        <p>
          <label>
            Adult:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input
            type="text"
            name="male"
            id="male"
            maxLength="2"
            size="1"
            placeholder="1"
          />
          <label for="male">
            Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>

          <input type="text" name="female" id="female" maxLength="2" size="1" />
          <label for="female">Female</label>
        </p>

        <p>
          <label>
            Children:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input
            type="text"
            name="male"
            id="male"
            maxLength="2"
            size="1"
            placeholder="1"
          />
          <label for="male">
            Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>

          <input type="text" name="female" id="female" maxLength="2" size="1" />
          <label for="female">Female</label>
        </p>

        <hr />
        <p>
          <label>Service Class:</label>
          <select>
            <option value="">ALL CLASSES</option>
            <option value="">AC SLEEPER</option>
            <option value="">AC SLEEPER SEATER</option>
            <option value="">AIR CONDITIONED</option>
            <option value="">CLASSIC</option>
            <option value="">DELUXE</option>
            <option value="">NON AC SLEEPER</option>
            <option value="">NON AC SLEEPER SEATER</option>
            <option value="">ORDINARY</option>
            <option value="">SEMI DELUXE</option>
            <option value="">ULTRA DELUXE</option>
            <option value="">SUPER DELUXE</option>
          </select>
        </p>
        <hr />
        <div className="btn">
          <button type="submit">SEARCH</button>
        </div>
      </form>
    </div>
  );
};

export default FormSearch;
