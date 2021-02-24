import React, { useState } from 'react';
interface itemListData {
  itemName: string,
  itemQuantity: string,
  itemUnit: string

}

function App() {
  //make shopping list with usestate -> create emptyBasket to set a datatype to our shopping list
  const emptyList: itemListData[] = []
  const [items, setItems] = useState(emptyList)

  const [inputItemName, setInputItemName] = useState("")
  const [inputQuantity, setInputQuantity] = useState("")
  const [inputUnit, setInputUnit] = useState("")

  //stores additional items (name+quantity) in newItems
  const handleAddItem = () => {
    const newItem = {
      itemName: inputItemName,
      itemQuantity: inputQuantity,
      itemUnit: inputUnit
    }
    console.log(newItem, "is an object")

    const newItems = [...items, newItem]
    console.log(newItems, "is the shopping list with the new addition")

    setItems(newItems)
    setInputItemName("")
    setInputQuantity("")
    setInputUnit("")
  }
  function removeItem() {
    console.log("removing item")
    //find index of item in newItems
    //remove from newItems
  }

  return (
    <div className="Shopping List">
      <h1>Shopping List</h1>
      <label>Item:</label>
      <input value={inputItemName} onChange={(e) => setInputItemName(e.target.value)} type="text" id="item" placeholder="item name" />
      <input value={inputQuantity} onChange={(e) => setInputQuantity(e.target.value)} type="number" id="quantity" placeholder="amount" />
      <select value={inputUnit} onChange={(e) => setInputUnit(e.target.value)} >
        <option value="">number</option>
        <option value="kg">kilograms</option>
        <option value="l">litres</option>
      </select>
      <button onClick={handleAddItem}>Add Item</button>
      {items.map((item) => (
        <p>{item.itemName} {item.itemQuantity} {item.itemUnit} <button onClick={() => removeItem}>x</button></p>
      ))}
    </div>
  );
}

export default App;
