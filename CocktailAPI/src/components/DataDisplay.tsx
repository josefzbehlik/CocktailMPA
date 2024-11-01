import React, { FC, useState, useEffect } from "react";
import { Cocktail } from "../types";

// The DataDisplay component will display the data from the API
const DataDisplay: FC = () => {
    const [cocktail, setCocktail] = useState<Cocktail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
            .then((response) => response.json())
            .then((data) => {
                setCocktail(data);
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
                    <img src={cocktail.icon_url} alt={cocktail.value} />
                    <p>{cocktail.value}</p>
                </>
            )}
        </>
    );
}

export default DataDisplay;