import React from "react";

const Footer = () => {
  const socialIcons = [
    {
      icon: `<svg viewBox="0 0 448 512" height="20" width="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>`,
    },
    {
      icon: `<svg viewBox="0 0 448 512" height="20" width="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>`,
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px"><path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" fill="white"></path></svg>`,
    },
    {
      icon: `<svg viewBox="0 0 576 512" height="20" width="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>`,
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-green-400 to-blue-500 text-white pt-10">
      <div className="container px-8">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">FULFILLMENT CATEGORIES</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            {[
              "Mild Steel",
              "Non Ferrous",
              "Polymers & Packaging",
              "Chemicals",
              "Energy & Petroleum",
              "Stainless Steel",
              "Pipes",
              "Infrastructure & Construction",
            ].map((category, index) => (
              <span key={index} className="cursor-pointer">
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold">ofBusiness</h3>
            <p className="text-sm">OFB Tech Private Limited</p>
            <p className="text-sm mt-2">Smart Procurement for SMEs</p>
            <p className="text-sm">
              Get Best Prices for your Raw Materials requirements
            </p>

            <h5 className="text-lg font-bold mt-6">Registered Office</h5>
            <p className="text-sm">
              B-1102, Sankalp Iconic Tower, Opp. Vikramnagar,
              <br />
              Bopal Ambli Road, Bodakdev, Ahmedabad City,
              <br />
              Ahmedabad- 380054, Gujarat, India
            </p>
            <p className="text-sm">CIN: U74140GJ2015PTC154393</p>
            <p className="text-sm">Telephone No: 01141054262</p>
            <p className="text-sm">Email Id: compliance@ofbusiness.in</p>
          </div>

          <div>
            <h3 className="text-lg font-bold">MOBILE APPS</h3>
            <div className="flex gap-4 my-4">
              <img
                src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/107x50/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2Fappstore-1.svg"
                width="107"
                height="50"
                alt=""
              />
              <img
                src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/107x50/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fnew-buyer-imgs%2FplayStoreWithstar.svg"
                width="107"
                height="50"
                alt=""
              />
            </div>

            <h3 className="text-lg font-bold">FOLLOW US</h3>
            <div className="flex gap-4 mt-2">
              {socialIcons.map((item, index) => (
                <span
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between items-start gap-8">
            <div>
              <h3 className="text-lg font-bold">COMPANY</h3>
              {[
                "About Us",
                "Team",
                "Investors",
                "Debt Partners",
                "SMEAssist",
                "Career",
              ].map((item, index) => (
                <p key={index} className="cursor-pointer">
                  {item}
                </p>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-bold">RESOURCES</h3>
              {[
                "OFB in News",
                "Blogs",
                "CEO Speaks",
                "Download Media Kit",
                "Press Release",
              ].map((item, index) => (
                <p key={index} className="cursor-pointer">
                  {item}
                </p>
              ))}
            </div>

            {/* <div>
              <h3 className="text-lg font-bold mt-6">SUPPORT</h3>
              {[
                "Privacy & Terms",
                "Contact Us",
                "General Enquiries",
                "Supplier Enquiries",
                "Partner Enquiries",
                "Investor Relations",
              ].map((item, index) => (
                <p key={index} className="cursor-pointer">
                  {item}
                </p>
              ))}
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-[#1486c8] text-white text-center text-sm mt-8 w-full">
        ©2025 OFB Tech Pvt. Ltd, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
