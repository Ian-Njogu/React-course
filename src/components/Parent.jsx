import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const handleClick = () => {
        alert("Button Clicked")
    };
    return (
        <div>
            <h1>Parent component</h1>
            <ChildComponent onClick={handleClick}/>
        </div>
    )
}
export default ParentComponent