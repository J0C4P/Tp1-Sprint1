const Button = () => {
  const handleAlgo = () => {
    alert('•Hiciste click en el botón!!')
  }

  return (
    <button
      type="button"
      onClick={handleAlgo}
    >
      -Hazme click-
    </button>
  )
}

export default Button