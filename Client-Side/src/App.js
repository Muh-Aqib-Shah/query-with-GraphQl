import logo from './logo.svg';
import './App.css';
import { typeDefs } from './components/GraphQlSchema';
import { useQuery } from '@apollo/client';

function App() {

  let {data,loading,error} = useQuery(typeDefs);

  console.log("GQL:",typeDefs);

  if(loading)
   return <div>Loading...</div>
  else if(error){
   return <div>An Error Occured</div>
   console.log("ERROR IS:",error);
  }
  return (
    <div className="App">
      <center>
        <form>
          <label htmlFor='string'>
            <input type='string' />
          </label>
          <input type='submit' value="Submit" className='submit-btn' />
        </form>
        <div className='qury-data'></div>
        <button className="data-getter">Press me to get Data</button>
        <div className="data-div"></div>
        
      </center>
    </div>
  );
}

export default App;
