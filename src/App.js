
import './query.css';
import Query from './components/Search/Query';
import ToastData from './Data.json';


function App() {
  return (
    <div className="App">
      <Query 
      placeholder="Lets search for a brewery..." 
      data={ToastData}/>
     
    </div>
  );
}

export default App;
