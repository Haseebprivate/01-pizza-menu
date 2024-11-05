import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Menu Data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//App Component

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//Header Component
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

//Menu Component
function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Pizza Menu</h2>

      {pizzas && (
        <>
          <p>italian ciusine, 6 creative dishes to choose from.</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizza={pizza} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

//Footer Component
function Footer() {
  /*
    return React.createElement(
      "footer",
      { style: { color: "red" }, className: "footer" },
      "We're Currently Open"
    );
    */

  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  //   if (hour >= openHours && hour <= closeHours) alert("We're Currently Open");
  //   else alert("We're Currently Closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} />
      ) : (
        <p>We're Currently Closed. Please come back later.</p>
      )}
    </footer>
  );
}

//Order Component
function Order({ closeHours }) {
  return (
    <div className="order">
      <p>We're Open until {closeHours}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

//Pizza Component
function Pizza({ pizza }) {
  //   if (pizza.soldOut) return null;

  return (
    <li className={`pizza ${pizza.soldOut && "sold-out"}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

// rendering app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
