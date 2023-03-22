
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Posts></Posts>
     <District name="Noakhali" Speciality="Self Oriented People"></District>
     <District name="Rajshahi" Speciality="Clean City"></District>
     <District name="LakxmiPur" Speciality="Amra Asi"></District>
     
    </div>
  );
}
function Posts (){
  
  const [posts, setPosts] = useState([]);

  useEffect( ()=> {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(URL).then(resp => resp.json()).then(data => setPosts(data))
   
  }, [])
  
  return (
    <div>
      <h1>{posts.length}</h1>
      {
        posts.map(post => 
        <Post 
          title={post.title} 
          body={post.body}
          key={post.id}
        ></Post>)
      }
    </div>
  )
}
function Post (props) {
  
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.body}</p>
    </div>
  )
}
const districtStyle = {
  backgroundColor: 'rebeccapurple',
  margin: '1rem',
  padding: '1rem',
  borderRadius: '0.4rem',
  color: 'whiteSmoke',
  // display: 'grid',
// gridTemplateColumns: 'repeat(3, 1fr)'
}

function District(props){
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  const reducePower = () => {
    const newPower = power /2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>{props.name}</h2>
      <p>{props.Speciality}</p>
      <h1>Power: {power} </h1>
      <button onClick={boostPower}>Boost The Power</button>
      <button onClick={reducePower}>Reduce The Power</button>
    </div>
  )
}


export default App;
