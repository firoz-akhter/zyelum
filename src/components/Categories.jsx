import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex flex-col justify-center  bg-[#eaf7f4]">
      <div className="flex justify-around items-center bg-white rounded-xl shadow-md p-8 mx-8 w-auto -mt-16 relative z-10">
        <div className="flex items-center space-x-4">
          <img
            src="https://d86af0gufpxog.cloudfront.net/unsafe/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2Flanding-page-150224%2Frupee.png"
            alt="Rupee"
            className="w-10 h-10"
          />
          <div>
            <span className="text-blue-600 font-bold text-xl">400K+</span>
            <p className="text-gray-500">Raw Materials Prices</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="https://d86af0gufpxog.cloudfront.net/unsafe/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2Flanding-page-150224%2Fhouse.png"
            alt="House"
            className="w-10 h-10"
          />
          <div>
            <span className="text-blue-600 font-bold text-xl">1 Million+</span>
            <p className="text-gray-500">SMEs Empowered</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="https://d86af0gufpxog.cloudfront.net/unsafe/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2Flanding-page-150224%2Ftruck.svg"
            alt="Truck"
            className="w-10 h-10"
          />
          <div>
            <span className="text-blue-600 font-bold text-xl">500K+</span>
            <p className="text-gray-500">Orders Delivered</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="https://d86af0gufpxog.cloudfront.net/unsafe/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2Flanding-page-150224%2Fglobe.svg"
            alt="Globe"
            className="w-10 h-10"
          />
          <div>
            <span className="text-blue-600 font-bold text-xl">30+</span>
            <p className="text-gray-500">Countries Served</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-left w-full px-8 mt-20 mb-4">
          Explore Our Categories
        </h1>
        <p className="text-left w-full px-8 text-xl text-gray-400">
          Tap to access expertise across supply chains. Get Quotations, Prices,
          and Latest News Instantly
        </p>
      </div>

      {/* Cards section */}
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {/* <!-- Card 1 --> */}
        <div className="flex flex-col items-center justify-between border rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%] bg-white">
          <h3 className="font-bold w-full">Steel</h3>
          <img
            src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/120x120/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fmildsteel.png"
            alt="Steel"
            className="my-4"
          />
          <Link
            href="/category/mild-steel"
            className="text-blue-500 flex items-center justify-between  gap-1 w-full"
          >
            View All <span>&rarr;</span>
          </Link>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="flex flex-col items-center justify-between border rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%] bg-white">
          <h3 className="font-bold w-full">Non Ferrous</h3>
          <img
            src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/120x120/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fnonferrous.png"
            alt="Non Ferrous"
            className="my-4"
          />
          <Link
            href="/category/non-ferrous"
            className="text-blue-500 flex items-center justify-between  gap-1 w-full  "
          >
            View All <span>&rarr;</span>
          </Link>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="flex flex-col items-center justify-between border rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%] bg-white">
          <h3 className="font-bold w-full">Polymers</h3>
          <img
            src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/120x120/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fpolymers_packaging.png"
            alt="Polymers"
            className="my-4"
          />
          <Link
            href="/category/polymers-packaging"
            className="text-blue-500 flex items-center justify-between  gap-1 w-full"
          >
            View All <span>&rarr;</span>
          </Link>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="flex flex-col items-center justify-between border rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%] bg-white">
          <h3 className="font-bold w-full">Chemicals</h3>
          <img
            src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/120x120/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fchemicals.png"
            alt="Chemicals"
            className="my-4"
          />
          <Link
            href="/category/chemicals"
            className="text-blue-500 flex items-center justify-between  gap-1 w-full"
          >
            View All <span>&rarr;</span>
          </Link>
        </div>

        {/* <!-- Card 5 --> */}
        <div className="flex flex-col items-center justify-between border rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%] bg-white">
          <h3 className="font-bold w-full">Energy</h3>
          <img
            src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/120x120/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fenergy_petroleum.png"
            alt="Energy"
            className="my-4"
          />
          <Link
            href="/category/energy-petroleum"
            className="text-blue-500 flex items-center justify-between  gap-1 w-full"
          >
            View All <span>&rarr;</span>
          </Link>
        </div>

        {/* <!-- Card 6 --> */}
        <div className="flex flex-col items-center justify-between border rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%] bg-white">
          <h3 className="font-bold w-full">Construction</h3>
          <img
            src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/120x120/filters:format(webp)/https%3A%2F%2Fofbpublic.s3.ap-southeast-1.amazonaws.com%2Fbapp%2Fcategory%2Fbuilding_construction.png"
            alt="Construction"
            className="my-4"
          />
          <Link
            href="/category/building-construction"
            className="text-blue-500 flex items-center justify-between  gap-1 w-full  "
          >
            View All <span>&rarr;</span>
          </Link>
        </div>

        {/* <!-- Card 7 --> */}
        <div className="flex flex-col items-center justify-between border rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%] bg-white">
          <h3 className="font-bold w-full">Agri</h3>
          <img
            src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/120x120/filters:format(webp)/https%3A%2F%2Fd3ambtdunhh5wq.cloudfront.net%2Fbuyer-imgs%2Fcategory-images%2Fcategory-agri.png"
            alt="Agri"
            className="my-4"
          />
          <Link
            href="/category/agri"
            className="text-blue-500 flex items-center justify-between  gap-1 w-full  "
          >
            View All <span>&rarr;</span>
          </Link>
        </div>

        {/* <!-- Card 8 --> */}
        <div className="flex flex-col items-center justify-between border rounded-lg p-4 w-full sm:w-[48%] lg:w-[23%] bg-white">
          <h3 className="font-bold w-full">Fashion</h3>
          <img
            src="https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/120x120/filters:format(webp)/https%3A%2F%2Fd3ambtdunhh5wq.cloudfront.net%2Fbuyer-imgs%2Fcategory-images%2Fcategory-fashion.png"
            alt="Fashion"
            className="my-4"
          />
          <Link
            href="/category/fashion"
            className="text-blue-500 flex items-center justify-between  gap-1 w-full  "
          >
            View All <span>&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Our Services section */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-left w-full px-8 mt-20 mb-4">
          Our Services
        </h1>
        <p className="text-left w-full px-8 text-xl text-gray-400 mb-5">
          Delivering value to our ecosystem of buyers, suppliers and channel
          partners.
        </p>
      </div>

      <div className="flex justify-around items-center bg-white rounded-xl shadow-md p-8 mx-8 w-auto -mb-16 relative z-10">
        <div className="flex justify-start gap-8 py-2 w-full">
          {/* Card 1 */}
          <div className="flex flex-col items-start w-1/5 text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M21.69 20.625H10.9926C9.75493 20.625 9.13608 20.625 8.63919 20.3967C8.20135 20.1956 7.83097 19.8722 7.57262 19.4654C7.27944 19.0039 7.19601 18.3907 7.02915 17.1643L5.71429 7.5H26.2915C26.7062 7.5 26.9136 7.5 27.0594 7.58502C27.1874 7.65961 27.2847 7.77721 27.334 7.91687C27.3903 8.07608 27.3515 8.27976 27.2739 8.68711L25.6193 17.3734C25.3989 18.5308 25.2887 19.1095 24.9903 19.5428C24.7273 19.9248 24.3632 20.2261 23.9387 20.413C23.4573 20.625 22.8682 20.625 21.69 20.625Z"
                fill="#07CDBE"
                fill-opacity="0.1"
              ></path>
              <path
                d="M11.25 27.5C11.9404 27.5 12.5 26.9404 12.5 26.25C12.5 25.5596 11.9404 25 11.25 25C10.5596 25 10 25.5596 10 26.25C10 26.9404 10.5596 27.5 11.25 27.5Z"
                fill="#07CDBE"
                fill-opacity="0.1"
              ></path>
              <path
                d="M21.25 27.5C21.9404 27.5 22.5 26.9404 22.5 26.25C22.5 25.5596 21.9404 25 21.25 25C20.5596 25 20 25.5596 20 26.25C20 26.9404 20.5596 27.5 21.25 27.5Z"
                fill="#07CDBE"
                fill-opacity="0.1"
              ></path>
              <path
                d="M2.5 2.5H4.1327C4.44023 2.5 4.59399 2.5 4.71773 2.55655C4.82677 2.60638 4.91918 2.68653 4.98394 2.78743C5.05742 2.90193 5.07916 3.05415 5.12265 3.35858L5.71429 7.5M5.71429 7.5L7.02915 17.1643C7.19601 18.3907 7.27944 19.0039 7.57262 19.4654C7.83097 19.8722 8.20135 20.1956 8.63919 20.3967C9.13608 20.625 9.75493 20.625 10.9926 20.625H21.69C22.8682 20.625 23.4573 20.625 23.9387 20.413C24.3632 20.2261 24.7273 19.9248 24.9903 19.5428C25.2887 19.1095 25.3989 18.5308 25.6193 17.3734L27.2739 8.68711C27.3515 8.27976 27.3903 8.07608 27.334 7.91687C27.2847 7.77721 27.1874 7.65961 27.0594 7.58502C26.9136 7.5 26.7062 7.5 26.2915 7.5H5.71429ZM12.5 26.25C12.5 26.9404 11.9404 27.5 11.25 27.5C10.5596 27.5 10 26.9404 10 26.25C10 25.5596 10.5596 25 11.25 25C11.9404 25 12.5 25.5596 12.5 26.25ZM22.5 26.25C22.5 26.9404 21.9404 27.5 21.25 27.5C20.5596 27.5 20 26.9404 20 26.25C20 25.5596 20.5596 25 21.25 25C21.9404 25 22.5 25.5596 22.5 26.25Z"
                stroke="url(#paint0_linear_101_549)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_101_549"
                  x1="-3.0246"
                  y1="8.75001"
                  x2="24.4934"
                  y2="20.8735"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#006EFA"></stop>
                  <stop offset="1" stop-color="#07CDBE"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h3 className="text-lg font-semibold mt-4">Buy & Sell With Us</h3>
            <p className="text-gray-600 mt-2">
              One stop solution for your raw material sourcing and selling needs
            </p>
            <a href="#" className="text-blue-500 mt-auto">
              Know More →
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start w-1/5 text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M4.75 12.35C4.75 9.68975 4.75 8.35963 5.26772 7.34355C5.72312 6.44978 6.44978 5.72312 7.34355 5.26772C8.35963 4.75 9.68975 4.75 12.35 4.75H25.65C28.3103 4.75 29.6404 4.75 30.6565 5.26772C31.5502 5.72312 32.2769 6.44978 32.7323 7.34355C33.25 8.35963 33.25 9.68975 33.25 12.35V25.65C33.25 28.3103 33.25 29.6404 32.7323 30.6565C32.2769 31.5502 31.5502 32.2769 30.6565 32.7323C29.6404 33.25 28.3102 33.25 25.65 33.25H12.35C9.68975 33.25 8.35963 33.25 7.34355 32.7323C6.44978 32.2769 5.72312 31.5502 5.26772 30.6565C4.75 29.6404 4.75 28.3102 4.75 25.65V12.35Z"
                fill="#07CDBE"
                fill-opacity="0.1"
              ></path>
              <path
                d="M12.6667 20.5833V26.9167V20.5833Z"
                fill="#07CDBE"
                fill-opacity="0.1"
              ></path>
              <path
                d="M25.3333 17.4167V26.9167V17.4167Z"
                fill="#07CDBE"
                fill-opacity="0.1"
              ></path>
              <path
                d="M19 11.0833V26.9167V11.0833Z"
                fill="#07CDBE"
                fill-opacity="0.1"
              ></path>
              <path
                d="M12.6667 20.5833V26.9167M25.3333 17.4167V26.9167M19 11.0833V26.9167M12.35 33.25H25.65C28.3102 33.25 29.6404 33.25 30.6565 32.7323C31.5502 32.2769 32.2769 31.5502 32.7323 30.6565C33.25 29.6404 33.25 28.3103 33.25 25.65V12.35C33.25 9.68975 33.25 8.35963 32.7323 7.34355C32.2769 6.44978 31.5502 5.72312 30.6565 5.26772C29.6404 4.75 28.3103 4.75 25.65 4.75H12.35C9.68975 4.75 8.35963 4.75 7.34355 5.26772C6.44978 5.72312 5.72312 6.44978 5.26772 7.34355C4.75 8.35963 4.75 9.68975 4.75 12.35V25.65C4.75 28.3102 4.75 29.6404 5.26772 30.6565C5.72312 31.5502 6.44978 32.2769 7.34355 32.7323C8.35963 33.25 9.68975 33.25 12.35 33.25Z"
                stroke="url(#paint0_linear_354_368)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_354_368"
                  x1="-1.58334"
                  y1="11.875"
                  x2="29.9055"
                  y2="25.8256"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#006EFA"></stop>
                  <stop offset="1" stop-color="#07CDBE"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h3 className="text-lg font-semibold mt-4">Raw Materials Prices</h3>
            <p className="text-gray-600 mt-2">
              Get live prices for the raw materials you deal in
            </p>
            <a href="#" className="text-blue-500 mt-auto">
              Know More →
            </a>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start w-1/5 text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 27 32"
              fill="none"
            >
              <path
                d="M14.7934 1.06667L2.08353 16.6353C1.58577 17.245 1.33689 17.5499 1.33309 17.8074C1.32978 18.0312 1.42749 18.2441 1.59806 18.3848C1.79426 18.5467 2.18302 18.5467 2.96054 18.5467H13.3663L11.9393 30.2L24.6492 14.6314C25.1469 14.0216 25.3958 13.7168 25.3996 13.4593C25.4029 13.2355 25.3052 13.0225 25.1346 12.8818C24.9384 12.72 24.5497 12.72 23.7721 12.72H13.3663L14.7934 1.06667Z"
                fill="#07CDBE"
                fill-opacity="0.1"
                stroke="url(#paint0_linear_354_371)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_354_371"
                  x1="-4.01514"
                  y1="8.35001"
                  x2="24.0371"
                  y2="18.6167"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#006EFA"></stop>
                  <stop offset="1" stop-color="#07CDBE"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h3 className="text-lg font-semibold mt-4">Raw Materials News</h3>
            <p className="text-gray-600 mt-2">
              Get daily raw material news & insights live from the ground
            </p>
            <a href="#" className="text-blue-500 mt-auto">
              Know More →
            </a>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-start w-1/5 text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M26.9167 22.1667C26.9167 22.6039 26.5622 22.9583 26.125 22.9583C25.6878 22.9583 25.3333 22.6039 25.3333 22.1667C25.3333 21.7294 25.6878 21.375 26.125 21.375C26.5622 21.375 26.9167 21.7294 26.9167 22.1667Z"
                fill="#07CDBE"
                fill-opacity="0.1"
              ></path>
              <path
                d="M33.25 30.0833V14.25C33.25 12.5011 31.8322 11.0833 30.0833 11.0833L7.91667 11.0833C6.16777 11.0833 4.75 9.66557 4.75 7.91667V30.0833C4.75 31.8322 6.16776 33.25 7.91667 33.25H30.0833C31.8322 33.25 33.25 31.8322 33.25 30.0833Z"
                fill="#07CDBE"
                fill-opacity="0.1"
              ></path>
              <path
                d="M26.125 22.1667H26.1408M4.75 7.91667V30.0833C4.75 31.8322 6.16776 33.25 7.91667 33.25H30.0833C31.8322 33.25 33.25 31.8322 33.25 30.0833V14.25C33.25 12.5011 31.8322 11.0833 30.0833 11.0833L7.91667 11.0833C6.16777 11.0833 4.75 9.66557 4.75 7.91667ZM4.75 7.91667C4.75 6.16776 6.16777 4.75 7.91667 4.75H26.9167M26.9167 22.1667C26.9167 22.6039 26.5622 22.9583 26.125 22.9583C25.6878 22.9583 25.3333 22.6039 25.3333 22.1667C25.3333 21.7294 25.6878 21.375 26.125 21.375C26.5622 21.375 26.9167 21.7294 26.9167 22.1667Z"
                stroke="url(#paint0_linear_354_372)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_354_372"
                  x1="-1.58334"
                  y1="11.875"
                  x2="29.9055"
                  y2="25.8256"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#006EFA"></stop>
                  <stop offset="1" stop-color="#07CDBE"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h3 className="text-lg font-semibold mt-4">Grow With Credit</h3>
            <p className="text-gray-600 mt-2">
              Get access to credit for manufacturers and contractors
            </p>
            <a href="#" className="text-blue-500 mt-auto">
              Know More →
            </a>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col items-start w-1/5 text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M19.0003 28.5C24.247 28.5 28.5003 24.2467 28.5003 19C28.5003 13.7533 24.247 9.5 19.0003 9.5C13.7536 9.5 9.50033 13.7533 9.50033 19C9.50033 24.2467 13.7536 28.5 19.0003 28.5Z"
                fill="#07CDBE"
                fill-opacity="0.1"
              ></path>
              <path
                d="M15.8337 27.9594V31.6667C15.8337 33.4156 17.2514 34.8333 19.0003 34.8333C20.7492 34.8333 22.167 33.4156 22.167 31.6667V27.9594M19.0003 3.16667V4.75001M4.75033 19H3.16699M8.70866 8.70834L7.7585 7.75818M29.292 8.70834L30.2424 7.75818M34.8337 19H33.2503M28.5003 19C28.5003 24.2467 24.247 28.5 19.0003 28.5C13.7536 28.5 9.50033 24.2467 9.50033 19C9.50033 13.7533 13.7536 9.5 19.0003 9.5C24.247 9.5 28.5003 13.7533 28.5003 19Z"
                stroke="url(#paint0_linear_354_373)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_354_373"
                  x1="-3.87005"
                  y1="11.0833"
                  x2="31.1175"
                  y2="26.584"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#006EFA"></stop>
                  <stop offset="1" stop-color="#07CDBE"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h3 className="text-lg font-semibold mt-4">
              Industry Digital First
            </h3>
            <p className="text-gray-600 mt-2">
              Transparency on your orders, live tracking & more with our app and
              web
            </p>
            <a href="#" className="text-blue-500 mt-auto">
              Know More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
