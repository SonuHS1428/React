
import Greet from './Greet'
import Welcome from './Welcome'

function WelcomeMessage() { 
  return <p>Welcome!</p> 
} 

function App() {
  const message = 'Hello!' ;
  return (
    <div className="App">
      <WelcomeMessage />
      <Greet/>
      <Welcome/>
      {message}
      {message === 'Helloo!' ? 'The message was "Hello!"' : message}
    </div>
  );
}

export default App;