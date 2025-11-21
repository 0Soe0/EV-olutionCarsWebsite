import './FeatureCard.css';

export const FeatureCard = ({ image, title, description }) => {
  return (
    <div className='feature-card'>
      <h3>{title}</h3>
      <div className='feature-card-content'>
        <img src={image} alt="" />
        <p>{description}</p>
      </div>
    </div>
  )
}