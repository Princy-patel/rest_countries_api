import PropTypes from "prop-types";
import { DetailsContext } from "./DetailsProvider";
import { useContext, useState } from "react";

function SearchCountry({ searchCountry, inputValue, getCountries }) {
  const [region, setRegion] = useState("");
  const { countries } = useContext(DetailsContext);

  let regions = countries.map((region) => {
    return region.region;
  });

  let removeDuplicate = [...new Set(regions)];

  const handleRegion = function (e) {
    setRegion(e.target.value);
    let filteredCountry = countries.filter(
      (name) => name.region === e.target.value
    );
    getCountries(e.target.value === "all" ? countries : filteredCountry);
  };

  return (
    <form className="max-w-md ml-[10vw] pt-5 flex justify-between w-full">
      <div>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for a country..."
            required
            onChange={searchCountry}
            value={inputValue}
          />
        </div>
      </div>

      <div>
        <select
          onChange={handleRegion}
          value={region}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="all">Filtered by Region</option>
          {removeDuplicate.map((region, index) => {
            return <option key={index}>{region}</option>;
          })}
        </select>
      </div>
    </form>
  );
}

SearchCountry.propTypes = {
  searchCountry: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  getCountries: PropTypes.func,
};
export default SearchCountry;
