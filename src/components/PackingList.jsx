import Item from "./items";

function PackingList() {
    return (
        <ul>
            <Item name="Toothbrush" isPacked= {true}/>
            <Item name="Toothpaste" isPacked= {false}/>
            <Item name="Towel" isPacked= {true}/>
        </ul>
    )
    
}
export default PackingList
