export default function Gallery() {
  const images = [
    "https://source.unsplash.com/random/400x300?tech",
    "https://source.unsplash.com/random/400x300?design",
    "https://source.unsplash.com/random/400x300?code",
    "https://source.unsplash.com/random/400x300?office",
    "https://source.unsplash.com/random/400x300?app",
    "https://source.unsplash.com/random/400x300?computer",
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
