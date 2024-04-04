import { useEffect, useState } from "react";
import SearchCountry from "./SearchCountry";
import { Link, useNavigate, useMatch } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

  return (
    <div className="h-full dark:bg-[#202c37]">
      <SearchCountry searchCountry={searchCountry} inputValue={inputValue} />
      <div className=" flex justify-center items-center flex-wrap">
        {filteredCountries.map((country, index) => {
          return (
            <div
              key={index}
              className="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 drop-shadow-2xl"
              onClick={getDetails.bind(null, country.name.common)}
            >
              <Link>
                <img
                  className="rounded-t-lg w-[30vw] h-[30vh]"
                  src={country.flags.png}
                  alt=""
                />
              </Link>
              <div className="p-5">
                <Link>
                  <h5 className="mb-2 text-[1.5vw] font-bold tracking-tight text-gray-900 dark:text-white">
                    {country.name.common}
                  </h5>
                </Link>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold text-[1vw] text-zinc-300">
                    Population:{" "}
                  </span>
                  {country.population}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold text-[1vw] text-zinc-300">
                    Region:{" "}
                  </span>
                  {country.region}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-semibold text-[1vw] text-zinc-300">
                    Capital:{" "}
                  </span>
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
