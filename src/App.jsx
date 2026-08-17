import ProfileHeader from './components/ProfileHeader'

import { skills } from './data/skills.js'
import SkillList from './components/SkillList'

import Footer from './components/Footer'
import Button from './components/Button'

function App() {
  const name = 'José Capdevila'
  const presentation = 'Desarrollador web en proceso, con experiencia en front-end y back-end.'

  return (
    <div className="min-h-screen bg-app-bg px-4 py-8">
      <main className="mx-auto max-w-3xl">
        <ProfileHeader name={name} presentation={presentation} />
        <SkillList skills={skills} />
        <div className="mt-6 flex justify-center">
          <Button />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default App

