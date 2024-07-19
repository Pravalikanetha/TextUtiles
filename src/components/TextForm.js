import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () => {
	let newtext = text.toUpperCase();
	setText(newtext);
	if(text.length === 0){
		return props.showAlert("Enter something first", "warning");
	}
	else{
		return props.showAlert("coverted to uppercase", "success");
	}
	
}
const handleLowClick = () => {
	let newtext = text.toLowerCase();
	setText(newtext);
	if(text.length === 0){
		return props.showAlert("Enter something first", "warning");
	}
	else{
		return props.showAlert("coverted to Lowercase", "success");
	}
}
const handleToClear = () => {
	let newtext = "";
	setText(newtext);
}
const handleOnChange = (event) =>{
	setText(event.target.value);
}
const handleForCopy = () => {
	let text = document.getElementById("myBox");
	text.select();
	navigator.clipboard.writeText(text.value);
}
const handleCamelCare = () => {
	let username = text.trim().charAt(0).toUpperCase() + text.trim().slice(1).toLowerCase();
	setText(username);
}

// const handleExtraSpaces = () => {
// 	let newText = text.split(/[ ]+/);
// 	setText(newText.join[" "]);
// }
const [text, setText] = useState('');

	return (
		<>
		<div>
			<h1 className='my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
			<div className="mb-3">
				<label for="myBox" class="form-label"></label>
				<textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
			</div>
			<button className="btn btn-dark mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
			<button className="btn btn-dark mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
			<button className="btn btn-dark mx-1 my-1" onClick={handleForCopy}>copy</button>
			<button className="btn btn-dark mx-1 my-1" onClick={handleCamelCare}>CamelCase</button>
			<button className="btn btn-dark mx-1 my-1" onClick={handleToClear}>clear</button>
			
			{/* <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>remove extra spaces</button> */}
		</div>
		<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
			<h2 className='my-3'>Your text context</h2>
			<p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
			<p>{0.008*text.split(" ").length} minutes took to read</p>
			<h3>Preview</h3>
			<p>{text.length>0?text:"Enter something to preview"}</p>
		</div>
		</>
	)
}	