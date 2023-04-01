import { useState } from "react"
import PictureTags from "./picture-tags.json"
import Header from "./components/Header";
import Input from "./components/Input";
import Pictures from "./components/Pictures";

function App() {
  const [imgHolder, setImgHolder] = useState([])
  const compareTags = (str, length, tagsArrayHolder) => {
    let counter = 0;
    //every tags img set gets 1 pass but every img set only has 4 imgs
    for(let i = 0; i < PictureTags.str.length; i++) {
      //every tag inside the user array
      for (let j = 0; j < length; j++) {
        //runs through every tag in array of that img set
        for (let k = 0; k < str; k++) {
          //if every user tag is inside the tags array
          if(tagsArrayHolder[j] === PictureTags.str[i].tags[k]){
            counter ++
          }
        }
        //if the user tags has all been matched
        if(counter == length){
          setImgHolder([...imgHolder, PictureTags.str[i].link])
        }
      }
    }
  }
  const callRender = ({tagsArray}) => {
    //checks if tags equals a picture
    let tagsArrayHolder = tagsArray
    let length = tagsArray.length
    if(length < 5){
      for(var i = 1; i <= length; i++){
        switch (i) {
          case 1:
            compareTags("string3", length, tagsArrayHolder);
          case 2:
            compareTags("b", length, tagsArrayHolder);
          case 3:
            compareTags("c", length, tagsArrayHolder);
          case 4:
            compareTags("d", length, tagsArrayHolder);
          case 5:
            compareTags("f", length, tagsArrayHolder);
          break;
        }
      }
    }
    else{
      //but print out not pics with tags: in the area of pics
      setImgHolder();
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
