/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import "./App.css";

// Country API ENDPOINT
const endpoint =
  "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

function App() {
  // State variable: All countries
  const [countries, setCountries] = useState([]);
  // State variable: Filtered countries
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [timer, setTimer] = useState(null);
  const [searchText, setSearchText] = useState("");

  // useEffect: runs on initial render
  useEffect(() => {
    // Function to fetch countries
    const fetchCountries = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error("Error fetching countries: ", error);
      }
    };
    fetchCountries();
  }, []);

  // useEffect: runs whenever the searchText or countries change
  useEffect(() => {
    // Debounce logic
    if (timer) {
      clearTimeout(timer);
    }
    const timerObj = setTimeout(() => {
      // console.log("Filtering");
      const filtered = countries?.filter((country) => {
        return country.common.toLowerCase().includes(searchText.toLowerCase());
      });
      setFilteredCountries(filtered);
    }, 100);

    setTimer(timerObj);
  }, [countries, searchText]);

  return (
    <div>
      {/* Navbar */}
      <nav className="header">
        {/* Searchbar */}
        <input
          type="text"
          name="search"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for countries..."
          className="search-input"
        />
      </nav>
      <div className="country-container">
        {filteredCountries?.map((country) => {
          return (
            <CountryCard
              key={country.common}
              name={country.common}
              img={country.png}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
