import '../Styles/category.css';

export default function Category(props) {
    console.log(props.card.categoryName);
    // {data.map((item) => 
    //     key = {item.id}
    //     )}
    return(
        <div className="category-wrapper">
            <div><img src={props.card.categoryImage} alt=''/></div>
            <p className='cat-txt1'>{props.card.categoryName}</p>
            <p className='cat-txt2'>175 Products</p>
        </div>
    );
    
}