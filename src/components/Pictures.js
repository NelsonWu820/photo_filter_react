const Pictures = ({ tags }) => {
  const cell = tags.map((img, index) => <img src={String(img)} alt="with the tags" className="pictures" key={index}></img>)
  
  return (
    <section>
        <div className="pictures-section">{cell}</div>
    </section>
  )
}

export default Pictures