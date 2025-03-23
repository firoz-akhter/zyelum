import { useState } from "react";
import Card from "./Card";

const ChooseUs = () => {
  const [type, setType] = useState("Buyer");

  const BuyerCards = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
        >
          <path
            fill="url(#a)"
            d="M9.538 28.744a2.25 2.25 0 0 1-1.652-.681 2.25 2.25 0 0 1-.68-1.653c0-.648.226-1.198.68-1.652a2.25 2.25 0 0 1 1.652-.681 2.25 2.25 0 0 1 1.653.68 2.25 2.25 0 0 1 .68 1.653 2.25 2.25 0 0 1-.68 1.653 2.25 2.25 0 0 1-1.653.68Zm12.924 0a2.25 2.25 0 0 1-1.653-.681 2.25 2.25 0 0 1-.68-1.653c0-.648.226-1.198.68-1.652a2.25 2.25 0 0 1 1.652-.681 2.25 2.25 0 0 1 1.653.68 2.25 2.25 0 0 1 .68 1.653 2.25 2.25 0 0 1-.68 1.653 2.25 2.25 0 0 1-1.652.68ZM8.02 7.666l3.38 7.077h9.09a.37.37 0 0 0 .205-.058.503.503 0 0 0 .154-.16l3.577-6.5c.05-.094.055-.178.012-.25-.042-.073-.115-.11-.217-.11H8.02Zm-.958-2h18.512c.546 0 .958.232 1.237.696.28.464.293.938.04 1.422l-4.272 7.738a2.41 2.41 0 0 1-.867.899c-.36.214-.755.322-1.184.322H10.8l-1.544 2.82c-.068.103-.07.214-.006.333.064.12.16.18.288.18h15.257v2H9.538c-.888 0-1.556-.384-2.003-1.15-.447-.767-.463-1.532-.048-2.296l1.903-3.42L4.538 5H2V3h3.795L7.06 5.667Z"
          ></path>
          <defs>
            <linearGradient
              id="a"
              x1="27.032"
              x2="2.824"
              y1="3"
              y2="7.465"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#006EFA"></stop>
              <stop offset="1" stop-color="#07CDBE"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Get Lowest Price",
      description: "Get rates at least 70% lower than market rates",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
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
      ),
      title: "Get Credit",
      description: "Do not worry about working capital. Grow with our credit",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
        >
          <path
            fill="url(#a)"
            d="M7.792 26.077c-1.04 0-1.924-.364-2.65-1.092-.727-.728-1.09-1.612-1.09-2.652H1.794V8.41c0-.673.233-1.243.7-1.71a2.327 2.327 0 0 1 1.71-.7H22.36v5.077h3.538l4.308 5.77v5.486h-2.41c0 1.04-.364 1.924-1.093 2.652-.728.728-1.613 1.092-2.654 1.092-1.04 0-1.924-.364-2.65-1.092-.727-.728-1.09-1.612-1.09-2.652h-8.77c0 1.043-.364 1.928-1.092 2.654-.729.727-1.613 1.09-2.654 1.09Zm.003-2c.489 0 .902-.168 1.238-.505.337-.337.505-.75.505-1.239 0-.489-.168-.901-.505-1.238a1.684 1.684 0 0 0-1.238-.505c-.489 0-.902.168-1.239.505-.336.337-.505.75-.505 1.238 0 .49.169.902.505 1.239.337.337.75.505 1.239.505Zm-4-3.744h.964c.284-.494.694-.908 1.23-1.242a3.344 3.344 0 0 1 1.806-.501c.651 0 1.249.165 1.793.495.545.33.959.746 1.243 1.248h9.528V8H4.205a.392.392 0 0 0-.282.128.392.392 0 0 0-.128.282v11.923Zm20.256 3.744c.49 0 .902-.168 1.239-.505.337-.337.505-.75.505-1.239 0-.489-.169-.901-.505-1.238a1.684 1.684 0 0 0-1.239-.505c-.489 0-.901.168-1.238.505-.337.337-.505.75-.505 1.238 0 .49.168.902.505 1.239.337.337.75.505 1.238.505Zm-1.692-6.41h5.974l-3.461-4.59h-2.513v4.59Z"
          ></path>
          <defs>
            <linearGradient
              id="a"
              x1="30.205"
              x2="3.705"
              y1="6"
              y2="13.114"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#006EFA"></stop>
              <stop offset="1" stop-color="#07CDBE"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Pan Indian & Global",
      description:
        "World-class fulfillment for domestic and international markets",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
        >
          <path
            fill="url(#a)"
            d="m11.8 23.767 4.2-2.534 4.2 2.567-1.1-4.8 3.7-3.2-4.867-.433L16 10.833l-1.933 4.5-4.867.434L12.9 19l-1.1 4.767Zm-3.033 4.182 1.91-8.226-6.382-5.53 8.42-.731L16 5.705l3.285 7.757 8.42.73-6.382 5.531 1.91 8.226L16 23.585l-7.233 4.364Z"
          ></path>
          <defs>
            <linearGradient
              id="a"
              x1="27.705"
              x2="5.192"
              y1="5.705"
              y2="10.2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#006EFA"></stop>
              <stop offset="1" stop-color="#07CDBE"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Multi Brand SKUs",
      description: "One stop shop for 3L+ SKUs from multiple brands",
    },
  ];

  const SupplierCards = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
        >
          <path
            fill="url(#a)"
            d="M9.538 28.744a2.25 2.25 0 0 1-1.652-.681 2.25 2.25 0 0 1-.68-1.653c0-.648.226-1.198.68-1.652a2.25 2.25 0 0 1 1.652-.681 2.25 2.25 0 0 1 1.653.68 2.25 2.25 0 0 1 .68 1.653 2.25 2.25 0 0 1-.68 1.653 2.25 2.25 0 0 1-1.653.68Zm12.924 0a2.25 2.25 0 0 1-1.653-.681 2.25 2.25 0 0 1-.68-1.653c0-.648.226-1.198.68-1.652a2.25 2.25 0 0 1 1.652-.681 2.25 2.25 0 0 1 1.653.68 2.25 2.25 0 0 1 .68 1.653 2.25 2.25 0 0 1-.68 1.653 2.25 2.25 0 0 1-1.652.68ZM8.02 7.666l3.38 7.077h9.09a.37.37 0 0 0 .205-.058.503.503 0 0 0 .154-.16l3.577-6.5c.05-.094.055-.178.012-.25-.042-.073-.115-.11-.217-.11H8.02Zm-.958-2h18.512c.546 0 .958.232 1.237.696.28.464.293.938.04 1.422l-4.272 7.738a2.41 2.41 0 0 1-.867.899c-.36.214-.755.322-1.184.322H10.8l-1.544 2.82c-.068.103-.07.214-.006.333.064.12.16.18.288.18h15.257v2H9.538c-.888 0-1.556-.384-2.003-1.15-.447-.767-.463-1.532-.048-2.296l1.903-3.42L4.538 5H2V3h3.795L7.06 5.667Z"
          ></path>
          <defs>
            <linearGradient
              id="a"
              x1="27.032"
              x2="2.824"
              y1="3"
              y2="7.465"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#006EFA"></stop>
              <stop offset="1" stop-color="#07CDBE"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Grow Your Business",
      description: "Get access to a global buyer base and grow 3x and more",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
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
      ),
      title: "Advance Payments",
      description:
        "Get your payments upfront and let us worry about the credit",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
        >
          <path
            fill="url(#a)"
            d="M7.792 26.077c-1.04 0-1.924-.364-2.65-1.092-.727-.728-1.09-1.612-1.09-2.652H1.794V8.41c0-.673.233-1.243.7-1.71a2.327 2.327 0 0 1 1.71-.7H22.36v5.077h3.538l4.308 5.77v5.486h-2.41c0 1.04-.364 1.924-1.093 2.652-.728.728-1.613 1.092-2.654 1.092-1.04 0-1.924-.364-2.65-1.092-.727-.728-1.09-1.612-1.09-2.652h-8.77c0 1.043-.364 1.928-1.092 2.654-.729.727-1.613 1.09-2.654 1.09Zm.003-2c.489 0 .902-.168 1.238-.505.337-.337.505-.75.505-1.239 0-.489-.168-.901-.505-1.238a1.684 1.684 0 0 0-1.238-.505c-.489 0-.902.168-1.239.505-.336.337-.505.75-.505 1.238 0 .49.169.902.505 1.239.337.337.75.505 1.239.505Zm-4-3.744h.964c.284-.494.694-.908 1.23-1.242a3.344 3.344 0 0 1 1.806-.501c.651 0 1.249.165 1.793.495.545.33.959.746 1.243 1.248h9.528V8H4.205a.392.392 0 0 0-.282.128.392.392 0 0 0-.128.282v11.923Zm20.256 3.744c.49 0 .902-.168 1.239-.505.337-.337.505-.75.505-1.239 0-.489-.169-.901-.505-1.238a1.684 1.684 0 0 0-1.239-.505c-.489 0-.901.168-1.238.505-.337.337-.505.75-.505 1.238 0 .49.168.902.505 1.239.337.337.75.505 1.238.505Zm-1.692-6.41h5.974l-3.461-4.59h-2.513v4.59Z"
          ></path>
          <defs>
            <linearGradient
              id="a"
              x1="30.205"
              x2="3.705"
              y1="6"
              y2="13.114"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#006EFA"></stop>
              <stop offset="1" stop-color="#07CDBE"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "High Order Volumes",
      description: "Get bigger order volumes from our large global buyer base",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
        >
          <path
            fill="url(#a)"
            d="m11.8 23.767 4.2-2.534 4.2 2.567-1.1-4.8 3.7-3.2-4.867-.433L16 10.833l-1.933 4.5-4.867.434L12.9 19l-1.1 4.767Zm-3.033 4.182 1.91-8.226-6.382-5.53 8.42-.731L16 5.705l3.285 7.757 8.42.73-6.382 5.531 1.91 8.226L16 23.585l-7.233 4.364Z"
          ></path>
          <defs>
            <linearGradient
              id="a"
              x1="27.705"
              x2="5.192"
              y1="5.705"
              y2="10.2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#006EFA"></stop>
              <stop offset="1" stop-color="#07CDBE"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Fulfillment Services",
      description: "End-to-end managed logistics while you focus on business",
    },
  ];

  return (
    <div className="bg-gradient-to-t from-sky-500 to-indigo-500 pt-40 pl-10 pb-20">
      <h1 className="text-4xl font-bold text-white">Why {type} Choose Us</h1>
      <p className="text-white mt-2">
        We are a team of experienced professionals who are dedicated to
        providing the best possible service to our clients.
      </p>
      <div className="mt-5">
        <div className="relative flex bg-[#0D1224] rounded-full p-1 w-[180px]">
          <div
            className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-300 ${
              type === "Supplier" ? "translate-x-full" : ""
            }`}
          ></div>

          <button
            className={`relative z-10 w-1/2 text-center py-2 text-sm font-medium ${
              type === "Buyer" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setType("Buyer")}
          >
            Buyer
          </button>

          <button
            className={`relative z-10 w-1/2 text-center py-2 text-sm font-medium ${
              type === "Supplier" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setType("Supplier")}
          >
            Supplier
          </button>
        </div>
      </div>

      {type === "Buyer" ? (
        <div className="mt-5 flex flex-wrap gap-6">
          {BuyerCards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      ) : (
        <div className="mt-5 flex flex-wrap gap-6">
          {SupplierCards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      )}

      <h2 className="text-white text-2xl font-bold mt-10">
        1 Million+ SMEs & Corporates Served
      </h2>
    </div>
  );
};

export default ChooseUs;
