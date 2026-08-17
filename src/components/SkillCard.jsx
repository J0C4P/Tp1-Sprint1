const SkillCard = ({ skill }) => {
  return (
    <article className="group rounded-xl border border-card-border bg-card-bg p-4 transition-colors duration-200 hover:bg-card-bg-hover">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-card-text">{skill.name}</h3>
          <p className="mt-1 text-sm text-slate-500">Nivel: {skill.level}</p>
        </div>

        {skill.isFavorite && (
          <span className="text-xl" aria-label="Skill favorita">
            ⭐
          </span>
        )}
      </div>
    </article>
  )
}

export default SkillCard