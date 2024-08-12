import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [Keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, settracks] = useState([]);

  const getTracks = async () => {
    setIsLoading(true);
    let data = await fetch(`https://v1.nocodeapi.com/stardus_098/spotify/HdGuCpBKTZMErxIw/search?q=${Keyword===""?"trending":Keyword}&type=track`)
    
    
    let convertedData = await data.json();
    settracks(convertedData.tracks.items);
    setIsLoading(false);
  }
  
  
  

  useEffect(()=>{
    getTracks();
  }, [])


  return (
   <>
   <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">

    

  <div className="container-fluid">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
      </ul>


      <input 
        value={Keyword}
        onChange={(event)=>{setKeyword(event.target.value)}}
        className="form-control me-2"
        type="search"
        placeholder="Search" 
        aria-label="Search"/>

        <button onClick={getTracks} className="btn btn-outline-success" >
          Search
        </button>

  </div>
</nav>

      <button onClick={getTracks} className="btn btn-outline-success" >
                Get song list
              </button>


     
<div className="container">

  <div className={`row ${isLoading ? "" : "d-none"}`}>
    <div className='col-12 py-6 text-center'>
    <div
    className="spinner-border"
    style={{ width: "3rem", height: "3rem" }}
    role="status"
  >
    <span className="visually-hidden">Loading...</span>
  </div>
  <div
    className="spinner-grow"
    style={{ width: "3rem", height: "3rem" }}
    role="status"
  >
    <span className="visually-hidden">Loading...</span>
  </div>
    </div>
  </div>


          


  <div className="row">
    <div className='col-lg-3 col-md-6'>





      

      {tracks.map((element)=>{


        return (

          
          
          <div key={element.id}
           className=" py-2 px-2 "
          //  style={{ width: "18rem" }}
           >

          <img src={element.album.images[1].url} className="card-img-top" alt="..." />
          
          <div className="card-body">
            <h5 className="card-title">{element.name}</h5>
            <p className="card-text">
            {element.artists[0].name}
            </p>
            <audio src={element.preview_url} controls className='w-100'></audio>
            <p>release date:{element.album.release_date}</p>
          </div>

          </div>
        )


          })}



    </div>
  </div>




</div>
      
        
        
   </>
  );
}
export default App;
        
        
    





