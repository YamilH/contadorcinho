import React, { useState } from "react";

import { useEffect } from "react";
import Swal from "sweetalert2";

const mostrarAlerta5=() => {
  Swal.fire({
    title: 'Bien ahí!',
    text: '"Ya contaste 5 cosas!"',
    imageUrl: 'https://www.purplecloudsolutions.co.uk/wp-content/uploads/2017/07/5-things-your-website-should-do.jpg',
    imageWidth: 400,
    imageHeight: 220,
    imageAlt: 'Custom image',
})};
const mostrarAlerta10=() => {
  Swal.fire({
    title: 'Dale campeón!',
    text: '"Ya contaste 10 cosas!"',
    imageUrl: 'https://www.planetanewells.com/wp-content/uploads/2020/11/messi-1.jpg',
    imageWidth: 400,
    imageHeight: 220,
    imageAlt: 'Custom image',
})};



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
  if (count === 5) { return mostrarAlerta5()}});

  useEffect(() => {
    if (count === 10) { return mostrarAlerta10()}});



  return (
    <div className="cont ay-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Contador de Cosas</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}>+</button>
            <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
            <button className="btn btn-secondary mx-3" onClick={() => setCount(0)} disabled={count === 0}>reset</button>

          </div>
        </div>
      </div>
      <div class="card-footer text-muted text-center"> <a class="card-footer text-muted text-center" href="https://github.com/YamilH">YamilH on GitHub</a></div>
    </div>

);
}
export default App;
