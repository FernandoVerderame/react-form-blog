// Importo lo style del Form
import { useState } from 'react';
import formStyle from './Form.module.css';
import { IoMdClose as Delete } from "react-icons/io";

const Form = () => {

    const [titles, setTitles] = useState([]);
    const [titleLabel, setTitleLabel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setTitles(array => ([...array, titleLabel]));
        setTitleLabel('');
    }

    const removeTitle = (indexToDelete) => {
        setTitles(array => array.filter((_, i) => i !== indexToDelete));
    }

    return (
        <>
            <div className={formStyle.cardForm}>
                <div className={formStyle.cardTitle}>
                    <h3>Creo un nuovo Titolo</h3>
                </div>
                <div className={formStyle.cardBody}>
                    <form onSubmit={handleSubmit}>
                        <div className={formStyle.cardInput}>
                            <label htmlFor="title">Titolo</label>
                            <input
                                type="text"
                                id='title'
                                name='title'
                                value={titleLabel}
                                onChange={e => setTitleLabel(e.target.value)}
                            />
                        </div>
                        <div className={formStyle.cardBtn}>
                            <button>Crea</button>
                        </div>
                    </form>

                    <h3>Lista dei Titoli</h3>
                    <ul>
                        {titles.map((title, i) => (
                            <li key={`title${i}`}>
                                {title}
                                <button className={formStyle.deleteBtn}>
                                    <Delete onClick={() => removeTitle(i)} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
        </>
    );
}

export default Form;