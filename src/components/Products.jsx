function Products() {

    let products = [
        {id: "01", name: "Iphone 16 Plus" , price: 4500},
        {id: "02", name: "Iphone 16 Pro" , price: 5000},
        {id: "03", name: "Iphone 16 Pro Max" , price: 5500},
    ];

    // let products = []


    return ( 
    <>
        <h2>Products</h2>

        {products.length ? (
            <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name}, {product.price}
                </li>
            ))}
        </ul>
        ) : (
            <p>Sorry, Products not found.</p>
        )}



    </> );
}

export default Products;
