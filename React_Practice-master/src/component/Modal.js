import React from "react";
import ReactDOM from "react-dom";
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    background: '#FFF',
    padding: '50px',
    zIndex:1000
}
const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right:0,
    bottom:0,
    background: 'rgb(0,0,0,.7)',
    zIndex:1000
}
// export default function Modal({ open, children,onClose}) {
    export default function Modal({ open, children}) {
    if(!open) return null

    return ReactDOM.createPortal(
        <><div style={OVERLAY_STYLE}  onClick={()=>setIsOpen(false)}/><div style={MODAL_STYLES}>
            {/* <button onClick={onClose}>Close Modal</button> */}
            {children}
        </div></>,
        document.getElementById('portal')
        
    )
}