import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

function Digimon(props) {
    return (
        <Card elevation={2} style={ {display: 'inline-block', margin: 'auto', width: '20%'} } >
            <CardContent>
                <CardMedia component={'img'} src={props.img} alt={`Imagem do Digimon ${props.name}`} />
                <Typography gutterBottom variant="h5">{props.name}</Typography>
                <Typography variant="body2" color="textSecondary">Level: {props.level}</Typography>
            </CardContent>
        </Card>
    );
};

export function HomePage() {

    const [data, setData] = useState([]);
    console.log("Data antes do useEffect: ", data);


    useEffect(function() {
        fetch('https://digimon-api.herokuapp.com/api/digimon')
        .then(function(response){
          return response.json();
        })
        .then(function(response) {
          console.log("Resultado da requisição: ", response);
          setData(response);
        })
        .catch(function(error){
          console.error(error);
        });
      },[]);

    if (data.length > 0) {
        return (
            /*<Digimon
                id={data[0].id}
                name={data[0].name}
                img={data[0].img}
                level={data[0].level}
            />*/
            <div>
                {data.map(function(digimon) {
                    return <Digimon key={digimon.name} {...digimon} />
                })}
            </div>
        );
    } else {
        return <p>Carregando...</p>
    }
};