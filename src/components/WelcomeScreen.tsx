import "../styles/welcome-screen.scss";
import toothIcon from "../assets/tooth-icon.png";

const WelcomeScreen: React.FC = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
  }
  return (
    <div className="welcome-screen">
      <h1>Mój ząbek</h1>
      <img src={toothIcon} alt="" />
      <form className="name-form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Jak masz na imię?</label>
        <input className="name-input" id="name-input" placeholder="podaj swoje imię..." type="text" />
        <button>dodaj</button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
