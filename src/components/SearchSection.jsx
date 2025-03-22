const SearchSection = () => {
  return (
    <div>
      <div className="flex flex-col items-start h-[600px] w-full bg-[url('https://d86af0gufpxog.cloudfront.net/unsafe/adaptive-fit-in/1200x600/filters:format(webp)/https%3A%2F%2Fd5nfy7n2jvqm2.cloudfront.net%2Fbuyerfe%2FlandingImage.png')] bg-cover bg-center bg-fixed">
        {/* Your content here */}
        <h1 className="text-white text-7xl w-[60%] font-bold text-left pt-24 mx-10">
          India's Largest B2B Raw Materials Procurement & Credit Platform
        </h1>
        <div className="flex items-center bg-white rounded-4xl p-1 w-[60%] mx-10 mt-10 pl-6">
          {/* search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="flex-shrink-0 mr-2"
          >
            <path
              d="M15.8 14.8L11.6 10.6C12.6 9.4 13.1 8 13.1 6.5C13.1 2.9 10.2 0 6.6 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8 13 9.4 12.5 10.6 11.5L14.8 15.7C14.9 15.8 15.1 15.9 15.3 15.9C15.5 15.9 15.7 15.8 15.8 15.7C15.9 15.6 16 15.4 16 15.2C16 15.1 15.9 14.9 15.8 14.8ZM6.5 11.6C3.7 11.6 1.4 9.3 1.4 6.5C1.4 3.7 3.7 1.4 6.5 1.4C9.3 1.4 11.6 3.7 11.6 6.5C11.6 9.4 9.4 11.6 6.5 11.6Z"
              fill="#000"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search for products"
            className="flex-grow outline-none px-2"
          />
          <button className="cursor-pointer flex-shrink-0 bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xl px-8 py-4 rounded-4xl font-bold">
            Search
          </button>
        </div>

        <div className="flex items-center rounded-4xl p-1 w-[60%] mx-0 ml-10 mt-5">
          <div className="flex space-x-2 w-full overflow-x-auto py-2">
            <button class="py-2 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-4xl border hover:bg-black/20 hover:bg-opacity-20 cursor-pointer">
              Aluminium Ingots
            </button>
            <button class="py-2 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-4xl border hover:bg-black/20 hover:bg-opacity-20 cursor-pointer">
              Bitumen
            </button>
            <button class="py-2 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-4xl border hover:bg-black/20 hover:bg-opacity-20 cursor-pointer">
              Methanol
            </button>
            <button class="py-2 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-4xl border hover:bg-black/20 hover:bg-opacity-20 cursor-pointer">
              PVC
            </button>
            <button class="py-2 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-4xl border hover:bg-black/20 hover:bg-opacity-20 cursor-pointer">
              Secondary TMT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
