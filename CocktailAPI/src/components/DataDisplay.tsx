import React, { FC, useState, useEffect } from "react";
import { Cocktail } from "../types";

// The DataDisplay component will display the data from the API
const DataDisplay: FC = () => {
    const [cocktail, setCocktail] = useState<Cocktail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState<string>("");


    useEffect(() => {

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <>
        {loading && <p>Loading...</p>}
        {error && <p>CHYBA: {error}</p>}
        {cocktail && (
            <>
                <h2>{cocktail.value}</h2>
                <img src={cocktail.icon_url} alt={cocktail.value} />
          </>
        )}
      </>
    );
};

export default DataDisplay;