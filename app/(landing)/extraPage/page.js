// components/CottonOn.jsx
import Image from "next/image";

export default function CottonOn() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <div className="text-center text-3xl font-bold mb-6">Cotton On</div>

      {/* Main Content */}
      <div className="flex w-full max-w-6xl">
        {/* Left Sidebar */}
        <div className="w-1/6 space-y-4 pr-4">
          <div className="space-y-2">
            <button className="block w-full bg-white p-2 rounded shadow">Male</button>
            <button className="block w-full bg-white p-2 rounded shadow">Female</button>
            <button className="block w-full bg-white p-2 rounded shadow">Kids</button>
          </div>
          <div className="space-y-2">
            <button className="block w-full bg-white p-2 rounded shadow">Summer</button>
            <button className="block w-full bg-white p-2 rounded shadow">Winter</button>
          </div>
          <button className="block w-full bg-white p-2 rounded shadow">Outfits</button>
        </div>

        {/* Product Grid */}
        <div className="w-4/6 grid grid-cols-3 gap-4">
          {/* Row 1: Hats */}
          <div className="flex flex-col items-center bg-white p-2 rounded shadow">
            <Image src="/cap.jpg" alt="Hat 1" width={80} height={80} />
            <span>$6</span>
          </div>
          <div className="flex flex-col items-center bg-white p-2 rounded shadow">
            <Image src="/cap.jpg" alt="Hat 2" width={80} height={80} />
            <span>$6</span>
          </div>
          <div className="flex flex-col items-center bg-white p-2 rounded shadow">
            <Image src="/cap.jpg" alt="Hat 3" width={80} height={80} />
            <span>$6</span>
          </div>

          {/* Row 2: Tops */}
          <div className="flex flex-col items-center bg-white p-2 rounded shadow">
            <Image src="/shirt.jpg" alt="Top 1" width={80} height={80} />
            <span>$30</span>
          </div>
          <div className="flex flex-col items-center bg-white p-2 rounded shadow">
            <Image src="/shirt.jpg" alt="Top 2" width={80} height={80} />
            <span>$30</span>
          </div>
          <div className="flex flex-col items-center bg-white p-2 rounded shadow">
            <Image src="/shirt.jpg" alt="Top 3" width={80} height={80} />
            <span>$30</span>
          </div>

          {/* Row 3: Bottoms */}
          <div className="flex flex-col items-center bg-white p-2 rounded shadow">
            <Image src="/cap.jpg" alt="Bottom 1" width={80} height={80} />
            <span>$60</span>
          </div>
          <div className="flex flex-col items-center bg-white p-2 rounded shadow">
            <Image src="/cap.jpg" alt="Bottom 2" width={80} height={80} />
            <span>$60</span>
          </div>
          <div className="flex flex-col items-center bg-white p-2 rounded shadow">
            <Image src="/cap.jpg" alt="Bottom 3" width={80} height={80} />
            <span>$60</span>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/6 space-y-2 pl-4">
          <button className="block w-full bg-white p-2 rounded shadow">Tops</button>
          <button className="block w-full bg-white p-2 rounded shadow">Bottoms</button>
          <button className="block w-full bg-white p-2 rounded shadow">Shoes</button>
          <button className="block w-full bg-white p-2 rounded shadow">Hats</button>
          <button className="block w-full bg-white p-2 rounded shadow">Glasses</button>
          <button className="block w-full bg-white p-2 rounded shadow">Socks</button>
          <button className="block w-full bg-white p-2 rounded shadow">Jackets</button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex space-x-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded shadow">TRY ON</button>
        <div className="bg-white px-4 py-2 rounded shadow">Price: $216</div>
        <button className="bg-green-600 text-white px-6 py-2 rounded shadow">Buy Now</button>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded shadow">Become a Member</button>
      </div>
    </div>
  );
}
