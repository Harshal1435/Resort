const BlogPage = () => {
  const categoryImages = {
    "Social Life":
      "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg",
    Politics:
      "https://images.pexels.com/photos/4666858/pexels-photo-4666858.jpeg",
    Food: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
  };
  const blogImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1493810329807-5c6c6d98a6c9",
    "https://images.unsplash.com/photo-1494173853739-c21f58b16055",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  ];

  const popularPostImages = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1494173853739-c21f58b16055",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  ];
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[500px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
        }}
      >
        <div className=" bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Dude You are Getting a Telescope
          </h1>
          <p className="mb-6 text-lg">
            There is a moment in the life of any aspiring astronomer...
          </p>
          <button className="px-6 py-3 bg-yellow-500 text-white rounded-md font-medium hover:bg-yellow-600">
            View More
          </button>
        </div>
      </header>

      {/* Featured Categories */}
      <section className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Social Life", "Politics", "Food"].map((category, index) => (
          <div
            key={index}
            className="relative h-48 bg-cover bg-center rounded-md shadow-md"
            style={{ backgroundImage: `url(${categoryImages[category]})` }}
          >
            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center rounded-md">
              <h2 className="text-white text-2xl font-semibold">{category}</h2>
            </div>
          </div>
        ))}
      </section>

      {/* Main Content */}
      <section className="container mx-auto flex flex-wrap px-4">
        {/* Blog List */}
        <div className="w-full lg:w-2/3 pr-0 lg:pr-6">
          {[...Array(5)].map((_, index) => (
            <article
              key={index}
              className=" shadow-md rounded-md mb-6 overflow-hidden"
            >
              <img
                src={blogImages[index]}
                alt="Blog"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-4">Mark Wekens</span>
                  <span>12 Dec, 2017</span>
                  <span className="ml-auto">121k Views</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Astronomy Binoculars A Great Alternative
                </h3>
                <p className="text-gray-700 mb-4">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should...
                </p>
                <button className="px-6 py-2 text-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                  View More
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3">
          {/* Search */}
          <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <input
              type="text"
              placeholder="Search Posts"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Author Info */}
          <div className="bg-white shadow-md rounded-md p-6 mb-6 text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Author"
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">Charlie Barber</h3>
            <p className="text-gray-500 text-sm">Senior Blog Writer</p>
          </div>

          {/* Popular Posts */}
          <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  src={popularPostImages[index]}
                  alt="Post"
                  className="w-12 h-12 rounded-md mr-4"
                />
                <div>
                  <h4 className="text-sm font-medium">
                    Space The Final Frontier
                  </h4>
                  <p className="text-xs text-gray-500">12 hours ago</p>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-lg font-semibold mb-4">Post Categories</h3>
            <ul className="space-y-2">
              {["Technology", "Lifestyle", "Fashion", "Food", "Adventure"].map(
                (category, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{category}</span>
                    <span className="text-gray-500">
                      ({Math.floor(Math.random() * 50)})
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </aside>
      </section>

      {/* Pagination */}
      <section className="container mx-auto py-8 px-4 text-center">
        <button className="px-4 py-2 mx-1 bg-gray-300 rounded-md hover:bg-gray-400">
          1
        </button>
        <button className="px-4 py-2 mx-1 bg-yellow-500 text-white rounded-md">
          2
        </button>
        <button className="px-4 py-2 mx-1 bg-gray-300 rounded-md hover:bg-gray-400">
          3
        </button>
      </section>

    
    </div>
  );
};

export default BlogPage;
