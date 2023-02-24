import {getApiInfo} from "../managers/ApiManager";
import React, { useEffect, useState } from "react";
import { Table, Card, CardBody, CardTitle, CardSubtitle, List } from "reactstrap";

export const InfoList = () =>{

    const [info, setInfo] = useState([]);

    const getLists = () =>{
        getApiInfo().then(allInfo => setInfo(allInfo)); //use fetch call in API manager to to get all api info
    };


    useEffect(()=>{
        getLists();
    },[]);

    const Table = ({ list }) => {
      return (
        <Card>
          <CardBody>
            <CardTitle>{list.title}</CardTitle>
            <CardSubtitle>{list.subtitle}</CardSubtitle>
            <List type="unstyled">
              {list.items.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </List>
          </CardBody>
        </Card>
      );
    };

    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="cards-column">
              {info.map((list) => (
                <Table key={list.id} list={list} />
              ))}
            </div>
          </div>
        </div>
    );
};















    // //i think i screwed up-  this is a form xD-  Lets make a list of all people
    // const [apiData, setApiData] = useState({

    //     birth: "",
    //     death: "",
    //     gender: "",
    //     hair: "",
    //     height: "",
    //     name: "",
    //     race: "",
    //     realm: "",
    //     spouse: "",
    //     wikiUrl: "",
    //     _id: ""
    // });