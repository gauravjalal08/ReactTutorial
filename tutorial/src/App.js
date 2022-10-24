import './App.css';
import { ClickHandler } from './ClickHandler';
import { Header } from './Header';
import Header1 from './Header1';
import { Message } from './Message';
import { UseEffect } from './UseEffect';
import UseState from './UseState';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Header name ='Gaurav'  heroName='Batman'/>
      <button> Say Hello</button>
      <Header name ='Singh' heroName='Superman'/>
      <Header name ='Jalal' heroName='Spiderman'/>
      <p>This is childer prop</p>
      <Message/>
      <ClickHandler/>
      <Header1/>
      <UseState/>
      <UseEffect/>
     
     
      
    </div>
  );
}

export default App;
