import './Home.css';

const features = [
  'Responsive Design',
  'Fast Performance',
  'Accessibility',
  'SEO Optimized'
];



const Home = () => {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to Our Business</h1>
        <p>Providing modern web solutions</p>
      </section>

      <section>
        <h2>Our Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              {feature}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
