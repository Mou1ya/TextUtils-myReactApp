import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Convert into uppercase!", "success");
    }
    const handleLoClick=()=>{
      console.log("Lowercase"+text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Convert into lowercase!", "success");

  }
  const handleClearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text cleared!", "success");

}
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy the text to clipboard", "success");

    }
    const handleExtraSpaces=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Clear all extra spaces!", "success");

    }
    const [text, setText] = useState('');
//setText("new text");
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#13466e' : 'white',color:props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Covert to uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleLoClick}>Covert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleClearClick}>Clear</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>




  </div>
  <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
<h1>Your text summary</h1>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
<p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview!"}</p>

  </div>
  </>
  )
}
