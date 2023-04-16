import './index.css'

const CartItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`list-container ${className}`}>
      <div>
        <h1 className="title">{title}</h1>
        <p className="des-text">{description}</p>
        <div className="img-container">
          <img src={imgUrl} alt={title} className="img" />
        </div>
      </div>
    </li>
  )
}

export default CartItem
