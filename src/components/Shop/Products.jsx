import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
    const DUMMY = [
        {
            id: "m1",
            price: 99,
            title: "first product",
            description: "loremjwdckwnkwj",
        },
        {
            id: "m2",
            price: 99,
            title: "second product",
            description: "loremjwdckwnkwj",
        },
        {
            id: "m3",
            price: 99,
            title: "third product",
            description: "loremjwdckwnkwj",
        },
    ];
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY.map((item) => (
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.title}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
