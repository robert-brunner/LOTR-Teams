import { getCharacterInfo } from "../managers/ApiManager";
import React, {useEffect,useState} from "react";
import { Table, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export const CurrentCharacterItem = () => {
    const [characterInfo, setCharacterInfo] = useState(null);
  
    useEffect(() => {
      getCharacterInfo("5cd99d4bde30eff6ebccfbbe").then((info) => {
        setCharacterInfo(info.docs[0]);
      });
    }, []);
  
    return (
      <>
        {characterInfo ? (
          <>
            <p>Name: {characterInfo.name || "Not Available"}</p>
            <p>Race: {characterInfo.race || "Not Available"}</p>
            <p>Gender: {characterInfo.gender || "Not Available"}</p>
            <p>Birth: {characterInfo.birth || "Not Available"}</p>
            <p>Spouse: {characterInfo.spouse || "Not Available"}</p>
            <p>Death: {characterInfo.death || "Not Available"}</p>
            <p>Realm: {characterInfo.realm || "Not Available"}</p>
            <p>Hair: {characterInfo.hair || "Not Available"}</p>
            <p>Wiki URL: <a href={characterInfo.wikiUrl} target="_blank">{characterInfo.wikiUrl}</a></p>
          </>
        ) : (
          <p>Loading character info...</p>
        )}
      </>
    );
  };
  

