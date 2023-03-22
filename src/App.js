
import './App.css';

function App() {
  return (
    <div className="App">
     <District name="Noakhali" Speciality="Self Oriented People"></District>
     <District name="Rajshahi" Speciality="Clean City"></District>
     <District name="LakxmiPur" Speciality="Amra Asi"></District>
     
    </div>
  );
}
const districtStyle = {
  backgroundColor: 'rebeccapurple',
  margin: '1rem',
  padding: '1rem',
  borderRadius: '0.4rem',
  color: 'whiteSmoke'
}

function District(props){
  return (
    <div style={districtStyle}>
      <h2>{props.name}</h2>
      <p>{props.Speciality}</p>
    </div>
  )
}
export default App;
