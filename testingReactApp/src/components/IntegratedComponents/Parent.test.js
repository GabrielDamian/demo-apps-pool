import {render, screen,fireEvent} from '@testing-library/react';
import Parent from '../IntegratedComponents/Parent';

//integrated test refer to how 2 components interact 
//more exact, we test the parent that render 2 childs, one for input and update parent's state, and the other
//one that display the parent's state

//Trick: .toHaveClass('ceva') //verifica atr className;

describe('verify parent',()=>{

    //if you want to run a pice of code before each test (to prepare some logic), use:
    beforeEach(()=>{
        console.log("before each");
    })

    //For running once, before all test:
    beforeAll(()=>{
        console.log("before all once")
    })

    //after
    afterEach(()=>{
        console.log("after each")
    })
    afterAll(()=>{
        console.log("after all once");
    })

    
    it('verify if the input exists', ()=>{
        render(<Parent />);
        const input = screen.getByTestId('child-input');
        expect(input).toBeInTheDocument();
    })
    
    it('verify if the output div exists',()=>{
        render(<Parent />);
        const display = screen.getByTestId('display-container');
        expect(display).toBeInTheDocument();
    })

    it('verify if the output if correct based on input',()=>{
        render(<Parent />);
        const input = screen.getByTestId('child-input');
        const display = screen.getByTestId('display-container');
        const submitBtn = screen.getByTestId('child-btn');
        
        fireEvent.change(input, {target:{value: 'newValue'}});
        fireEvent.click(submitBtn);
        
        expect(display).toHaveTextContent('newValue');
    })
    
    it('input creates 3 element based on an array, and verify their length', ()=>{
        render(<Parent />);
        const input = screen.getByTestId('child-input');
        const submitBtn = screen.getByTestId('child-btn');
        
        const testArr = ['task1','task2','taks3'];
        testArr.forEach((el)=>{
            fireEvent.change(input, {target:{value: `${el}`}});
            fireEvent.click(submitBtn);
        })

        let displayElements = screen.getAllByTestId('child-btn');
        expect(displayElements.length).toBeLessThanOrEqual(testArr.length);
    })


    // //NOT WORKING !!
    // it('input creates 3 element based on an array, and verify exact match', ()=>{
    //     render(<Parent />);
    //     const input = screen.getByTestId('child-input');
    //     const submitBtn = screen.getByTestId('child-btn');
        
    //     const testArr = ['task1','task2','taks3'];
    //     testArr.forEach((el)=>{
    //         fireEvent.change(input, {target:{value: `${el}`}});
    //         fireEvent.click(submitBtn);
    //     })

    //     let displayElements = screen.getAllByTestId('child-btn');
    //     let ok = true; //ramane true daca toate elementele sunt aceleasi pe acelasi index

    //     testArr.forEach((el,index)=>{
    //         console.log("index:", index); 
    //             console.log('FALSE=',el,displayElements[index ])
    //         if(el != displayElements[index])
    //         {
                
    //             ok = false;
    //         }
    //     })
    //     //console.log(displayElements);
    //     ok = true;
    //     expect(ok).toBeTruthy();
    // })
    

})