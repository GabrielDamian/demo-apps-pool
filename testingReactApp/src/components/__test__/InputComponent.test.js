import {render, screen, fireEvent} from '@testing-library/react';
import InputComponent from '../InputComponent';

//if one component requires an function as a parameter in order to function correctly, you can pass it:
// const mockedFunction = jest.fn();

describe("input element test",()=>{

    //veririfaca daca elementul exista in dom
    // it('input component unit test',()=>{
    //     //target the input element 
    //     render(<InputComponent />);
    //     const inputElement = screen.getByPlaceholderText('my input');
    //     expect(inputElement).toBeInTheDocument();
    // });

    // //verifica value change in input
    // it("should be able to type into input", ()=>{
    //     render(<InputComponent />);
    //     const inputElement = screen.getByPlaceholderText('my input');
    //     //change the input value
    //     fireEvent.change(inputElement, {target: {value: 'cevaValoareNoua'}})
    //     expect(inputElement.value).toBe('cevaValoareNoua')
    // })

    //verifidaca daca la click pe buton, valoarea inputului se reseteaza
    // it("should add input value into state",()=>{
    //     render(<InputComponent />)
    //     const inputElement = screen.getByPlaceholderText('my input');
    //     const buttonElement = screen.getByTestId("btn-submit");
        
    //     fireEvent.change(inputElement,{target:{value: 'cevaValoareNoua'}});
    //     fireEvent.click(buttonElement);

    //     //dupa click pe btn, inputul ar trebui sa se goleasca
    //     expect(inputElement.value).toBe('');
    // })

    // //verifidaca daca la click pe buton, valoarea inputului se reseteaza
    // it("should add input value into state",()=>{
    //     render(<InputComponent />)
    //     const inputElement = screen.getByPlaceholderText('my input');
    //     const buttonElement = screen.getByTestId("btn-submit");
    //     const dataMap = screen.getByTestId("state-map");

    //     fireEvent.change(inputElement,{target:{value: 'cevaValoareNoua'}});
    //     fireEvent.click(buttonElement);

    //     //dupa click pe btn, valoare stateului se modifica
    //     expect(dataMap).toHaveTextContent('cevaValoareNoua');
    // })
})
