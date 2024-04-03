import './index.css'

const Tabs = props => {
  const {buttonDetails, buttonClicked, isActive} = props

  const {buttonText, id} = buttonDetails

  const tabClicked = () => {
    buttonClicked(id)
  }

  const buttonClassName = isActive ? 'active' : 'not-active'

  return (
    <li>
      <button type="button" onClick={tabClicked} className={buttonClassName}>
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
