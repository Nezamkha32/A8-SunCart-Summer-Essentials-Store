import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/JRwmJG8r/summer-2.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-shadow-amber-200">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Summer Sale 50% OFF
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-amber-300">
           Hot deals on sunglasses, outfits, skincare and more. Stay cool and stylish this summer.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                Explore
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;