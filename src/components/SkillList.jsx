import SkillCard from './SkillCard'

const SkillList = ({ skills }) => {
  return (
    <section>
      <div>
        <h2>Habilidades</h2>
        <span>
          {skills.length} skills
        </span>
      </div>

      <div>
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  )
}

export default SkillList