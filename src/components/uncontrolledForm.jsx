import { useRef } from "react";

function UncontrolledForm() {
    const inputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Entered value: ${inputRef.current.value}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
                <input type="text" ref={inputRef}/>
            </label>
            <button type="submit" >Submit</button>
        </form>
    )
}

export default UncontrolledForm