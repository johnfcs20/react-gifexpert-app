
import React from "react";
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory";

describe('Prubeas <addCategory />', () => { 
    
    const  setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    test('Debe de mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
     })

     test('Debe de cambiar la caja de texto', () => { 
         const  input = wrapper.find('input');
         const value =  'Hola  Mundo';
         input.simulate('change', {target: {value: value}});
      })

      test('No debe de postear la informacion OnSubmit', () => { 
        wrapper.find('form').simulate('submuit', {});
        expect(setCategories).not.toHaveBeenCalled();
     })

     test('Debe de llamar al SetCategory y llenar la caja de texto', () => { 
        const value =  'Hola  Mundo';
        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
      })

 })