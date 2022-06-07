import React from "react"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem />', () => { 

    const tittle = 'un titulo';
    const url = 'https://localhost/algo.jpg'    
    const wrapper = shallow(<GifGridItem title={tittle} url={url} />)


    test('Debe de mostrar el texto correctamente', () => {         
        expect(wrapper).toMatchSnapshot();
     })

     test('Debe de mtener un parrafo con el tittle', () => { 
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(tittle);
     })

     test('Debe de tener una imagen igual a la de la URL y ALT igual a los Props.', () => { 
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(tittle);
     }) 

     test('Debe de tener animate__animated', () => { 
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__animated')).toBe(true);
     })

 })