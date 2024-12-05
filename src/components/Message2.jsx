function Message2({isAdmin}) {
    // שיטה שמתאימה למצבים שיש לנו תנאי אבל אין else
    return ( 
    <>
    {isAdmin && <>
    <h4>Welcome back Admin</h4>
    <button className="btn btn-warning">Add Product</button>
    </>}
    </>

 );
}

export default Message2;

