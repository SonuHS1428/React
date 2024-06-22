import LoginForm from "./user_login_system";
//import './user_login.css'
import SearchFun from "./search_functionality"
import UpdaterFunction from "./updaterFunction"
import MyComponent from "./updateArray";
import UpdateArrObj from "./updateArrOfObj";
import UseEffect from "./useEffect";
import ResizeWindow from "./useEffectExecercise";
import DigitalClock from "./digitalClock";
import UseRef from "./useRef";
import StopWatch from "./Stopwatch";
import ControlledComponent from "./controlledComp";
import Uncontrolled from "./uncontrolledComp";
import Fetch from "./fetch";
import Mycomp from "./fetch2";
import ImageGallery from "./imageGallery";
import React,{useState,useEffect} from "react";
import ImageSearch from "./imageSearch";


function App() {
    
    const [images,setImages]=useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [term,setTerm] = useState('');

    useEffect(() => {
      fetch(`https://pixabay.com/api/?key=44455598-fb89e54a07bc40d74e8a942cd&q=${term}&image_type=photo&pretty=true`)
        .then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then(data => {
          setImages(data.hits);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false); // Set loading to false even if there's an error
        });
    }, [term]);
  return (
    <div>
      {/*<LoginForm/>*/}
      {/*<SearchFun/>*/}
      {/*<UpdaterFunction/>*/}
      {/*<MyComponent/>*/}
      {/*<UpdateArrObj/>*/}
      {/*<UseEffect/>*/}
      {/*<ResizeWindow/>*/}
      {/*<DigitalClock/>*/}
      {/*<UseRef/>*/}
      {/*<StopWatch/>*/}
      {/*<ControlledComponent/>*/}
      {/*<Uncontrolled/>*/}
      {/*<Fetch/>*/}
      {/*<Mycomp/>*/}
      <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">No images found</h1>
        )}

        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map(image => (
              <ImageGallery key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
