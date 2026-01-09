import { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <main>
      <h1>Our Services</h1>

      {services.map(service => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.body}</p>
        </div>
      ))}
    </main>
  );
};

export default Services;
