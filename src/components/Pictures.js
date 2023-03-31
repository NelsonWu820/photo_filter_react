const Pictures = ({ tags }) => {
  const cell = tags.map((obj) => <img href={obj}/>)

  return (
    <section className="pictures-section">
        <div className="pictures">{cell}</div>
    </section>
  )
}

export default Pictures