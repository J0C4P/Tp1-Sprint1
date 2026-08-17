import SkillCard from './SkillCard'

const SkillList = ({ skills }) => {
  return (
    <section className="rounded-2xl border border-card-border bg-card-bg p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-card-text">Habilidades</h2>
        <span className="rounded-full border border-label-border bg-label-bg px-3 py-1 text-sm font-medium text-label-text">
          {skills.length} skills
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  )
}

export default SkillList