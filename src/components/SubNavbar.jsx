const SubNavbar = () => {
  return (
    <div className="h-12 bg-blue-900 text-white flex items-center">
      {/* All Categories */}
      <div className="relative group inline-block">
        {/* Dropdown Button */}
        <button className="flex items-center text-white px-6 py-3 rounded-md">
          <span className="bg-gray-200 rounded-full p-2 mr-2">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.67857 2.22857V4.2C5.67857 5.01551 5.01551 5.67857 4.2 5.67857H2.22857C1.41306 5.67857 0.75 5.01551 0.75 4.2V2.22857C0.75 1.41306 1.41306 0.75 2.22857 0.75H4.2C5.01551 0.75 5.67857 1.41306 5.67857 2.22857ZM4.2 7.32143H2.22857C1.41306 7.32143 0.75 7.98449 0.75 8.8V10.7714C0.75 11.5869 1.41306 12.25 2.22857 12.25H4.2C5.01551 12.25 5.67857 11.5869 5.67857 10.7714V8.8C5.67857 7.98449 5.01551 7.32143 4.2 7.32143ZM10.7714 0.75H8.8C7.98449 0.75 7.32143 1.41306 7.32143 2.22857V4.2C7.32143 5.01551 7.98449 5.67857 8.8 5.67857H10.7714C11.5869 5.67857 12.25 5.01551 12.25 4.2V2.22857C12.25 1.41306 11.5869 0.75 10.7714 0.75ZM10.7714 7.32143H8.8C7.98449 7.32143 7.32143 7.98449 7.32143 8.8V10.7714C7.32143 11.5869 7.98449 12.25 8.8 12.25H10.7714C11.5869 12.25 12.25 11.5869 12.25 10.7714V8.8C12.25 7.98449 11.5869 7.32143 10.7714 7.32143Z"
                fill="url(#paint0_linear_5_743)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_5_743"
                  x1="11.5423"
                  y1="-3.52564"
                  x2="0.247798"
                  y2="-1.00727"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#006EFA"></stop>
                  <stop offset="1" stop-color="#07CDBE"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          All Categories
          <svg
            viewBox="0 0 24 24"
            height="28"
            width="28"
            aria-hidden="true"
            focusable="false"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            color="white"
            class="css-1eamic5 ex0cdmw0"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div className="absolute left-0 mt-2 w-78 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={() => handleClick("Option 1")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Mid Steel
          </button>
          <button
            onClick={() => handleClick("Option 2")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Non Ferrous
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Polymers and Packaging
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Chemicals
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Energy and Petroleum
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Stainless Steel & Piles
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Stainless Steel
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Pipes and Tubes
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Infrastructure & Construction
          </button>
        </div>
      </div>

      {/* Mild Steel */}
      <div className=" relative group inline-block">
        <button className="flex items-center text-white px-6 py-3 rounded-md">
          Mild Steel
        </button>

        {/* Dropdown Menu */}
        <div className="absolute left-0 mt-2 w-78 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={() => handleClick("Option 1")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Daily Report & News
          </button>
          <button
            onClick={() => handleClick("Option 2")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Explore Categories
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Flat Products
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Semi-Finished
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Long Products
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Structure
          </button>
        </div>
      </div>

      {/* Non Ferrous */}
      <div className=" relative group inline-block">
        <button className="flex items-center text-white px-6 py-3 rounded-md">
          Non Ferrous
        </button>

        {/* Dropdown Menu */}
        <div className="absolute left-0 mt-2 w-78 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={() => handleClick("Option 1")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Daily Report & News
          </button>
          <button
            onClick={() => handleClick("Option 2")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Explore Categories
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Long Products
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Semi-Finished
          </button>
        </div>
      </div>

      {/* Polymers and Packaging */}
      <div className=" relative group inline-block">
        <button className="flex items-center text-white px-6 py-3 rounded-md">
          Polymers and Packaging
        </button>

        {/* Dropdown Menu */}
        <div className="absolute left-0 mt-2 w-78 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={() => handleClick("Option 1")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Daily Report & News
          </button>
          <button
            onClick={() => handleClick("Option 2")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Explore Categories
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Commodity
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Engineering
          </button>
        </div>
      </div>

      {/* Chemicals */}
      <div className=" relative group inline-block">
        <button className="flex items-center text-white px-6 py-3 rounded-md">
          Chemicals
        </button>

        {/* Dropdown Menu */}
        <div className="absolute left-0 mt-2 w-78 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={() => handleClick("Option 1")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Daily Report & News
          </button>
          <button
            onClick={() => handleClick("Option 2")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Explore Categories
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Solvents
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Alcohols
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Aromatics
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Industrial Chemicals
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Intermediates
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Methanol & Downstream
          </button>
        </div>
      </div>

      {/* Energy and Petroleum */}
      <div className=" relative group inline-block">
        <button className="flex items-center text-white px-6 py-3 rounded-md">
          Energy and Petroleum
        </button>

        {/* Dropdown Menu */}
        <div className="absolute left-0 mt-2 w-78 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={() => handleClick("Option 1")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Daily Report & News
          </button>
          <button
            onClick={() => handleClick("Option 2")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Explore Categories
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Black Oil
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Lubricants
          </button>
        </div>
      </div>

      {/* Stainless Steel */}
      <div className=" relative group inline-block">
        <button className="flex items-center text-white px-6 py-3 rounded-md">
          Stainless Steel
        </button>

        {/* Dropdown Menu */}
        <div className="absolute left-0 mt-2 w-78 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={() => handleClick("Option 1")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Daily Report & News
          </button>
          <button
            onClick={() => handleClick("Option 2")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Explore Categories
          </button>
          <button
            onClick={() => handleClick("Option 3")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Flat Products
          </button>
        </div>
      </div>

      {/* Piles */}
      <div className=" relative group inline-block">
        <button className="flex items-center text-white px-6 py-3 rounded-md">
          Pipes
        </button>

        {/* Dropdown Menu */}
        {/* <div className="absolute left-0 mt-2 w-78 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={() => handleClick("Option 1")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Daily Report & News
          </button>
          <button
            onClick={() => handleClick("Option 2")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Pipe
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SubNavbar;
