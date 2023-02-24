import { getApiInfo } from "../managers/ApiManager";
import React, { useEffect, useState } from "react";
import { Table, Card, CardBody, CardTitle, CardSubtitle, List } from "reactstrap";

export const InfoList = () => {

    const [info, setInfo] = useState([]);

    const getLists = () => {
        getApiInfo()
            .then(allInfo => {
                console.log(allInfo.docs)
                setInfo(allInfo.docs)
            })
            .catch(err => console.error(err)); //use fetch call in API manager to to get all api info
    };


    useEffect(() => {
        getLists();
    }, []);

    const Table = ({ item }) => {
        return (
            <li key={item._id}>
                <Card>
                    <CardBody>
                        <CardTitle>{item.name} the {item.race}</CardTitle>
                        <CardSubtitle>Born: {item.birth}</CardSubtitle>
                        {item.wikiUrl}
                    </CardBody>
                </Card>
            </li>
        );
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    <List type="unstyled">
                        {info.map((item) =>
                            <Table key={item._id} item={item} />
                        )}
                    </List>
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