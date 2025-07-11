import { useState } from "react"

function App() {

  const colors = localStorage.getItem("color");
  const initialColor = colors ? JSON.parse(colors) : { red: 0, green: 0, blue: 0 }

  const [red, setRed] = useState(initialColor.red);
  const [green, setGreen] = useState(initialColor.green);
  const [blue, setBlue] = useState(initialColor.blue);

  const saveCombo = () => {
    localStorage.setItem("color", JSON.stringify({ red, green, blue }))
  }

  const copyCombo = () => {
    navigator.clipboard.writeText(`rgb(${red}, ${green}, ${blue})`).then(() => {
      alert("Copied to clipboard!");
    })
    .catch((err) => {
      alert("Failed to copy:"+ err);
    });
  }

  return (
    <>
      <div className="main-div">
        <div className="color-div" style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></div>
        <div className="mixer-div">
          <h1 style={{ color: `rgb(${red}, ${green}, ${blue})`, fontWeight: "bold", WebkitTextStroke: "1px black" }}>Color Mixer</h1>

          <div className="range-wrapper">
            <label htmlFor="red" className="labels" >Red</label>
            <input type="range" min={0} max={255} name="" id="red" value={red} onChange={(event) => setRed(Number(event.target.value))} />
            <span>{red}</span>
          </div>

          <div className="range-wrapper">
            <label htmlFor="green" className="labels" >Green</label>
            <input type="range" min={0} max={255} name="" id="green" value={green} onChange={(event) => setGreen(Number(event.target.value))} />
            <span>{green}</span>
          </div>

          <div className="range-wrapper">
            <label htmlFor="blue" className="labels" >Blue</label>
            <input type="range" min={0} max={255} name="" id="blue" value={blue} onChange={(event) => setBlue(Number(event.target.value))} />
            <span>{blue}</span>
          </div>

          <div className="group-button" >
            <button onClick={saveCombo}>Save Color Combination</button>
            <button onClick={copyCombo}>Copy Color Combination</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
