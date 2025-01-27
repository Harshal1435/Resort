import { motion } from "framer-motion";

const Blog = () => {
  const blogPosts = [
    {
      title: "Low Cost Advertising",
      date: "31st January, 2025",
      category: "Travel",
      image: "https://cdn.pixabay.com/photo/2017/07/11/22/13/resort-2495217_640.jpg",
      description: "Explore affordable ways to market your hotel and attract more guests."
    },
    {
      title: "Creative Outdoor Ads",
      date: "31st January, 2025",
      category: "Life Style",
      image: "https://cdn.pixabay.com/photo/2017/07/11/22/13/resort-2495217_640.jpg",
      description: "How innovative outdoor advertisements can increase customer engagement."
    },
    {
      title: "Is Classified How To Utilize Free",
      date: "31st January, 2025",
      category: "Travel",
      image: "https://cdn.pixabay.com/photo/2017/07/11/22/13/resort-2495217_640.jpg",
      description: "Maximizing free online platforms to promote travel destinations effectively."
    }
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Latest Posts from Blog
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            

            <img src={post.image} alt={post.title} className="w-full h-40 object-cover hover:scale-110 object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform overflow-hidden"   />
           
            <div className="p-4">
              <span className="text-yellow-500 text-sm">{post.category}</span>
              <h3 className="font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{post.description}</p>
              <p className="text-gray-400 text-xs mt-2">{post.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
