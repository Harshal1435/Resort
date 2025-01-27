const Contact = () => {
  return (
    <div>
      {/* Special Accommodation Section */}

      <div className="relative">
        {/* Background Image */}
        <div
          className="w-full h-60 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg')", // Replace with your image URL
          }}
        >
          <div className="absolute inset-0  bg-opacity-40"></div>{" "}
          {/* Add a dark overlay */}
        </div>

        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
          <p className="text-white text-sm sm:text-base">
            <span className="text-yellow-500">Home</span> &rarr; Contact
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="contact-section p-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <span className="text-yellow-500 text-xl">&#127968;</span>
                <div>
                  <p>Nagpur, India</p>
                  <p>Orange City</p>
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <span className="text-yellow-500 text-xl">&#128222;</span>
                <div>
                  <p>+91 98765 43210</p>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <span className="text-yellow-500 text-xl">&#9993;</span>
                <div>
                  <p>support@resort.com</p>
                  <p>Send us your query anytime!</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <form className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Enter email address"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Enter Subject"
                className="border p-2 rounded col-span-2"
              />
              <textarea
                placeholder="Enter Message"
                className="border p-2 rounded col-span-2"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded col-span-2 hover:bg-yellow-600"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
