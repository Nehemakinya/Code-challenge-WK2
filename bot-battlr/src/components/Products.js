import React, { useState, useEffect } from "react";

const Products = ({ setFavouriteItem, favouriteItem }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/bots")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addItemToFavourites = (bot) => {
    favouriteItem.find((item) => item.id === bot.id) ? alert('existing') : setFavouriteItem(prev => [...prev, bot]);
  };

  return (
    <div className="col -10 mx-auto border p-4">
      ALL BOTS
      <div className="row">
        {products.map((item) => {
          return (
            <div key={item.id} className="card row" style={{ width: "18rem" }}>
              <img src={`${item.avatar_url}`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Name: {item.name}</h5>
                <p className="card-text">health: {item.health}</p>
                <p className="card-text">damage: {item.damage}</p>
                <p className="card-text">armor: {item.armor}</p>
                <p className="card-text">catchphrase: {item.catchphrase}</p>
                <p className="card-text">bot_class: {item.bot_class}</p>

                <button className="btn btn-primary" onClick={() => addItemToFavourites(item)}>
                  Add to Favourites
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
