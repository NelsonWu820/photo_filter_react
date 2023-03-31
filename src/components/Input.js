import { useState } from "react"

const Input = ({ render }) => {
  const [tags, setTags] = useState("");
  //should return an array of each word with no spaces
  var tagsArray = tags.replace(/\s/g,'').split(",")

  const renderPhotos = () => {
    for(var i = 0; i < tagsArray.length; i++){
      //check if tags are valid with case insensitive
      if(tagsArray[i] === "dogs" || tagsArray[i] === "cats") {
        render({tagsArray})
        return
      }
    }
    //return no photos with the tags "entire thing back"
    alert("No photos with the tags: " + tags)
    return
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(!tags){
      alert("Please add a Tag")
      return
    }

    renderPhotos();
  }

  return (
    <section className="form-section">
        <form className="form" onSubmit={onSubmit}>
            <input className="search-form" type="text" placeholder="Input a Possible Tag Like Dog, Cat, Flowers, etc" 
            value={tags} onChange={(e) => setTags(e.target.value)}/>
            <input className="btn" type="submit" value="Search"/>
        </form>
    </section>
  )
}

export default Input