import React from "react";

const GroceryItem = props => {
  const { item, handleGroceryList } = props;

  const handleItemClick = () => {
    // TODO: Update groceryList state to check/uncheck item
    handleGroceryList((prevState) => {
      return prevState.map( groceryItem => {
        if (groceryItem.name === item.name && item.checked === false){
          return {...groceryItem, checked: true}
        } else if (item.checked === true) {
          return {...groceryItem, checked: false}
        }
         return groceryItem;
      })
    });


  };

  const handleDelBtnClick = () => {
    // TODO: Update groceryList state to delete item
    handleGroceryList((prevList) => {
      return prevList.filter( groceryItem => item.name !== groceryItem.name )
    })
  };

  return (
    <li className={item.checked ? "checked" : ""}>
      <p onClick={handleItemClick}>{item.name}</p>
      <button className="delete-btn" onClick={handleDelBtnClick} />
    </li>
  );
};

export default GroceryItem;
