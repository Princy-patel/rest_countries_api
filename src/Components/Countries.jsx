import { useContext, useEffect, useState } from "react";
import SearchCountry from "./SearchCountry";
import { Link, useNavigate } from "react-router-dom";
import { DetailsContext } from "./DetailsProvider";

function Countries() {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const { countries, setCountries } = useContext(DetailsContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const getCountries = await response.json();
      setCountries(getCountries);
      setFilteredCountries(getCountries);
    };

    fetchData();
  }, []);

  const searchCountry = function (e) {
    setInputValue(e.target.value);
    const updateCountries = countries.filter((all) =>
      all.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCountries(updateCountries);
  };

  const getDetails = function (name) {
    navigate(`country/${name}`);
  };

  const getCountries = function (regions) {
    setFilteredCountries(regions);
  };

  return (
    <div className="h-full dark:bg-[#202c37]">
      <SearchCountry
        searchCountry={searchCountry}
        inputValue={inputValue}
        getCountries={getCountries}
      />
      <div className="flex flex-wrap justify-center items-center gap-5 p-5">
        {filteredCountries.map((country, index) => {
          return (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-5 shadow dark:bg-gray-700 dark:border-gray-700 drop-shadow-2xl bg-white border border-gray-200 rounded-lg h-full"
              onClick={getDetails.bind(null, country.name.common)}
            >
              <Link>
                <img
                  className="rounded-lg w-full h-[30vh]"
                  src={country.flags.png}
                  alt=""
                />
              </Link>
              <div className="p-3">
                <Link>
                  <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {country.name.common}
                  </h5>
                </Link>
                <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Population:</span>{" "}
                  {country.population}
                </p>
                <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Region:</span>{" "}
                  {country.region}
                </p>
                <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capital}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
