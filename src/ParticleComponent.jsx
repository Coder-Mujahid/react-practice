// ParticleComponent.js
import Particles from 'react-tsparticles';
import './App.css'


const ParticleComponent = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 80,
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  );
};

export default ParticleComponent;

