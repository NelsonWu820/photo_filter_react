const Pictures = ({ tags }) => {
  const cell = tags.map((obj) => <div>{obj}</div>)

  return (
    <section className="pictures-section">
        <div className="pictures">{cell}</div>
    </section>
  )
}

export default Pictures