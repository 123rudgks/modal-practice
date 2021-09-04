import React,{useState} from "react";
import Modal from "./Modal";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () =>{
    setModalVisible(true);
  }
  const closeModal = () =>{
    setModalVisible(false);
  }
  let modal;
  if(modalVisible){
    modal=<Modal _modalVisible={modalVisible} _closeModal={closeModal} />
  }
  return (
    <div className="App">
      <button onClick={openModal}>모달창</button>
      {modal}
    </div>
  );
}

export default App;
