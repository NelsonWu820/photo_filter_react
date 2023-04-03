const Pictures = ({ tags }) => {
  const cell = tags.map((obj) => <img src={obj} alt="with the tags" className="pictures"></img>)
  
  return (
    <section>
        <div className="pictures-section">{cell}</div>
    </section>
  )
}

export default Pictures