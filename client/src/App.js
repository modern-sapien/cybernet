import {useEffect} from "react"
import axios from "axios"
import './App.css';
import MainGallery from "./containers/Main/Main"

function App() {

  // useEffect(() => {
  //   console.log("make an API call")
  //   axios
  //     .get("/api/config")
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <div className="App">
      <MainGallery />
    </div>
  );
}

export default App;