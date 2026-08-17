const ProfileHeader = ({ name, presentation }) => {
  return (
    <header>
      <div>
        Perfil
        <h1 >{name}</h1>
        <p>{presentation}</p>
      </div>
    </header>
  )
}

export default ProfileHeader