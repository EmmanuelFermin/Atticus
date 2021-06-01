import React from 'react';

import './IngredientList.css';

const IngredientList = props => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map(ig => (
          <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
            <span style={{ marginTop: "10px" }}>{ig.title}</span>
            <div>
              <span style={{ marginTop: "10px" }}>{ig.amount}x</span>
              <button style={{
                padding: "0",
                width: "30px",
                height: "30px",
                color: "red",
                backgroundColor: "white",
                borderStyle: "none",
                marginLeft: "30px"
              }}
                className="button-delete"
                title="delete">
                <span role="img" aria-label="delete">🗑️</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
