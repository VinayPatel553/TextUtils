import React,{useState} from 'react'

export default function TextForm(props) {
      const handleUpclick=()=>{
            // console.log("Uppercase was clicked");
            let UpText=text.toUpperCase();
            setText(UpText);
            props.showAlert("Converted to Uppercase","success");
      }  
      const handleDownclick=()=>{
            let LowText=text.toLowerCase();
            setText(LowText);
            props.showAlert("Converted to Lowercase","success");
      }   
      const handleOnchange=(event)=>{
            // console.log("Onchange");
            setText(event.target.value);
            
      }
      const handleClearclick=()=>{
            let cleartext = '';
            setText(cleartext);
            props.showAlert("Text Cleared","success");
      }
      const handleReverse=()=>{
            let revtext = "";
            for (let i = text.length - 1; i >= 0; i--) {
                  revtext += text[i];
            }
            setText(revtext);
            props.showAlert("Converted to reverse","success");
      }
      const handleCopy=()=>{
            let copytext = document.getElementById("mybox");
            copytext.select();
            navigator.clipboard.writeText(copytext.value);
            // alert("Copied the text: "+copytext.value);
            setText(copytext);
            props.showAlert("Copied text successfully","success");
      }
      const [text, setText] = useState('');
      // setText('New Text');
      return (
            <>
            <div className="container" style={{color: props.color}}> 
            <h2 className='mb-3' style={{color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h2>
            {/* (props.mode==='dark'?'white':'#042743') */}
                  <div className="mb-3">
                        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='light'?'black':'white'}} onChange={handleOnchange} id="mybox" rows="8"></textarea>
                  
                  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpclick}>Convert To Uppercase</button>
                  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleDownclick}>Convert To Lowercase</button>
                  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearclick}>Clear Text</button>
                  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleReverse}>Reverse Text</button>
                  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="continer mb-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                  <h1>Your text summary</h1>
                  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and  {text.length} characters</p>
                  <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                  <h2>Preview</h2>
                  <p>{text.length>0?text:"Nothing To Preview"}</p>
            </div>
            </div>
            </>
  );
}

// TextForm.propTypes={heading: PropTypes.string}