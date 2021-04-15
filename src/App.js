import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import IpInfo from "./components/IpInfo/IpInfo";
import Loader from "./components/Loader/Loader";
import Map from "./components/Map/Map";
import * as api from './utils/api';


function App() {

  const [ipInfo, setIpInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    function initialIp() {
      api.getInitialIp()
        .then((data) => {
          setIpInfo(data);
          setError(false);
        })
        .catch((err) => {
          console.log('Error:', err);
          setError(true);
        })
        .finally(() => setLoading(false))
    }
    initialIp();
  }, [setIpInfo])


  function searchIp(ip) {
    setLoading(true);
    api.getIp(ip)
      .then((data) => {
        setIpInfo(data);
        setError(false);
      })
      .catch((err) => {
        console.log('Error:', err);
        setError(true);
      })
      .finally(() => setLoading(false))
  }


  return (
    <>
      <Header
        searchIp={searchIp}
        ipInfo={ipInfo}
      />
      {ipInfo &&
        <main>
          <IpInfo
            ipInfo={ipInfo}
            error={error}
          />
          <Map
            ipInfo={ipInfo}
            loading={loading}
            error={error}
          />
        </main>
      }
      <Footer />
    </>
  );
}

export default App;
