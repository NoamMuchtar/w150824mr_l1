function Message1({isAdmin}) {

    if(isAdmin) {
        return (
            <>
                <h4>Welcome back Admin</h4>
                <button className="btn btn-warning">Add Product</button>
            </>
        );
    }
    return (
            <>
                <h4>Welcome back User</h4>
                <button className="btn btn-primary">Show Products</button>
            </>
    );
}

export default Message1;