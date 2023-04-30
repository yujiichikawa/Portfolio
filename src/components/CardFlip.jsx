import "../styles/components/CardFlip.sass";

const CardFlip = () => {
  function irUrlRest(){
    window.location.href = "https://restauranteyujiportfolio.netlify.app/";
  }
  return (
    <div className="cards-grid">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div
            className="flip-card-front card1"
          ></div>
          <div className="flip-card-back" onClick={irUrlRest}>
            Site desenvolvido com React e Tailwind
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
