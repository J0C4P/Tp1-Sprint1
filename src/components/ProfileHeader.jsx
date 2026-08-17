const ProfileHeader = ({ name, presentation }) => {
  return (
    <header className="mb-8 rounded-2xl border border-header-border bg-header-bg p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full border border-label-border bg-label-bg px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-label-text">
            Perfil
          </span>
          <h1 className="mt-4 text-3xl font-bold text-title-text">{name}</h1>
          <p className="mt-3 max-w-xl text-base leading-7 text-subtitle-text">{presentation}</p>
        </div>
      </div>
    </header>
  )
}

export default ProfileHeader