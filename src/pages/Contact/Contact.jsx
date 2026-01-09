import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert('Please fill all fields');
      return;
    }

    alert('Form submitted successfully!');
  };

  return (
    <main>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
            <input
             id="name"
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
            />


        <br /><br />

        <label htmlFor="email">Email</label>
            <input
             id="email"
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
           />


        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Contact;
