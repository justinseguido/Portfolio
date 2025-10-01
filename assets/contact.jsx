export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
          <input type="email" placeholder="Your Email" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
          <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
