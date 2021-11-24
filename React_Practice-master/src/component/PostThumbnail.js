import { useState } from "react";
import ReactDOM from "react-dom";
import './index.css'

function PostThumbnail(props) {
    const [isOpen, setIsOpen] = useState(false)
    const MODAL_STYLES = {
        position: 'fixed',
        marginTop: '50px',
        marginBottom: '50px',
        marginRight: '50px',
        marginLeft: '50px',
        width:'90%',
        top: '0px',
        background: '#FFF',
        zIndex:1000
    }
    const OVERLAY_STYLE = {
        position: 'fixed',
        top: 0,
        left: 0,
        right:0,
        bottom:0,
        background: 'rgb(0,0,0)',
        zIndex:1000
    }
    function Modal({ open, children,onClose}) {
        console.log("1")
        if(!open) return null
    
        return ReactDOM.createPortal(
            <><div style={OVERLAY_STYLE}  onClick={onClose}/><div style={MODAL_STYLES}>
                {/* <button onClick={onClose}>Close Modal</button> */}
                {children}
            </div></>,
            document.getElementById('portal')
        )
    }

    return (
        <><div onClick={() => setIsOpen(true)}>
            <img src={props.numbers.featureImageUrl} alt={props.numbers.description} width="300px" height="180px" object-fit="cover" style={{ justifyContent: 'center' }}></img>
            <h2>{props.numbers.title}</h2>
            <p>{props.numbers.description}</p>
        </div><Modal open={isOpen} onClose={() => setIsOpen(false)} key={props.numbers.id + "1"}>{props.numbers.contents}</Modal></> 
    );
  }
  
  export default PostThumbnail;