import React, { useState } from 'react';


const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "gadhiyanaimish@gmail.com" },
    { logo: "logo-whatsapp", text: "+91 9537105016" },
    {
      logo: "location",
      text: "Ahmedabad",
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any of the form fields are empty
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setEmptyFields(true);
      return;
    }

    // Form fields are not empty, reset emptyFields state
    setEmptyFields(false);

    // Handle form submission logic here (e.g., send data to a server)

    // Clear form data
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    // Set formSubmitted to true to display success message
    setFormSubmitted(true);
  };

  const form = () => {
    alert("Form submitted successfully!")
  }

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" nSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required />
            <input type="Email" placeholder="Your Email Address"   id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required />
            <input type="text" placeholder="Write a Subject"  id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required />
            <textarea placeholder="Your Message" rows={10}   name="message"
          value={formData.message}
          onChange={handleChange}
          required></textarea>
            {emptyFields && <p className="text-red-500">Please fill in all fields.</p>}
            {formSubmitted && <p className="text-green-500" onClick={form}></p>}
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
