import React, { useState } from "react";

const testimonials = [
  {
    imgSrc:
      "https://d86af0gufpxog.cloudfront.net/unsafe/328x400/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2Flanding-page-150224%2Fsajal.png",
    name: "Mr. Sajal Gupta",
    text: "As Managing Director of a renewable materials supplier company serving Indian Railways, solar industry, and commercial sectors, we encountered shipment delays, working capital shortages, and high raw material costs. OfBusiness streamlined procurement, reduced working capital cycles, and helped us cut interest costs significantly.",
  },
  {
    imgSrc:
      "https://d86af0gufpxog.cloudfront.net/unsafe/328x400/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2Flanding-page-150224%2Frahul.png",
    name: "Mr. Rahul Bansal",
    text: "In our mission to deliver distinctive design capabilities for commercial spaces, our interior design company often grapples with the challenges of volatile raw material prices and extended lead times. OfBusiness has been a transformative partner, introducing transparency to our procurement process and consistently providing raw materials at rates lower than our competitors.",
  },
  {
    imgSrc:
      "https://d86af0gufpxog.cloudfront.net/unsafe/328x400/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2Flanding-page-150224%2Fankit.png",
    name: "Mr. Ankit Garg",
    text: "We aim to electrify India with our cost-effective Solar Power solutions, but it is easier said than done. We consistently grapple with the challenge of working capital shortages. OfBusiness emerged as a crucial ally, offering invaluable support in addressing our working capital concerns.",
  },
  {
    imgSrc:
      "https://d86af0gufpxog.cloudfront.net/unsafe/328x400/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2Flanding-page-150224%2Fmasood.png",
    name: "Mr. Masood Ahmed Ishkay",
    text: "Navigating through the complexities of the manufacturing sector, we often encounter the daunting challenge of securing cost-effective raw materials. OfBusiness has been our trusted partner, significantly easing the strain of high input costs.",
  },
  {
    imgSrc:
      "https://d86af0gufpxog.cloudfront.net/unsafe/328x400/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2Flanding-page-150224%2FObulampalli.png",
    name: "Mr. Obulampalli Shiv Shankar Venkat",
    text: "As industrial electric component manufacturers, we grappled with raw material price volatility and lead time challenges. OfBusiness provided cost-effective procurement solutions and optimized our purchases with their tech innovations.",
  },
  {
    imgSrc:
      "https://d86af0gufpxog.cloudfront.net/unsafe/328x400/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2Flanding-page-150224%2FJagdeep.png",
    name: "Mr. Jagdeep Bansal",
    text: "The persistent challenges of high input costs and the scarcity of construction materials have consistently posed major obstacles for infrastructure development firms like ours. OfBusiness played a pivotal role in optimizing our procurement processes.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex items-center justify-center bg-white rounded-xl p-6 shadow-lg mx-8 border border-gray-200">
      <div className="flex-shrink-0">
        <img
          src={testimonials[currentIndex].imgSrc}
          alt={testimonials[currentIndex].name}
          className="h-96 rounded-lg"
        />
      </div>
      <div className="ml-8">
        <p className="text-xl italic mb-4 text-gray-400">
          "{testimonials[currentIndex].text}"
        </p>
        <p className="font-semibold text-blue-600">
          {testimonials[currentIndex].name}
        </p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            <svg
              viewBox="0 0 512 512"
              height="20"
              width="20"
              aria-hidden="true"
              focusable="false"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              color="fff"
              class="css-1eamic5 ex0cdmw0"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M244 400L100 256l144-144M120 256h292"
              ></path>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            <svg
              viewBox="0 0 512 512"
              height="20"
              width="20"
              aria-hidden="true"
              focusable="false"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              color="0f172a"
              class="css-1eamic5 ex0cdmw0"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M268 112l144 144-144 144m124-144H100"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const FormComponent = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 px-8 py-4 m-8 ">
      <h2 className="text-white text-2xl font-bold">
        Tell Us Your Requirement
        <span className="text-white text-sm font-normal ml-4">
          {" "}
          Best Rates | Working Capital | Delivery Anywhere
        </span>
      </h2>

      {/* Radio Button Section */}

      {/* Form Section */}
      <div className="bg-white px-6 py-1 rounded-lg shadow-lg">
        <div className="flex items-center my-4 space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="enquiryType"
              value="BUY"
              defaultChecked
              className="hidden"
            />
            <span className="w-5 h-5 border-2 border-green-500 rounded-full flex items-center justify-center">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </span>
            <span className="text-green-500 font-medium">Buy</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="enquiryType"
              value="SELL"
              className="hidden"
            />
            <span className="w-5 h-5 border-2 border-gray-500 rounded-full flex items-center justify-center">
              <span className="w-3 h-3 bg-gray-500 rounded-full opacity-0"></span>
            </span>
            <span className="text-gray-600 font-medium">Sell</span>
          </label>
        </div>

        <div className="grid grid-cols-6 gap-4">
          <div>
            <label className="block text-gray-600 text-sm mb-2">
              Enter Product
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option>Select Product</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2">Quantity</label>
            <input
              type="text"
              placeholder="Quantity"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2">Company</label>
            <input
              type="text"
              placeholder="Enter company"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2">Pincode</label>
            <input
              type="text"
              placeholder="Enter Pincode"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2">
              Mobile Number
            </label>
            <div className="flex">
              <div className="flex items-center border border-gray-300 rounded-l-lg px-4">
                +91
              </div>
              <input
                type="text"
                placeholder="Enter mobile"
                className="w-full border border-gray-300 rounded-r-lg px-4 py-2"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button className="bg-blue-600 text-white font-semibold px-12 py-2 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomersSays = () => {
  return (
    <div className="bg-[#f7f9fa]">
      <h1 className="text-4xl font-bold pl-8 pt-8 pb-4">Customers Says</h1>

      <TestimonialSlider />

      <div class="bg-gradient-to-r from-blue-900 to-blue-700 p-8 px-15 m-8 rounded-2xl flex justify-between items-center">
        <div class="text-white space-y-6">
          <div class="flex items-center space-x-4">
            <img
              class="w-20 h-20"
              src="https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/ofbLogo.png"
              alt="OFB Logo"
            />
            <div>
              <h3 class="text-3xl font-bold">OFB: B2B Raw Materials Prices</h3>
              <p class="text-lg">Unlock a Whole New World of Raw Materials</p>
            </div>
          </div>
          <div class="space-y-2">
            <p class="flex items-center">
              <span class="text-green-500 text-xl">✅</span> View Live Prices
              and Instant News
            </p>
            <p class="flex items-center">
              <span class="text-green-500 text-xl">✅</span> Get Quotations For
              Your Products
            </p>
            <p class="flex items-center">
              <span class="text-green-500 text-xl">✅</span> Manage All Your
              Orders from One Place
            </p>
          </div>
          <div class="flex space-x-4">
            <a
              href="https://apps.apple.com/us/app/ofbusiness-sme-loan-material/id1527965724"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/AppStoreImage.png"
                class="w-36"
                alt="Download on App Store"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ofbusiness.app.buyer"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/PlayStoreImage.png"
                class="w-36"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
        <div>
          <img
            class="w-60"
            src="https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/mobilePhoto.png"
            alt="Mobile Mockup"
          />
        </div>
      </div>
      <FormComponent />
    </div>
  );
};

export default CustomersSays;
