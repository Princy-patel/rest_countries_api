import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Details() {
  const details = useParams().countries;
  const navigate = useNavigate();
  const [countryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${details}?fullText=true`
      );
      const getCountries = await response.json();
      setCountryDetails(getCountries);
    };
    fetchData();
  }, [details]);

  const allCountries = function () {
    navigate("/");
  };

  return (
    <div className="dark:bg-[#202c37] h-screen w-full flex flex-col justify-start items-start p-[5vw]">
      <button
        className="text-white m-5 bg-[#2b3945] py-3 px-5 rounded-lg"
        onClick={allCountries}
      >
        Back
      </button>
      <div className="flex justify-between items-center gap-7">
        {countryDetails.map((country, index) => {
          return (
            <Fragment key={index}>
              <div className="flex-1">
                <img
                  className="rounded-t-lg w-[50vw] h-[50vh]"
                  src={country.flags.png}
                  alt=""
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-center flex-wrap items-center gap-12 max-md:gap-0">
                  <div>
                    <h5 className="mb-2 text-[1.5vw] font-bold tracking-tight text-gray-900 dark:text-white">
                      {country.name.common}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-[1vw]">
                      <span className="font-semibold text-[1vw] text-zinc-300">
                        Native Name:
                      </span>
                      <span key={index}>
                        {
                          country.name.nativeName[
                            Object.keys(country.name.nativeName)[0]
                          ].official
                        }
                      </span>
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-[1vw]">
                      <span className="font-semibold text-[1vw] text-zinc-300">
                        Population:
                      </span>
                      {country.population}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-[1vw]">
                      <span className="font-semibold text-[1vw] text-zinc-300">
                        Region:
                      </span>
                      {country.region}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-[1vw]">
                      <span className="font-semibold text-[1vw] text-zinc-300">
                        Sub Region:
                      </span>
                      {country.subregion}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-[1vw]">
                      <span className="font-semibold text-[1vw] text-zinc-300">
                        Capital:
                      </span>
                      {country.capital}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-[1vw]">
                      <span className="font-semibold text-[1vw] text-zinc-300">
                        Top Level Domain:
                      </span>
                      {country.tld}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-[1vw]">
                      <span className="font-semibold text-[1vw] text-zinc-300">
                        Currency:
                      </span>
                      {Object.keys(country.currencies).map((key, index) => (
                        <span key={index}>{country.currencies[key].name}</span>
                      ))}
                    </p>

                    <p className="font-normal text-gray-700 dark:text-gray-400 text-[1vw]">
                      <span className="font-semibold text-[1vw] text-zinc-300">
                        Language:
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

                <div className="m-[5vw]">
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-[1vw]">
                    {country.borders ? (
                      <>
                        <span className="font-semibold text-[1vw] text-zinc-300">
                          Border Countries:
                        </span>
                        {country.borders?.map((neighbors, index) => (
                          <span
                            key={index}
                            className="px-2 py-2.5 bg-[#2b3945] m-2"
                          >
                            {neighbors}
                          </span>
                        ))}
                      </>
                    ) : (
                      <span className="font-semibold text-[1vw] text-zinc-300 text-[1vw]">
                        This country does not have any border countries.
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Details;
