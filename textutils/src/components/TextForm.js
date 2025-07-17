import React, {useState} from 'react'



export default function TextForm({
    heading="Enter Text Here",
    mode='ligt',
    showAlert
}){

    const handleUpClick = () =>{
        // console.log("Uppercase Button Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        showAlert("Text Update to Uppercase","success");
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        showAlert("Text Update to Lowercase","success");
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        showAlert("Text Cleared","success");
    }
    const handleVowerClick = () =>{
        let newText = 0;
        let vowel_characters ="";
        let s = text;
        s = s.toLowerCase();
        // console.log(s);
        // console.log(text)
        for(let x=0; x<=text.length; x++){
            let get= s[x];
            if(get==='a' || get==='e' || get==='i' || get==='o' || get==='u'){
                vowel_characters+=text[x];
                newText+=1;
            }
        }
        setText(text +"\nCharecters: "+vowel_characters + " | Count: " +newText.toString())
        showAlert("count Vowels Successfully","success");
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const wordCount = (text) =>{
        let cnt = 0;
        
        for(let x=1; x<text.length; x++){
            console.log(text[x]);
            if(text[x-1]!=" " && text[x]===" "){
                cnt++; 
            }
        }
        if(text[text.length-1]!=" ") cnt++;
        // console.log(cnt);
        return cnt;
    }
    const charCount = (text) =>{
        let cnt = 0; 
        for(let x=0; x<text.length; x++){
            if(text[x]!=" ") cnt++; 
        }
        
        return cnt;
    }

    const [text,setText] = useState('');
    return (

        <>
    <div style={{color: mode==='light'?'black':'white'}}>
        <h1 className="text-center">{heading}</h1>
        <hr />
        <div className="mb-3">
            
            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} style={{backgroundColor: mode==='light'?'white':'black', color:mode==='light'?'black':'white'}} value={text} rows="8"></textarea>
            <button className="btn btn-primary mt-3 mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mt-3 mx-1" onClick={handleLowClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mt-3 mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mt-3" onClick={handleVowerClick}>Count Vowel</button>
        </div>
    </div>

    <div className="container my-4" style={{color: mode==='light'?'black':'white'}}>
        <h2>Your Text Summery</h2>
        <hr />
        <p>{wordCount(text)} words and {charCount(text)} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <hr />
        <p>{text.length>0 ? text:"Text is Empty"}</p>
    </div>
    </>
  )
}
