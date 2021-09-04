import React from 'react';
import styled from 'styled-components'

function Modal({_closeModal,_modalVisible}){
    const clickedWrapper = (e)=>{
        if(e.target === e.currentTarget){
            _closeModal();
        }
    }
    return(
        <>
        <ModalWrapper onClick={clickedWrapper}> 
            <ModalInner>this is modal</ModalInner>
        </ModalWrapper>
        </>
    );
}

const ModalWrapper = styled.div`
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.6);
    position:fixed;
    top:0; right:0; bottom:0; left:0;
    z-index: 1000;
    
`
const ModalInner = styled.div`
    text-align: center;

    position:relative;
    top:50%;
    transform: translateY(-50%);
    margin:0 auto;

    width:300px;
    height:100px;
    background-color: white;
`
export default Modal;