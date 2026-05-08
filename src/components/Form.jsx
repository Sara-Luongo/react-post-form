import { useState } from "react";

const inputForm = {
    author: '',
    title: '',
    body: '',
    public: false

}
const api_url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"
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

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(api_url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formData)
        })
            .then((response) => {
                return response.json();
            })
            .then(json => {
                console.log('tutto ok', json)
            });
    }



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="author">Autore</label>
                <input id="author" type="text" name="author" onChange={handleChange} value={formData.author} />
            </div>
            <div>
                <label htmlFor="Titolo">Titolo</label>
                <input id="title" type="text" name="title" onChange={handleChange} value={formData.title} />
            </div>
            <div>
                <label htmlFor="body">inserisci contenuto</label>
                <textarea id="body" name="body" onChange={handleChange} value={formData.body}></textarea>
            </div>
            <div>
                <label htmlFor="public">Public</label>
                <input id="public" type="checkbox" name="public" onChange={handleChange} checked={formData.public} />
            </div>
            {JSON.stringify(formData)}
            <button type="submit">Invia</button>
        </form>
    )
};


export default Form;
