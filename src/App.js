import React from "react"
import Card from "./components/Card"
import { data } from "./data"
import NavBar from "./components/NavBar"
import './App.css';

export default function App() {
  const cards = data.map(travel => {
    return ( 
    <Card 
    key={travel.title}
    travel={travel}
    />
    )
})
return (
    <>
    <NavBar />
    <div className="card">
    {cards}
    </div>
    </>
)
}

