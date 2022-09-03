import './App.css';
//import{BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Counter from './components/counter/Counter';
import Calculator from './components/Calculator/Calculator';
import { Provider } from 'react-redux';
import {store} from './store';


function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        
        <Counter/>
      </Provider>
      
    </div>
  );
}

export default App;
