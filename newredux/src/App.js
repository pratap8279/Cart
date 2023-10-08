import './App.css';

import  {useSelector}  from 'react-redux';
import Account from './components/Account';
import Bonus from './components/Bonus';
import Reward from './components/Reward';
import Admin from './components/Admin'

function App() {
  const  amount1= useSelector(state=>state.account.amount);
  const points=useSelector(state=>state.Bonus.points)
  


  return (
    <div className="App">
      <h4>App</h4>
    <h3>Current Amount {amount1}</h3> 
     <h3> Bonus {points}</h3>

     <Account  ></Account>
      <Bonus   ></Bonus>
      <Reward></Reward>
      <Admin></Admin>
    </div>
  );
}

export default App;
