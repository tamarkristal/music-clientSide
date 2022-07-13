import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Routers from './Routers'
import {store} from './index'
function App() {
  return (   
    <div className="App">
   <Provider store={store} >
    <BrowserRouter >
    <Routers />
   </BrowserRouter>
   </Provider>
    </div>
  );
}

export default App;
