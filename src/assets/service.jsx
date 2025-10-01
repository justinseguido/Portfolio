export default function Services() {
  const services = [
    { title: "Web Development", desc: "Modern and responsive websites tailored to your needs." },
    { title: "UI/UX Design", desc: "Clean, intuitive, and user-friendly interfaces." },
    { title: "Brand Identity", desc: "Logos, colors, and branding that make you stand out." },
  ];

  return (
    <section id="services" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-bold mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
