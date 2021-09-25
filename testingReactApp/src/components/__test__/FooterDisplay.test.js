import {render, screen} from '@testing-library/react';
import FooterDisplay from '../FooterDisplay';


//toBeInTheDocument veridica sa fie in dom, chiar cu display: none sau opacity: 0;
// it('should render just one task', ()=>{
//     render(<FooterDisplay data={1}/>)
//     const paragraphElement = screen.getByText('just one');
//     expect(paragraphElement).toBeInTheDocument();
// });

// it('should render the correct ammpunt of tasks', ()=>{
//     render(<FooterDisplay data={2}/>)
//     const paragraphElement = screen.getByText(`data ${2}`);
//     expect(paragraphElement).toBeInTheDocument();
// });

// it('should render at least something (a true value, or truthy)', ()=>{
//     render(<FooterDisplay data={2}/>)
//     const paragraphElement = screen.getByText(`data ${2}`);
//     expect(paragraphElement).toBeTruthy();
// });


// //pentru data== 99, DisplayFooter devine cu opacity: 0, else 1;
// it('veirfy if the element is visible to the user (display:none, opacity: 0...)', ()=>{
//     render(<FooterDisplay data={99}/>)
//     const paragraphElement = screen.getByText(`data ${99}`);
//     expect(paragraphElement).not.toBeVisible();
// });
// it('veirfy if the element is visible to the user (display:none, opacity: 0...)', ()=>{
//     render(<FooterDisplay data={98}/>)
//     const paragraphElement = screen.getByText(`data ${98}`);
//     expect(paragraphElement).toBeVisible();
// });

// it('verify that div with the custom id contain a h4 tag', ()=>{
//     render(<FooterDisplay data={99}/>)
//     const paragraphElement = screen.getByTestId('my-div-id');
//     expect(paragraphElement).toContainHTML('h4');
// });


//describe block
// describe('desribe/group mutiple similar tests togheter', ()=>{
//     //here you can write another describe block and so on, structuring your entire test structure
//     it('verify that div with the custom id contain a h4 tag with "Test h4" content inside him', ()=>{
//         render(<FooterDisplay data={99}/>)
//         const paragraphElement = screen.getByTestId('my-div-id');
//         expect(paragraphElement).toHaveTextContent('Test h4');
//     });
    
//     it('verify that an spcific input have the correct value inside the .value attr',()=>{
//         render(<FooterDisplay data={100}/>)
//         const myInputElem = screen.getByTestId('my-input-id');
//         //input.value = 4 hardcoded;
//         expect(myInputElem.value).toBe("4");
//     })  
// })




