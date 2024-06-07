import { useState, useEffect } from 'react';
import './App.css';
import Rick from "./assets/rick.png";

function App() {
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [origin, setOrigin] = useState("");
  const [location, setLocation] = useState("");
  const [episode, setEpisode] = useState([]);

  const buscarPer = async () => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    const response = await fetch(url);
    const endereco = await response.json();

    setImage(endereco.image);
    setId(endereco.id.toString());
    setName(endereco.name);
    setStatus(endereco.status);
    setSpecies(endereco.species);
    setGender(endereco.gender);
    setOrigin(endereco.origin.name);
    setLocation(endereco.location.name);
    setEpisode(endereco.episode);
  }

  const handleBack = () => {
    if (parseInt(id, 10) > 1) {
      const prevId = (parseInt(id, 10) - 1).toString();
      setId(prevId);
    }
  }

  const handleNext = () => {
    const nextId = (parseInt(id, 10) + 1).toString();
    setId(nextId);
  }

  useEffect(() => {
    if (id) {
      buscarPer();
    }
  }, [id]);

  const event_enter = async (e) => {
    if (e.key === "Enter") {
      await buscarPer();
    }
  }

  return (
    <>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <button type="button" className="btn btn-primary" onClick={handleBack}>Voltar</button>
          </div>
          <div className="col">
            <img src={Rick} alt="" className="main-image" />
            <div className="card">
              <img src={`${image}`} alt="Character" className="character-image" />
              <div className="card-body">
                <div>
                  <form>
                    <label htmlFor="ID">
                      <input type="text"
                        id='ID'
                        placeholder='EX: 1 to 826'
                        onKeyDown={event_enter}
                        onChange={(element) => setId(element.target.value)}
                      />
                    </label>
                  </form>
                  <button className="btn btn-primary" onClick={buscarPer}>Pesquisar</button>
                  <br />
                  <br />
                </div>
                <p className="card-text">Id:
                  <label htmlFor="ID">
                    <input type="text"
                      readOnly
                      value={id}
                      onChange={(e) => setId(e.target.value)}>
                    </input>
                  </label>
                </p>
                <p className="card-text">Nome:
                  <label htmlFor="NOME">
                    <input type="text"
                      readOnly
                      value={name}
                      onChange={(e) => setName(e.target.value)}>
                    </input>
                  </label></p>
                <p className="card-text">Status:
                  <label htmlFor="NOME">
                    <input type="text"
                      readOnly
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}>
                    </input>
                  </label></p>
                <p className="card-text">Espécie:
                  <label htmlFor="NOME">
                    <input type="text"
                      readOnly
                      value={species}
                      onChange={(e) => setSpecies(e.target.value)}>
                    </input>
                  </label></p>
                <p className="card-text">Gênero:
                  <label htmlFor="NOME">
                    <input type="text"
                      readOnly
                      value={gender}
                      onChange={(e) => setGender(e.target.value)} /></label></p>
                <p className="card-text">Origem:
                  <label htmlFor="NOME">
                    <input type="text"
                      readOnly
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)} /></label></p>
                <p className="card-text">Local:
                  <label htmlFor="NOME">
                    <input type="text"
                      readOnly
                      value={location}
                      onChange={(e) => setLocation(e.target.value)} /></label></p>
                <p className="card-text">Episódios:</p>
                <ul className="episode-list">
                  {episode.map((ep, index) => (
                    <li key={index}>{ep}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <button type="button" className="btn btn-primary" onClick={handleNext}>Avançar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
