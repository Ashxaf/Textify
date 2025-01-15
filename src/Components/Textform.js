import React, {useState} from 'react'

export default function Textform(props) {

    const[text,setText]=useState('');

    



    const Uppercase=()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const lowercase=()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const sentenceCase = () => {
        let newText = text
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());
        setText(newText);
    };

    const Camelcase = () => {
        let newText = text
            .toLowerCase()
            .split(' ')
            .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
            .join('');
        setText(newText);
    };
    
    
    
    

    const clear=()=>{
        setText('');
    }

    const handlechange=(event)=>{
        setText(event.target.value)
    }

  return (
    <>
    <div>
    <div className="mt-4 mb-3">
  <h4>{props.heading}</h4>
  <textarea className="form-control" id="textbox" value={text} onChange={handlechange} rows="8"></textarea>
  </div>
  <button className='btn btn-dark mx-2 mt-2' onClick={Uppercase}>UPPERCASE</button>
  <button className='btn btn-dark mx-2 mt-2' onClick={lowercase}>lowercase</button>
  <button className='btn btn-dark mx-2 mt-2' onClick={sentenceCase}>Sentence case</button>
  <button className='btn btn-dark mx-2 mt-2' onClick={Camelcase}>Camel Case</button>
  <button className='btn btn-danger mx-2 mt-2' onClick={clear}>Clear</button>


</div>
<div className="container my-4">
    <h4>Your Text Summary: </h4>
    <p><b>{text.split(' ').length}</b> Words and <b>{text.length}</b> Characters.</p>
    <p>Reading time : <b>{text.split(' ').length * 0.008} Minutes</b></p> <br />
    <h3>Text Preview :</h3>
    <p><i>{text}</i></p>
    
</div>
</>
  )
}
