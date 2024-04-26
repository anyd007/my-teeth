import "../styles/welcome-screen.scss";
import toothIcon from "../assets/tooth-icon.png";
import { useState, useEffect } from "react";

const WelcomeScreen: React.FC = () => {
  const storedUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users') || '') : null
  const [currentName, setCurrentName] = useState<string>("")
  const [users, setUsers] = useState<{id: number, name: string}[]>(storedUsers || [])
  const [isReady, setIsReady] = useState<boolean>(true);


  useEffect(() => {
    // Zapisz dane użytkowników do localStorage po zmianie tablicy użytkowników
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    if (users.find(user => user.name === currentName.trim())) {
      alert("Użytkownik o takiej nazwie już istnieje");
      return;
    }
    if(currentName.trim() !== ""){
      const newUser = {id: Date.now(), name: currentName.trim()}
      setUsers([...users, newUser])
      setCurrentName("")
      setIsReady(false)
    }
   
  }

  const handleNewUser = () => {
    setIsReady(true);
    
  }
  const handleEnter = () => {
    console.log('Entering');
  }
 
  return (
    <div className="welcome-screen">
      <h1>Mój ząbek</h1>
      <img src={toothIcon} alt="" />
      {isReady ?
      <form className="name-form" onSubmit={handleSubmit}>
        <button onClick={handleEnter}>weijdź</button>
        <label htmlFor="name-input">Pierszy raz u nas?😊<br/>Jak masz na imię?</label>
        <input 
        className="name-input" 
        id="name-input" 
        placeholder="podaj swoje imię..." 
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        type="text" />
        <button>dodaj</button>
      </form>
      :
      <div className="start-to-play">
        <button onClick={handleEnter}>zaczunamy!</button>
        <p>lub</p>
        <button onClick={handleNewUser}>dodaj kolejnego uczestnika</button>
      </div>
      
      }
    </div>
  );
};

export default WelcomeScreen;
