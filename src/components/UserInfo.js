import Modal from "./Modal";
import BackDrop from "./BackDrop";
import { useState } from "react";
function ShowUserInfo(props){
    const [modalForDeleteUser, modalIsOpen] = useState(false);
    function openModal(){
        modalIsOpen(true);
    }
    function closeModal(){
        modalIsOpen(false);
    }
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <h2>{props.email}</h2>
            <button onClick={openModal}>Delete User</button>
            {modalForDeleteUser && <Modal onCancel={closeModal} />}
            {/*When you use a component, you can't just place an onClick event on it and expect it to work, you need to create a "prop" and use the onClick function INSIDE the component and call its prop attribute!*/}
            {modalForDeleteUser && <BackDrop onCancel={closeModal}/>}
        </div>
       
    );

}

export default ShowUserInfo;