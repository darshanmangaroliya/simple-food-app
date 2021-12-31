import React from 'react';
import classes  from './model.module.css';
import ReactDOM from 'react-dom';




const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick ={props.carthideHandler} />;
  };
  
  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };


  const portalElement = document.getElementById('overlays');

const Model = (props) => {
    return (
        <>
          {ReactDOM.createPortal(<Backdrop carthideHandler={props.carthideHandler} />, portalElement)}
          {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
          )}
        </>
      );
}

export default Model