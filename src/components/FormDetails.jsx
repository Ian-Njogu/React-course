const Form = ({onClick}) => {
    return <div>
        <form action="submit">
            <label htmlFor="Name">Name</label>
            <input type="text" />
            <label htmlFor="Age">Age</label>
            <input type="text" />
            <button onClick={onClick}>Submit</button>
        </form>
    </div>
}

export default Form