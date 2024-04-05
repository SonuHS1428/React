//click event:An interaction when a user clicks on a specific element,we can respond to clicks
//            by passing a callback to the onClick handler

import Button from "./Button.js";
import Button2 from "./btnWithCondition.js"
import Button3 from "./eventParameter.js"
import ProfilePic from "./profilePic.js";
function App() {
  return (
    <div>
      <Button/>
      <Button2/>
      <Button3/>
      <ProfilePic/>
    </div>
  );
}

export default App;
