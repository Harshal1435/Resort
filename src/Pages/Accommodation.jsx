

const AccommodationPage = () => {
  return (
    <div>
      {/* Special Accommodation Section */}

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
        <h1 className="text-4xl font-bold text-white mb-4">Accommodation</h1>
        <p className="text-white text-sm sm:text-base">
          <span className="text-yellow-500">Home</span> &rarr; Accommodation
        </p>
      </div>
    </div>
      <section className=" bg-gray-100 p-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Special Accommodation</h2>
          <p className="text-gray-600 mb-12">
            We all live in an age that belongs to the young at heart. Life that is becoming extremely fast.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
               {
                title: "Double Deluxe Room",
                price: "$250/night",
                image: "https://tse4.mm.bing.net/th?id=OIP.7mxvAu_osNOBty3_wX3zCwHaE4&w=312&h=312&c=7",
              },
              {
                title: "Single Deluxe Room",
                price: "$200/night",
                image: "https://winhotelsgroup.nl/properties/hotel-notting-hill/images/rooms/single-deluxe-room/single-deluxe-room-1.jpg",
              },
              {
                title: "Honeymoon Suite",
                price: "$750/night",
                image: "https://rosycruise.com/wp-content/uploads/2020/06/Vip_1-1-2048x1365.jpg",
              },
              {
                title: "Economy Double",
                price: "$200/night",
                image: "https://tse3.mm.bing.net/th?id=OIP.mhPX4XGXBpJ5d07gwqZ7WQHaE8&w=316&h=316&c=7",
              },
            ].map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{room.title}</h3>
                  <p className="text-yellow-500 font-bold text-lg">{room.price}</p>
                  <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Your Room Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto text-white text-center">
          <h2 className="text-2xl font-bold mb-8">Book Your Room</h2>
          <form className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <input
              type="date"
              className="w-full sm:w-auto p-3 rounded-md border-gray-200 focus:outline-none text-black"
              placeholder="Arrival Date"
            />
            <input
              type="date"
              className="w-full sm:w-auto p-3 rounded-md border-gray-200 focus:outline-none text-black"
              placeholder="Departure Date"
            />
            <select
              className="w-full sm:w-auto p-3 rounded-md border-gray-200 focus:outline-none text-black"
            >
              <option value="">Adult</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select
              className="w-full sm:w-auto p-3 rounded-md border-gray-200 focus:outline-none text-black"
            >
              <option value="">Child</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600"
            >
              Book Now
            </button>
          </form>
        </div>
      </section>

      {/* Normal Accommodation Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Normal Accommodation</h2>
          <p className="text-gray-600 mb-12">
            We all live in an age that belongs to the young at heart. Life that is becoming extremely fast.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Double Deluxe Room", price: "$250/night" },
              { title: "Single Deluxe Room", price: "$200/night" },
              { title: "Honeymoon Suit", price: "$750/night" },
              { title: "Economy Double", price: "$200/night" },
            ].map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src="https://via.placeholder.com/300x200"
                  alt={room.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{room.title}</h3>
                  <p className="text-yellow-500 font-bold text-lg">{room.price}</p>
                  <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccommodationPage;
