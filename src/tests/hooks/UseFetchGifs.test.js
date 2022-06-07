import { UseFecthGifs } from "../../hooks/useFetchGifs"
import { renderHook } from "@testing-library/react-hooks"


describe('Pruebas en el hook useFetchGifs', () => { 


    test('Debe retornar el estado inicial', async() => { 
        const { result, waitForNextUpdate } = renderHook(() => UseFecthGifs ('One Punch'));
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('Debe retornar un arreglo de imagenes y el loading en false', async() => { 
        const { result, waitForNextUpdate} = renderHook(() => UseFecthGifs ('One Punch'));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    })

 })