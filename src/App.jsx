import ProfileHeader from './components/ProfileHeader'

import { skills } from './data/skills.js'
import SkillList from './components/SkillList'

import Footer from './components/Footer'
import Button from './components/Button'

function App() {
  const name = 'José Capdevila'
  const presentation = 'Desarrollador web en proceso, con experiencia en front-end y back-end.'

  return (
    <div>
      <main>
        <ProfileHeader name={name} presentation={presentation} />
        <SkillList skills={skills} />
        <Button />
        <Footer />
      </main>
    </div>
  )
}

export default App

