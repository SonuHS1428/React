function List(){
    /*example1
    const fruits=["appple","banana","orange","grapes","pineapple"]
    return(fruits);output:appplebananaorangegrapespineapple
    const listItems=fruits.map(fruit=> <li> {fruit} </li>);
    return(<ul>{listItems}</ul>)*/

    //example2,we are converting array of string to array of objects
    const fruitss=[{id:1,name:"appple",calories:95},
                   {id:2,name:"banana",calories:45},
                   {id:3,name:"orange",calories:86},
                   {id:4,name:"grapes",calories:75},
                   {id:5,name:"pineappple",calories:92}];//we are setting id to every obj for unique identificaation
    
    //sorting the objects

    //fruitss.sort((a,b)=>a.name.localeCompare(b.name));//sorting array of objects by thier name property,alphabetic order
    //fruitss.sort((a,b)=>b.name.localeCompare(a.name));reverse alphabetical order
    //fruitss.sort((a,b)=>a.calories-b.calories);//numeric order
    fruitss.sort((a,b)=>b.calories-a.calories);

    //filtering objects

    const lowCalFruits=fruitss.filter(fruit=>fruit.calories<70);//low calories fruits
    //const highCalFruits=fruitss.filter(fruit=>fruit.calories>=70);

    const listItem=lowCalFruits.map(lowCalFruit=> <li key={lowCalFruit.id}> 
                                          {lowCalFruit.name}: &nbsp;
                                          <b>{lowCalFruit.calories}</b></li>)
    return(<ol>{listItem}</ol>)

}

export default List