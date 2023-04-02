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
      for (let j = 0; j <= length; j++) {
        //runs through every tag in array of that img set
        for (let k = 0; k < str; k++) {
          //if every user tag is inside the tags array
          if(tagsArrayHolder[j] == PictureTags[str][i].tags[k]){
            console.log(tagsArrayHolder[j] + " " + PictureTags[str][i].tags[k])
            counter ++;
          }
          console.log("end k")
        }
        //if the user tags has all been matched
        if(counter == length){
          console.log(counter + "counter" + length)
          setImgHolder([...imgHolder, PictureTags[str][i].link])
          counter = 0
        }
      }
    }
  }
  const callRender = ({tagsArray}) => {
    //checks if tags equals a picture
    let tagsArrayHolder = tagsArray
    let length = tagsArray.length
    if(length < 5){
      switch (length) {
        case 1:
          compareTags("1", length, tagsArrayHolder);
        case 2:
          compareTags("2", length, tagsArrayHolder);
        case 3:
          compareTags("3", length, tagsArrayHolder);
        case 4:
          compareTags("4", length, tagsArrayHolder);
        case 5:
          compareTags("5", length, tagsArrayHolder);
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
