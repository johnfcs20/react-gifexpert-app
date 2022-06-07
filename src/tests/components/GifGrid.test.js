import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid"
import { UseFecthGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas en el <GifGrid />', () => { 

    const category = 'One Punch';
    
    test('Debe mostrarse correctamente', () => { 
        
        UseFecthGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
     })

     test('Debe de mostrar items cuando se cargan imagenes useFetch', () => { 
        
        const gifs = [
            {id: 'ABC', url: 'https://localhost/culquier/cosa.jpg', tittle: 'Cualquier COsa'}
        ]

        UseFecthGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>)

       expect(wrapper.find('p').exists()).toBe(false);
       expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
     })

 })