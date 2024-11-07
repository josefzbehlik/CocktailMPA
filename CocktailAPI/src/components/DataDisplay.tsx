import React, { FC, useState, useEffect } from "react";
import { Cocktail } from "../types";

interface DataDisplayProps {
  loading: boolean;
  error: string | null;
  data: any;
}

const DataDisplay: FC<DataDisplayProps> = ({ loading, error, data }) => {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>CHYBA: {error}</p>}
      {data && data.drinks && (
        <>
          {data.drinks.map((drink: any) => (
            <div key={drink.idDrink}>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              <p>{drink.strDrink}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default DataDisplay;