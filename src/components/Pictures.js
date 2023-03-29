const Pictures = ({ tags }) => {
  const cell = tags.map((obj) => <div>{obj}</div>)

  return (
    <section className="pictures">
        <div>
            {cell}
        </div>
    </section>
  )
}

export default Pictures