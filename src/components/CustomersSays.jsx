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
    <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-xl p-4 md:p-6 shadow-lg mx-4 md:mx-8 border border-gray-200">
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <img
          src={testimonials[currentIndex].imgSrc}
          alt={testimonials[currentIndex].name}
          className="h-48 md:h-96 rounded-lg"
        />
      </div>
      <div className="md:ml-8 text-center md:text-left">
        <p className="text-lg md:text-xl italic mb-4 text-gray-400">
          "{testimonials[currentIndex].text}"
        </p>
        <p className="font-semibold text-blue-600">
          {testimonials[currentIndex].name}
        </p>
        <div className="flex justify-center md:justify-start gap-4 mt-4">
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
              className="css-1eamic5 ex0cdmw0"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
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
              className="css-1eamic5 ex0cdmw0"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
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
  const [formData, setFormData] = useState({
    enquiryType: "BUY",
    product: "AAC Blocks",
    quantity: "",
    company: "",
    pincode: "",
    email: "",
    mobile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      enquiryType: e.target.value,
    }));
  };

  const handleSelectChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      product: e.target.value,
    }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (
        !formData.quantity ||
        !formData.company ||
        !formData.pincode ||
        !formData.email ||
        !formData.mobile
      ) {
        throw new Error("Please fill all required fields");
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      if (!/^\d{10}$/.test(formData.mobile)) {
        throw new Error("Please enter a valid 10-digit mobile number");
      }

      const response = await fetch("https://api.example.com/submit-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus({
        success: true,
        message: "Form submitted successfully!",
      });

      setFormData({
        enquiryType: "BUY",
        product: "AAC Blocks",
        quantity: "",
        company: "",
        pincode: "",
        email: "",
        mobile: "",
      });
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 px-4 md:px-8 py-4 m-4 md:m-8">
      <h2 className="text-white text-xl md:text-2xl font-bold flex flex-col md:flex-row md:items-center">
        Tell Us Your Requirement
        <span className="text-white text-sm font-normal mt-2 md:mt-0 md:ml-4">
          Best Rates | Working Capital | Delivery Anywhere
        </span>
      </h2>

      <form
        onSubmit={formSubmitHandler}
        className="bg-white px-4 md:px-6 py-4 rounded-lg shadow-lg mt-4"
      >
        <div className="flex items-center my-4 space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="enquiryType"
              value="BUY"
              checked={formData.enquiryType === "BUY"}
              onChange={handleRadioChange}
              className="hidden"
            />
            <span className="w-5 h-5 border-2 border-green-500 rounded-full flex items-center justify-center">
              <span
                className={`w-3 h-3 bg-green-500 rounded-full ${
                  formData.enquiryType === "BUY" ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </span>
            <span className="text-green-500 font-medium">Buy</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="enquiryType"
              value="SELL"
              checked={formData.enquiryType === "SELL"}
              onChange={handleRadioChange}
              className="hidden"
            />
            <span className="w-5 h-5 border-2 border-gray-500 rounded-full flex items-center justify-center">
              <span
                className={`w-3 h-3 bg-gray-500 rounded-full ${
                  formData.enquiryType === "SELL" ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </span>
            <span className="text-gray-600 font-medium">Sell</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <label className="block text-gray-600 text-sm mb-2">
              Enter Product
            </label>
            <select
              name="product"
              value={formData.product}
              onChange={handleSelectChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option>AAC Blocks</option>
              <option>ABS</option>
              <option>Acitic acid</option>
              <option>Acetone</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <label className="block text-gray-600 text-sm mb-2">Quantity</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="Quantity"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <label className="block text-gray-600 text-sm mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Enter company"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <label className="block text-gray-600 text-sm mb-2">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              placeholder="Enter Pincode"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <label className="block text-gray-600 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <label className="block text-gray-600 text-sm mb-2">
              Mobile Number
            </label>
            <div className="flex">
              <div className="flex items-center border border-gray-300 rounded-l-lg px-4 bg-gray-50">
                +91
              </div>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter mobile"
                className="w-full border border-gray-300 rounded-r-lg px-4 py-2"
              />
            </div>
          </div>
        </div>

        {submitStatus && (
          <div
            className={`mt-4 p-2 rounded ${
              submitStatus.success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <div className="mt-6 flex justify-center md:justify-start">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-600 text-white font-semibold px-8 md:px-12 py-2 rounded-lg w-full md:w-auto ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

const CustomersSays = () => {
  return (
    <div className="bg-[#f7f9fa]">
      <h1 className="text-4xl font-bold pl-8 pt-8 pb-4">
        What Our Customers Says
      </h1>

      <TestimonialSlider />

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 md:p-8 m-4 md:m-8 rounded-2xl flex flex-col md:flex-row justify-between items-center">
        <div className="text-white space-y-4 md:space-y-6 mb-6 md:mb-0">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 text-center md:text-left">
            <img
              className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-0"
              src="https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/ofbLogo.png"
              alt="OFB Logo"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                OFB: B2B Raw Materials Prices
              </h3>
              <p className="text-base md:text-lg">
                Unlock a Whole New World of Raw Materials
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="flex items-center justify-center md:justify-start">
              <span className="text-green-500 text-xl">✅</span>
              <span className="ml-2">View Live Prices and Instant News</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <span className="text-green-500 text-xl">✅</span>
              <span className="ml-2">Get Quotations For Your Products</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <span className="text-green-500 text-xl">✅</span>
              <span className="ml-2">
                Manage All Your Orders from One Place
              </span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="https://apps.apple.com/us/app/ofbusiness-sme-loan-material/id1527965724"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://d5nfy7n2jvqm2.cloudfront.net/buyerfe/landing-page-150224/AppStoreImage.png"
                className="w-36"
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
                className="w-36"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            className="w-48 md:w-60"
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
