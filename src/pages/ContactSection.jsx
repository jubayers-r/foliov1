import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    toast.success("Message sent successfully!");
    // reset form
    setFormData({ name: "", email: "", message: "" });

    // You can connect with Formspree, EmailJS, or your own API here
  };

  return (
    <section
      id="contact"
      className=" px-4 py-20 bg-white dark:bg-black text-black dark:text-white"
      data-aos="fade-down"
    >
      <Toaster />
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-start sm:text-center">
          Let’s Build Together
        </h1>

        {/* Contact Info */}
        <div className="mb-12 space-y-6">
          <ContactInfo
            icon={<Phone className="text-yellow-500" />}
            title="Phone / WhatsApp Number"
            detail="+880 1866965359"
          />
          <ContactInfo
            icon={<Mail className="text-yellow-500" />}
            title="Email"
            detail="jubayer.shikder.007@gmail.com"
          />
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <FormInput
            label="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Bruce Thomas Wayne"
            required
          />
          <FormInput
            label="Your email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="bruce@w.enterprises.com"
            required
          />
          <FormTextarea
            label="Have something on your mind?"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          />
          <button
            type="submit"
            className="w-full bg-[#ffaa00] hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex sm:flex-col items-center justify-start sm:text-center text-start sm:justify-center gap-3 text-lg">
    <div className="text-2xl">{icon}</div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-md text-gray-600 dark:text-gray-300">{detail}</p>
    </div>
  </div>
);

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium mb-1">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
  </div>
);

const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium mb-1">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows="3"
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
    />
  </div>
);

export default ContactSection;
