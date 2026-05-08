import { useState } from "react";

const inputForm = {
    author: '',
    title: '',
    body: '',
    public: true

}
function Form() {
    const [formData, setFormData] = useState(inputForm);

    const handleChange = (event) => {
        const target = event.target;
        const tagType = target.type; // Mi recupero il tipo di tag
        const name = target.name; // La proprietà da aggiornare
        const value = target.value; // Il valore della proprietà in caso di Input(text), Textarea e Select
        const checked = target.checked; // Il valore della proprietà in caso di Input(Checkbox)
        const keyToUpdate = name;
        const valueToUpdate = (tagType === 'checkbox' ? checked : value);
        const newFormData = {
            ...formData,
            [keyToUpdate]: valueToUpdate
        }
        setFormData(newFormData);
    }



    return (
        <form>
            <div>
                <label htmlFor="Autore">Autore</label>
                <input type="text" name="author" onChange={handleChange} value={formData.author} />
            </div>
            <div>
                <label htmlFor="Titolo">Titolo</label>
                <input type="text" name="title" onChange={handleChange} value={formData.title} />
            </div>
            <div>
                <textarea name="body" onChange={handleChange} value={formData.body}>Contenuto</textarea>
            </div>
            <div>
                <label htmlFor="">Nome</label>
                <input type="checkbox" name="public" onChange={handleChange} checked={formData.public} />
            </div>
            {JSON.stringify(formData)}
        </form>
    )
};


export default Form;
