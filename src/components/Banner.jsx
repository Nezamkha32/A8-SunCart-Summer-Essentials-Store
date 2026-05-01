import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/r28b4QDb/summer.webp')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-shadow-amber-200">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Summer Essentials
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-amber-300">
           Up to 50% off on summer products
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