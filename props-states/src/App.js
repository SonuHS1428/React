
import Student from "./Student";
function App() {
  return (
    <>
     <Student name="Bob" age={24} isStudent={true}>Student no.1(children props)</Student>
     <Student name="Dora" age={21} isStudent={true}>Student no.2(children props)</Student>
     <Student name="Peter" age={28} isStudent={false}/>
     <Student/>
    </>
  );
}

export default App;
