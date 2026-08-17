const Button = () => {
  const handleAlgo = () => {
    alert('•Hiciste click en el botón!!')
  }

  return (
    <button
      type="button"
      onClick={handleAlgo}
      className="inline-flex items-center justify-center rounded-lg border border-button-border bg-button-bg px-5 py-3 text-sm font-semibold text-button-text transition-colors duration-200 hover:bg-button-bg-hover focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      -Hazme click-
    </button>
  )
}

export default Button