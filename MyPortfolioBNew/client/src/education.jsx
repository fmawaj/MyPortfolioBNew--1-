function MyButton() {
     function handleClick() {
       alert('You clicked me!');
     }
   
     return (
       <button onClick={handleClick}>
         Click me
       </button>
     );
   }

export default function Education() {
     return (
     <>
    <p>Education.Qualification</p>
    <MyButton />
     </>
     );
     }
    