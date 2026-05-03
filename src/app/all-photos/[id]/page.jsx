import Image from "next/image";


const PhotoDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch('http://localhost:3000/data.json')
    const photos = await res.json()
    const photo = photos.find(p => p.id == id)

    return (
    <div className="max-w-5xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-10">

      {/* Image */}
      <div className="relative w-full h-100">
        <Image
          src={photo.image}
          alt={photo.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Info */}
      <div>
        <h1 className="text-3xl font-bold">{photo?.name}</h1>

        <p className="text-gray-500 mt-1">{photo.brand}</p>

        <p className="text-2xl font-semibold text-orange-500 mt-3">
          ${photo.price}
        </p>

        <p className="mt-4 text-gray-600">
          {photo.description}
        </p>

        {/* Features */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Features</h3>

          <ul className="list-disc ml-5 space-y-1">
            {photo?.features?.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <p className="mt-4 font-medium">
          Stock: {photo.stock}
        </p>

        <button  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-black text-white dark:bg-white dark:text-black 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10">
          Buy Now
        </button>
      </div>

    </div>
    );
};

export default PhotoDetailsPage;