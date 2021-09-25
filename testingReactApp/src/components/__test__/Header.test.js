import {render, screen} from '@testing-library/react';
import Header from '../header/Header';


//GET BY TEXT
//Test text param to be in the document.
// test('my header test', ()=>{
//     render(<Header title='cevaTest'/>);
//     const myHeader = screen.getByText(/cevaTest/i);
//     expect(myHeader).toBeInTheDocument();
// });

//CAUTA DUPA UN SINGUR HTML TAG (MORE FAILS)
// test('my header test', ()=>{
//     render(<Header title='cevaTest'/>);
//     //verify the correct html tag name /role;

//     //cauta doar dupa html attribute (daca sunt mai multe headings, test fails);
//     //const myHeader = screen.getByRole('heading');

//     //selecteaza dupa html atribute, dar si mai specific dupa name (textul pe care il contine);
//     const myHeader = screen.getByRole('heading',{name: 'cevaTest'});
//     expect(myHeader).toBeInTheDocument();
// });

//SELECT BY ATRIBUTE VALUE IN HTML TAG (TITLE)
// test('my header test', ()=>{
//     render(<Header title='cevaTest'/>);
//     //selecteaza dupa valoarea atributului html title ()
//     const myHeader = screen.getByTitle('customTitle');
//     expect(myHeader).toBeInTheDocument();
// });

//GET BY JEST TEST ID
// test('my header test', ()=>{
//     render(<Header title='cevaTest'/>);
//     //selecteaza dupa valoarea atributului specific react teting: data-testid="customID" 
//     const myHeader = screen.getByTestId('customID');
//     expect(myHeader).toBeInTheDocument();
// });


//FIND BY (similar cu getBy, but async)
// test('my header test', async ()=>{
//     render(<Header title='cevaTest'/>);
//     //selecteaza dupa valoarea atributului specific react teting: data-testid="customID" 
//     const myHeader = await screen.findByText('cevaTest');
//     expect(myHeader).toBeInTheDocument();
// });

//QUERY BY (return null daca nu se gaseste si error daca sunt mai mult de 1+)
// test('my header test',()=>{
//     render(<Header title='cevaTest'/>);
//     const myHeader =  screen.queryByText(/cevaTest1/i);

//     //negarea lui expect
//     //testul ar fi fost failed
//     expect(myHeader).not.toBeInTheDocument();
// });


//retun arrays (getAll...)
// test('my header test',()=>{
//     render(<Header title='cevaTest'/>);
//     const myHeader =  screen.getAllByRole('heading');

//     //cauta ca in document sa existe 2 heading-uri
//     expect(myHeader.length).toBe(2);
// });