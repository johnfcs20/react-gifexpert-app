describe('Pruebas con getGifs Fetcht', () => { 

    test('Debe de traer almenos 10  elementos', async() => { 
        const gifs = await getGifs('One Punch');

        expect(gifs.legth).tobe(10);
     });

     test('Debe de traer 0 elementos', async() => { 
        const gifs = await getGifs('');

        expect(gifs.legth).tobe(0);
     })

 })