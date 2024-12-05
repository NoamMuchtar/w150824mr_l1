function Details() {
    const handlerInput = (newInput) => {
        console.log(newInput);
    }
    return ( 
        <>
        <label htmlFor="username">User Name:</label>
        <input 
        type="text"
        id="username" 
        onChange={(e) => handlerInput(e.target.value) }
        />
        </>
     );
}

export default Details;