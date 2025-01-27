

const Gallery = () => {
  const images = [
    {
      id: 1,
      title: "Luxury Suite",
      description: "Enjoy our luxurious suite with ocean view.",
      imgSrc: "https://cdn.pixabay.com/photo/2018/11/09/12/55/wine-3804523_640.jpg",
    },
    {
      id: 2,
      title: "Deluxe Room",
      description: "Relax in our fully furnished deluxe room.",
      imgSrc: "https://cdn.pixabay.com/photo/2018/11/09/12/55/wine-3804523_640.jpg",
    },
    {
      id: 3,
      title: "Outdoor Pool",
      description: "Take a dip in our stunning outdoor pool.",
      imgSrc: "https://cdn.pixabay.com/photo/2018/11/09/12/55/wine-3804523_640.jpg",
    },
    {
      id: 4,
      title: "Fine Dining",
      description: "Taste gourmet dishes at our restaurant.",
      imgSrc: "https://cdn.pixabay.com/photo/2018/11/09/12/55/wine-3804523_640.jpg",
    },
    {
      id: 5,
      title: "Private Beach",
      description: "Experience serenity at our private beach.",
      imgSrc: "https://cdn.pixabay.com/photo/2018/11/09/12/55/wine-3804523_640.jpg",
    },
    {
      id: 6,
      title: "Fitness Center",
      description: "Stay fit with our state-of-the-art gym.",
      imgSrc: "https://cdn.pixabay.com/photo/2018/11/09/12/55/wine-3804523_640.jpg",
    },
    {
      id: 7,
      title: "Spa Services",
      description: "Relax with our luxurious spa treatments.",
      imgSrc: "https://cdn.pixabay.com/photo/2018/11/09/12/55/wine-3804523_640.jpg",
    },
    {
      id: 8,
      title: "Conference Room",
      description: "Host events in our modern conference rooms.",
      imgSrc: "https://cdn.pixabay.com/photo/2018/11/09/12/55/wine-3804523_640.jpg",
    },
    {
      id: 9,
      title: "Executive Suite",
      description: "Our executive suite for business travelers.",
      imgSrc: "https://cdn.pixabay.com/photo/2018/11/09/12/55/wine-3804523_640.jpg",
    },
    {
      id: 10,
      title: "Kids' Play Area",
      description: "Safe and fun space for your little ones.",
      imgSrc: "https://cdn.pixabay.com/photo/2018/11/09/12/55/wine-3804523_640.jpg",
    },
  ];

  return (
<>

    
<div className="relative">
    {/* Background Image */}
    <div
      className="w-full h-60 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg')", // Replace with your image URL
      }}
    >
      <div className="absolute inset-0  bg-opacity-40"></div> {/* Add a dark overlay */}
    </div>

    {/* Text Content */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Gallery</h1>
      <p className="text-white text-sm sm:text-base">
        <span className="text-yellow-500">Home</span> &rarr; Gallery
      </p>
    </div>
  </div>
    <div className="gallery-page py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="gallery-item border rounded-lg shadow-md">
              <img
                src={image.imgSrc}
                alt={image.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Gallery;
