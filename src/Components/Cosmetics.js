import React, { useEffect, useState } from 'react';
import Cosmetic from './Cosmetic/Cosmetic';
// import { add, multiply } from '../Utilities/calculate';
// import add from '../Utilities/calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, [])

    /* const cosmetics = [
        {
          "id": "641edbc612e36ba10ce92db1",
          "price": 218,
          "name": "Sellers Copeland"
        },
        {
          "id": "641edbc6cb260a18b945471d",
          "price": 132,
          "name": "Josefa Burke"
        },
        {
          "id": "641edbc6bf2c1184edfaac3b",
          "price": 79,
          "name": "Nadine Holland"
        },
        {
          "id": "641edbc6007d4ab5dbe004e2",
          "price": 30,
          "name": "Monica Soto"
        },
        {
          "id": "641edbc6f6955047ee58b272",
          "price": 244,
          "name": "Park Osborne"
        },
        {
          "id": "641edbc68dab03490717f085",
          "price": 100,
          "name": "Hines Whitfield"
        },
        {
          "id": "641edbc6e246c3b8dbe4b9cc",
          "price": 82,
          "name": "Henson Mosley"
        }
      ] */


    /* const first = 55;
    const second = 66;
    const total = add(first , second);
    const total2 = multiply(first, second); 
    */
    return (
        <div>
          <h1>welcome to cosmetics store</h1>
          {
            cosmetics.map(cosmetic => <Cosmetic
            key={cosmetic.id}
            cosmetic={cosmetic}
            > </Cosmetic>)
          }
        </div>
    );
};

export default Cosmetics;
/* 
json generator
optional  mockAPI
*/