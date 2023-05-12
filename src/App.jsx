import { useState, useEffect } from 'react';
import Container from './comps/Container';

function App() {
  
  const [data, setData] = useState([]);

  const fetchJson = () => {
    fetch('./db.json')
    .then(resp => {
      return resp.json();
    }).then(jsondata => {
      setData(jsondata.plants);
    }).catch((err) => console.log(err.message));
  }
  useEffect(() => {
    fetchJson();
  },[])

  return (
    <>
      <h1 className='text-2xl text-cyan-700 mt-4 text-center'>Képciklus</h1>

      <Container cards={data} />
      
    </>
  )
}

export default App
