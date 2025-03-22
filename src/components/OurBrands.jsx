import { motion } from "framer-motion";

const OurBrands = () => {
  const movingCardsOne = [
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/samruddhifarm.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/dharabrand.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/grontecbrand.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/sangambrand.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/noblesteelsbrand.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/emoxbrand.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/gujaratfoilsbrand.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/saivanabrand.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/wonderblues.png",
    "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/candorfoodsbrand.png",
  ];

  return (
    <div class="h-40 bg-linear-to-r from-cyan-500 to-blue-500">
      <h1 className=" text-white text-4xl font-bold pl-8 pt-30">Our Brands</h1>

      <div className="relative flex overflow-x-hidden mt-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {movingCardsOne.map((image, index) => (
            <motion.div
              key={index}
              className="mx-4 h-20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={image}
                alt={`Brand ${index + 1}`}
                className="h-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute flex animate-marquee2 whitespace-nowrap">
          {movingCardsOne.map((image, index) => (
            <motion.div
              key={index}
              className="mx-4 h-20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={image}
                alt={`Brand ${index + 1}`}
                className="h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBrands;
