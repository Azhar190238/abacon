import Image from "next/image";

const images = [
  { src: "/building.jpg", title: "Modern House" },
  { src: "/building.jpg", title: "Master Bedroom" },
  { src: "/building.jpg", title: "Classic Villa" },
  { src: "/building.jpg", title: "Poolside Lounge" },
  { src: "/building.jpg", title: "Office Space" },
  { src: "/building.jpg", title: "Apartment Complex" },
  { src: "/building.jpg", title: "Sunroom Design" },
  { src: "/building.jpg", title: "Luxury Bathroom" },
];

export default function Gallery() {
  return (
    <section className=" bg-white -mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-lg shadow-md">
            <Image
              src={img.src}
              alt={img.title}
              width={500}
              height={400}
              className="w-full h-[375px] object-cover transition duration-300 group-hover:opacity-60"
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
