import { useState } from "react"
import PictureTags from "./picture-tags.json"
import Header from "./components/Header";
import Input from "./components/Input";
import Pictures from "./components/Pictures";

function App() {
  const [tagsHolder, setTagsHolder] = useState([PictureTags.possibleTags])
  var boolHolder = true
  var callRender = ({tagsArray}) => {
    //checks if tags equals a picture
    for(var i = 0; i < tagsArray.length; i++){
      while(boolHolder){
        if(tagsArray[i] === PictureTags.dogs){}
      }
    }
    setTagsHolder();
  } 
  return (
    <div className="App">
      <Header/>
      <Input render={callRender}/>
      <Pictures tags={tagsHolder}/>
    </div>
  );
}

export default App;
