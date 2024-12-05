function Message3({isAdmin}) {
    // שימור בטרנרי מאפשר להגדיר גם מצב של false
    return ( 
        <>
    
        {isAdmin ? 
        (
            <>
            <h4 className="text-danger">Welcome back Admin</h4>
            <button className="btn btn-danger">Add product</button>
            </>
        ) : (
            <>
            <h4 className="text-warning">Welcome back User</h4>
            <button className="btn btn-warning">Show products</button>
            </>
        )}

        </>
     );
}

export default Message3;