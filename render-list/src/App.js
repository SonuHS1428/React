import List from './List'
import List2 from './reusableList'

function App() {
  const vegetables=[{id:6,name:"carrot",calories:95},
                   {id:7,name:"radish",calories:45},
                   {id:8,name:"cucumber",calories:86},
                   {id:9,name:"beetroot",calories:75},
                   {id:10,name:"chilli",calories:92}];
  
  return (
    <div>
      <List/>
      {vegetables.length > 0 ? <List2 items={vegetables} category="Vegetables"/>:null} 
      {/*this line can also written as
       vegetables.length > 0 && <List2 items={vegetables} category="Vegetables"/>*/}
    </div>
  );
}

export default App;
