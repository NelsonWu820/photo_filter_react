import { useState } from "react"
import PictureTags from "./picture-tags.json"
import Header from "./components/Header";
import Input from "./components/Input";
import Pictures from "./components/Pictures";

function App() {
  const [imgHolder, setImgHolder] = useState([])
  const compareTags = (str, length, tagsArrayHolder) => {
    let counter = 0;
    //every tags img set gets 1 pass but every img set
    for(let i = 0; i < PictureTags[str].length; i++) {
      //every tag inside the user array
      for (let j = 0; j < length; j++) {
        //runs through every tag in array of that img set
        for (let k = 0; k < str; k++) {
          //if every user tag is inside the tags array
          if(tagsArrayHolder[j].toUpperCase() === PictureTags[str][i].tags[k].toUpperCase()){
            counter ++;
          }
        }
        //if the user tags has all been matched
        if(counter === length){
          setImgHolder(imgHolder => [...imgHolder, PictureTags[str][i].link])
          counter = 0
        }
      }
    }
  }
  const callRender = ({tagsArray}) => {
    //checks if tags equals a picture
    let tagsArrayHolder = tagsArray
    let length = tagsArray.length
    //resets the submit form and the imgHolder
    setImgHolder([])
    if(length < 10){
      switch (length) {
        case 1:
          compareTags("2", length, tagsArrayHolder);
        case 2:
          compareTags("4", length, tagsArrayHolder);
        case 3:
          compareTags("6", length, tagsArrayHolder);
        case 4:
          compareTags("8", length, tagsArrayHolder);
        case 5:
          compareTags("10", length, tagsArrayHolder);
        break;
        default:
          break;
      }
    }
    else{
      setImgHolder(["No pictures with the tags: " + tagsArrayHolder]);
    }
  } 
  return (
    <div className="App">
      <Header/>
      <Input render={callRender}/>
      <Pictures tags={imgHolder}/>
    </div>
  );
}

export default App;
