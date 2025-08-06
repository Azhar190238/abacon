import Image from "next/image";

const images = [
  { src: "/gallery/i1.png", title: "Modern House" },
  { src: "/gallery/i2.png", title: "Master Bedroom" },
  { src: "/gallery/i3.png", title: "Classic Villa" },
  { src: "/gallery/i4.png", title: "Poolside Lounge" },
  { src: "/gallery/i5.png", title: "Office Space" },
  { src: "/gallery/i6.png", title: "Apartment Complex" },
  { src: "/gallery/i7.png", title: "Sunroom Design" },
  { src: "/gallery/i8.jpg", title: "Luxury Bathroom" },
];

export default function Gallery() {
  return (
    <section className=" bg-white -mb-8 overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative group overflow-hidden shadow-md">
            <Image
              src={img.src}
              alt={img.title}
              width={500}
              height={400}
              className="w-full h-[375px] object-cover transition duration-300 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white text-lg font-medium font-anton">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
