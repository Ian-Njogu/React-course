const ChildComponent = ({onClick}) => {
    return (
        <div>
            <h2>Child component</h2>
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}
export default ChildComponent;