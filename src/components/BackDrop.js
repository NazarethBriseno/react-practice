function BackDrop(props){
    return <div onClick={props.onCancel} className='backdrop'></div>;
}

export default BackDrop;