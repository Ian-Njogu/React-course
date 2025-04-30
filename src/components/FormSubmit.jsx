import Form from "./FormDetails"
const Submit = () => {
    const handleSubmit = () => {
        alert("Form submitted!")
    }
    return <div>
        <Form onClick={handleSubmit}/>
    </div>
}

export default Submit