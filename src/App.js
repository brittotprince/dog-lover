// import logo from './logo.svg';
import './App.css';
import { getData } from './App.svc';
import { useEffect, useState } from "react"


function App() {
  const [api, setApi] = useState()
  console.log("api", api)
  useEffect(() => {
    const callData = () => {
      getData().then((data) => {
        console.log("data from main", data)
        setApi(data.message)
      }).catch(() => {
        console.error("Error fetching")
        setApi(null)
      })
    }
    callData()
  }, [])

  return (
    api === null ? <div className="App">
      <h3>Well, we are trying to get the dog to pose. Please come back after some time...</h3>
    </div> :
      <div className="App">
        <h3>For the dog lover in you</h3>
        <div id="iframeDiv">
        <iframe
          style={{ width: "90vw", height: "80vh",border:"none","box-shadow":"0 0  10px rgba(0,0,0,0.1)" }}
          title="dogPicture" src={api}
          allowFullScreen
        />
        </div>
        <div>Dediacted to Boni and Alisha, who spam their insta with Dog posts 😋</div>
      </div>
  );
}

export default App;
