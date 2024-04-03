import './index.css'

const Item = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails

  return (
    <li>
      <img src={imageUrl} alt={imageAltText} />
    </li>
  )
}

export default Item
