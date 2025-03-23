const Card = ({ card }) => {
  return (
    <div className="bg-gray-100/20 transform transition-transform duration-300 hover:scale-110 rounded-2xl p-6 w-60 text-white shadow-lg">
      <div className="bg-white rounded-full p-3 inline-block mb-4">
        {card.icon}
      </div>

      <h3 className="text-xl text-white font-bold mb-2">{card.title}</h3>

      <p className="text-sm text-white">{card.description}</p>
    </div>
  );
};

export default Card;
