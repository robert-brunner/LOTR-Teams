import { getCharacterInfo } from "../managers/ApiManager";
import React, {useEffect,useState} from "react";
import { Table, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";


export const CharacterInfo = () => {
    const [characters, setCharacters] = useState([]);
  
    useEffect(() => {
      getCharacterInfo().then((info) => {
        setCharacters(info.docs);
      });
    }, []);
  
    return (
      <>
        {characters.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Race</th>
                <th>Gender</th>
                <th>Birth</th>
                <th>Spouse</th>
                <th>Death</th>
                <th>Realm</th>
                <th>Hair</th>
              </tr>
            </thead>
            <tbody>
              {characters.map((character) => (
                <tr key={character._id}>
                  <td>{character.name}</td>
                  <td>{character.race}</td>
                  <td>{character.gender}</td>
                  <td>{character.birth || "Not Available"}</td>
                  <td>{character.spouse || "Not Available"}</td>
                  <td>{character.death || "Not Available"}</td>
                  <td>{character.realm || "Not Available"}</td>
                  <td>{character.hair || "Not Available"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>Loading character info...</p>
        )}
      </>
    );
  };
  