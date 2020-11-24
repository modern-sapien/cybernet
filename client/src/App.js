import {useEffect} from "react"
import axios from "axios"
import './App.css';

function App() {

  useEffect(() => {
    console.log("make an API call")
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h2>Hello World</h2>
    </div>
  );
}

export default App;