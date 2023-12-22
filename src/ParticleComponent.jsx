import Particles from 'react-tsparticles';

const ParticleComponent = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        // Specify your particle options here
        // Example:
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
