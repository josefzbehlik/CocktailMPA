import React, { FC, useState, useEffect } from "react";
import { Cocktail } from "../types/Index";
import styles from "./DataDisplay.module.css";

interface DataDisplayProps {
    search: string;
  }

// The DataDisplay component will display the data from the API
const DataDisplay: FC<DataDisplayProps> = ({search}) => {
    const [cocktail, setCocktail] = useState<Cocktail | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (search === "") return;

        setLoading(true);
        setError(null);
    
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.drinks) {
                    setCocktail(data.drinks[0]);
                  } else {
                    setCocktail(null);
                  }
                  setLoading(false);
                })
                .catch((error) => {
                  setError(error.message);
                  setLoading(false);
                });
            }, [search]);
            return (
                <>
                  {loading && <p className={styles.text}>Loading...</p>}
                  {error && <p className={styles.text}>CHYBA: {error}</p>}
                  {cocktail && (
                    <div className={styles.cocktailContainer}>
                      <div className={styles.column}>
                        <h2 className={styles.body}>{cocktail.strDrink}</h2>
                        <img className={styles.image} src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                      </div>
                      <div className={styles.column}>
                        <p className={styles.text}>{cocktail.strInstructions}</p>
                      </div>
                    </div>
                  )}
                </>
              );
            };

export default DataDisplay;