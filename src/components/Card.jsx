function Card({ shows, airdate, img }) {
  const defaultImg = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp";

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="w-full h-64 overflow-hidden">
        <img
          src={img ? img : defaultImg}
          alt={shows || "Anime"}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{shows}</h2>
        <p>{airdate}</p>
      </div>
    </div>
  );
}
export default Card;
