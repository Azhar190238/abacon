import Image from "next/image";

const images = [
  { src: "/gallery/1.png", title: "Modern House" },
  { src: "/gallery/2.png", title: "Master Bedroom" },
  { src: "/gallery/3.png", title: "Classic Villa" },
  { src: "/gallery/4.png", title: "Poolside Lounge" },
  { src: "/gallery/5.png", title: "Office Space" },
  { src: "/gallery/6.png", title: "Apartment Complex" },
  { src: "/gallery/7.png", title: "Sunroom Design" },
  { src: "/gallery/8.png", title: "Luxury Bathroom" },
];

export default function Gallery() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-10 text-blue-900">Our Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-lg shadow-md">
            <Image
              src={img.src}
              alt={img.title}
              width={500}
              height={300}
              className="w-full h-auto object-cover transition duration-300 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white text-lg font-medium">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
