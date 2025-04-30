function Item({name, isPacked = false}) {
    //   Using if statements
        if (isPacked) {
            return <>
            <li className="item">{name} {isPacked && <span>&#x2705;</span>}</li>
            </>
        }
        return  <li className="item">{name} </li>
        
        // return (
        //       // Using the logical and operator
        // // <li className="item">
        // //     {name} {isPacked && <span>&#x2705;</span>}
        // // </li>
        // )

        // return (
        //     <li className="item">
        //     {name} {isPacked ? <span>&#x2705;</span> : null}
        //   </li>)
}       
export default Item