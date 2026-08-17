const SkillCard = ({ skill }) => {
  return (
    <article>
        <div>
          <h3>{skill.name}</h3>
          <p>Nivel: {skill.level}</p>
        </div>

        {skill.isFavorite && <p>⭐</p>}
    </article>
  )
}

export default SkillCard