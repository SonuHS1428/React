import './App.css';
import UserGreeting from './UserGreeting';

function App() {
  return (
    <div>
      <UserGreeting isloggedIn={false} username="Meera"/>
    </div>
  );
}

export default App;
