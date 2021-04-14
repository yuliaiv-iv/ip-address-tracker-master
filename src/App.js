import Header from "./components/Header/Header";
import IpInfo from "./components/IpInfo/IpInfo";
import Map from "./components/Map/Map";


function App() {

  // function getIpAddress() {
  //   fetch('https://geo.ipify.org/api/v1?apiKey=at_rHuyiBj5EZCctq3a8RjpBuOrJs60m&ipAddress=8.8.8.8')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error('Error:', error))
  // }

  return (
    <>
      <Header />
      <IpInfo />
      <Map />
    </>
  );
}

export default App;
