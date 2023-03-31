import { useState } from "react"
import PictureTags from "./picture-tags.json"
import Header from "./components/Header";
import Input from "./components/Input";
import Pictures from "./components/Pictures";

function App() {
  const [tagsHolder, setTagsHolder] = useState([PictureTags.possibleTags])
  var callRender = ({tagsArray}) => {
    setTagsHolder([...tagsArray]);
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
