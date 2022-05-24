import { useEffect, useState } from "react";
import { getGifs } from '../helpers/GetGifs';

export const UseFecthGifs = (category) =>{

    const [state, setState] =  useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category).then(imgs => {

            setTimeout(() =>{ 
                setState({
                    data: imgs,
                    loading: false
                }, 10000);
            });
        });

    }, [category]);

    return state;
};