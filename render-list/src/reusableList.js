//reusable lists
/*transforming list component so it's reusable with different lists currently the way that we set this up is
 that each list component that we create has its own list of fruits*/

function List2(props){
    const category=props.category;
    const itemList=props.items;

    const listItem=itemList.map(item=> <li key={item.id}> 
        {item.name}: &nbsp;
        <b>{item.calories}</b></li>)

    return(
        <>
        <h3>{category}</h3>
        <ol>{listItem}</ol>
        </>
    );
}
//default props
List2.defaultProps={
    category:"Category",//if category="Vegetables" is missing in App.js
    items:[]
}
export default List2