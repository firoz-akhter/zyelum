const About = () => {
  const logos = [
    {
      src: "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/adani-logo-2.png",
      name: "Adani",
    },
    {
      src: "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/indian-oil-logo-2.png",
      name: "IndianOil",
    },
    {
      src: "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/nalco-logo-2.png",
      name: "NALCO",
    },
    {
      src: "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/nhai-logo-2.png",
      name: "NHAI",
    },
    {
      src: "https://d86af0gufpxog.cloudfront.net/unsafe/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2Flanding-page-150224%2Freddy-logo-2.png",
      name: "Dr. Reddy's",
    },
    {
      src: "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/sail-logo-2.png",
      name: "SAIL",
    },
    {
      src: "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/vizag-steel-logo-2.png",
      name: "Vizag Steel",
    },
    {
      src: "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/walmart-logo-2.png",
      name: "Walmart",
    },
  ];

  const aboutData = [
    {
      title: "Aggregator",
      description:
        "Enabling buyers and supplier ecosystem to supply the best raw materials across the globe",
      image:
        "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/Aggregation.png",
    },
    {
      title: "Manufacturer",
      description:
        "30+ world-class manufacturing & processing plants in Steel, Aluminium, Energy, Chemicals, Agri & more",
      image:
        "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/Manufacturer.png",
    },
    {
      title: "Importer & Exporter",
      description:
        "One of India's Largest Importers & Exporters in Steel, Agri & other product categories",
      image:
        "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/Importer-Exporter.png",
    },
    {
      title: "SaaS & AI",
      description:
        "Innovations with industry-first SME B2B SaaS offering from Ved AI, BidAssist, SMEAssist, and more",
      image:
        "https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/SaaSAi.png",
    },
  ];

  return (
    <>
      <div className="flex justify-around items-center bg-white rounded-xl shadow-md p-8 mx-8 w-auto -mt-16 relative z-10">
        <div className="flex flex-wrap justify-center gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={logo.src} alt={logo.name} className="h-12" />
            </div>
          ))}
        </div>
      </div>
      <h1 className="pl-8 mt-20 mb-8 text-4xl font-bold">
        About OfBusiness Group
      </h1>
      <p className="pl-8 text-gray-500">
        We are India's leading B2B Raw Materials procurement and credit
        platform, dedicated to revolutionising the SME sector. As a dynamic
        player in over 7 supply chains, including Steel, Aluminium, Agriculture,
        Petroleum, Energy, Polymers, Chemicals & more, we aim to add value to
        the SMEs by providing cheap and high quality raw materials, and access
        to credit. Our dual role as both Supplier and Manufacturer positions us
        uniquely in the market
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10">
        {aboutData.map((card, index) => (
          <div
            key={index}
            className="overflow-hidden bg-cover bg-center h-[377px] flex items-end relative group"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="absolute bottom-0 w-full  p-4 rounded-xl transform transition-all duration-300 group-hover:translate-y-0 translate-y-[calc(100%-3.5rem)]">
              <h3 className="text-white text-xl font-bold">{card.title}</h3>
              <p className="text-gray-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
