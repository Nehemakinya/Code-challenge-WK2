import { useState, useEffect } from 'react';

const Favourites = ({ favouriteItem }) => {
  const [items, setItems] = useState([]);

  const removeItem = (id) => {
    const deleteItem = favouriteItem.filter((item) => item.id !== id);
    setItems((prev) => [...prev, ...deleteItem]);
  };

  return (
    <div className="row">
      <div className="col -10 mx-auto border p-4">Favourites</div>
      {/* <div className="col -10 mx-auto border p-4">ALL BOTS</div> */}
      <div className="row">
        <div className="col -10 mx-auto border p-4">
          {favouriteItem.map((item) => {
            return (
              <div onClick={() => removeItem(item.id)} key={item.id} className="card-row">
                <img src={`${item.avatar_url}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Name: {item.name}</h5>
                  <p className="card-text">health: {item.health}</p>
                  <p className="card-text">damage: {item.damage}</p>
                  <p className="card-text">armor: {item.armor}</p>
                  <p className="card-text">catchphrase: {item.catchphrase}</p>
                  <p className="card-text">bot_class: {item.bot_class}</p>

                  <button className="btn btn-primary">Remove from Favourites</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-10 mx-auto border p-4">
        <div className="row">
          {items.map((item) => {
            return (
              <div key={item.id} className="card-row">
                <img src={`${item.avatar_url}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Name: {item.name}</h5>
                  <p className="card-text">health: {item.health}</p>
                  <p className="card-text">damage: {item.damage}</p>
                  <p className="card-text">armor: {item.armor}</p>
                  <p className="card-text">catchphrase: {item.catchphrase}</p>
                  <p className="card-text">bot_class: {item.bot_class}</p>

                  <button className="btn btn-primary">Go somewhere</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
