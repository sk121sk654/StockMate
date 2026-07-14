import "./HeroSearch.css";

function HeroSearch() {
  return (
    <div className="hero-search">
      <div className="hero-top ">
        <h1>Support Portal</h1>
        <button className="ticket-btn">My tickets</button>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />
      </div>
    </div>
  );
}

export default HeroSearch;
