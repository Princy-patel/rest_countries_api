import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
  const details = useParams().countries;
  const [countryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${details}`
      );
      const getCountries = await response.json();
      setCountryDetails(getCountries);
    };

    console.log(countryDetails);

    fetchData();
  }, [details]);

  return (
    <div className="bg-red-200">
      {countryDetails.map((country, index) => {
        return (
          <Fragment key={index}>
            <div>
              <Link>
                <img
                  className="rounded-t-lg w-[30vw] h-[30vh]"
                  src={country.flags.png}
                  alt=""
                />
              </Link>
            </div>
            <div>
              <h5 className="mb-2 text-[1.5vw] font-bold tracking-tight text-gray-900 dark:text-white">
                {country.name.common}
              </h5>

              <div>
                <div>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-semibold text-[1vw] text-zinc-300">
                      Native Name:{" "}
                    </span>
                    {/* {Object.keys(country.name.nativeName).map((key, index) => (
                      <span key={index}>{country.name.nativeName[0][key].name}</span>
                    ))} */}
                  </p>
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
                      Sub Region:{" "}
                    </span>
                    {country.subregion}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-semibold text-[1vw] text-zinc-300">
                      Capital:{" "}
                    </span>
                    {country.capital}
                  </p>
                </div>

                <div>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-semibold text-[1vw] text-zinc-300">
                      Top Level Domain:{" "}
                    </span>
                    {country.tld}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-semibold text-[1vw] text-zinc-300">
                      Currency:{" "}
                    </span>
                    {Object.keys(country.currencies).map((key, index) => (
                      <span key={index}>{country.currencies[key].name}</span>
                    ))}
                  </p>

                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-semibold text-[1vw] text-zinc-300">
                      Language:{" "}
                    </span>
                    {Object.keys(country.languages).map((key, index) => (
                      <span key={index}>
                        {index > 0 && ", "}
                        {country.languages[key]}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Details;
