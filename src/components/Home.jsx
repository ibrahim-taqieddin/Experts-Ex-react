import React from "react";
import "./usd.css";
import { exChange, searchEx } from "./ex";
import Item from "./item";

export default function Home() {
  const [rates, setRates] = React.useState(null);
  const [ratesBase, setRatesBase] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(null);

  const onSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    let componentIsMounted = true;

    const getExData = () => {
      exChange()
        .then((data) => {
          console.log("ex data:", data);
          if (componentIsMounted) {
            setRates(data.rates);
            setRatesBase(data.base);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getExData();

    const fetchInterval = setInterval(getExData, 1000 * 60);

    return () => {
      clearInterval(fetchInterval);
      componentIsMounted = false;
    };
  }, []);

  React.useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setSearchResults(searchEx(rates, searchTerm));
    } else {
      setSearchResults(rates);
    }
  }, [searchTerm, rates]);

  return (
    <>
      <div className="colorW">
        <h1 className="color">Compare Currencies to $USD</h1>
        <input
          className="inp"
          value={searchTerm}
          onChange={onSearch}
          placeholder="Search..."
        />
        <div className="all-boxs row justify-content-evenly m-4">
          {searchResults
            ? Object.keys(searchResults).map((key) => (
                <Item
                  key={key}
                  ExSsymbol={key}
                  ExRrate={searchResults[key]}
                  ratesBase={ratesBase}
                />
              ))
            : []}
        </div>
      </div>
    </>
  );
}
