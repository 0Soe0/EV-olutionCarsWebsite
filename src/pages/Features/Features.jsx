import './Features.css';
import { FeatureCard } from '../../components/FeatureCard/FeatureCard';
import { Navbar } from '../../components/Navbar/Navbar';
import carInterior1 from '../../assets/carInterior1.png';
import carInterior2 from '../../assets/carInterior2.png';
import carInterior4 from '../../assets/carInterior4.png';
import carInterior5 from '../../assets/carInterior5.png';
import carWheels from '../../assets/carWheels.png';
import { Carousel } from '../../components/Carousel/Carousel';

export const Features = () => {

  let featureData = [
    {image: carInterior1, 
      title: 'Advanced Cockpit', 
      description: 'Step into the future with our Advanced Digital Cockpit. This driver-centric space is built around ergonomic, cloud-soft seats that offer superior support and comfort for any journey. Seamlessly integrating luxurious materials with cutting-edge technology, it features immersive, customizable displays and an intuitive layout. The result is a highly focused, comfortable, and connected driving environment that transforms every journey into a commanding experience'},
    {image: carInterior2, 
      title: 'Smart Connectivity', 
      description: 'Experience seamless connectivity through the Integrated Intelligence System. At its core are crystal-clear, advanced screens that host the intuitive GPS navigation. Complementing this is the immersive, custom-tuned audio system that delivers a concert-hall experience. Everything is managed hands-free via the voice-activated Personal Assistant, which intelligently learns your preferences to manage media, climate, and navigation, keeping your focus where it belongs: on the road.'},
    {image: carInterior4, 
      title: 'Easy Transportation', 
      description: 'The vehicle features a Best-in-Class Spacious Trunk, engineered to accommodate everything from daily errands to extended vacation gear. With a low loading height and flexible 60/40 folding seats, easy transportation of belongings is guaranteed, whether you are hauling luggage, sports equipment, or furniture. Maximized volume and thoughtful tie-down points ensure your cargo is secure, making every packing job simple and efficient.'},
    {image: carInterior5, 
      title: 'Clear View', 
      description: 'The Smart View Rear Mirror System goes beyond simple reflection. It features an integrated anti-glare digital display that provides an unobstructed, high-definition view of the road behind, regardless of passengers or cargo blocking the rear window. It is equipped with low-light enhancement for superior visibility at night and can instantly switch to a traditional reflective mode when desired, ensuring optimal safety and clarity in all conditions.'},
    {image: carWheels, 
      title: 'Wheels, tires and brake calipers', 
      description: 'Experience the future of handling with our Aero-Flow Performance Wheel, featuring an innovative design that actively channels air for superior brake cooling. The wheel is paired with High-Grip, Low-Rolling Resistance Tires for maximum contact and efficiency. Stopping power is delivered by the Precision Caliper System, engineered with lightweight materials to ensure rapid, fade-resistant braking, providing unmatched control and safety.'}
  ]

  return (
    <>
      <Navbar />
      <div className='features-container fade-in'>
        <h1>Features</h1>
        <Carousel>
{featureData.map((feature, index) => (
          <FeatureCard key={index} image={feature.image} title={feature.title} description={feature.description} />
        ))}
        </Carousel>
        
      </div>
    </>
  )
}