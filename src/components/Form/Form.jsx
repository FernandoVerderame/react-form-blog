// Importo lo style del Form, l'icona, la PostCard e lo useState
import { useState } from 'react';
import formStyle from './Form.module.css';
import { IoMdClose as Delete } from "react-icons/io";
import PostCard from '../Card/PostCard';

const Form = () => {

    // Post di default
    const defaultPostData = {
        title: '',
        image: '',
        content: '',
        published: true,
        tags: ['html', 'css']
    }

    // useState dei nuovi Posts
    const [posts, setPosts] = useState([]);

    // useState del singolo nuovo Post
    const [postData, setPostData] = useState(defaultPostData);

    // Submit del Form
    const handleSubmit = (e) => {
        e.preventDefault();

        setPosts(array => ([...array, postData]));
        setPostData(defaultPostData);
    }

    // Rimozione di un Post
    const removePost = (indexToDelete) => {
        setPosts(array => array.filter((_, i) => i !== indexToDelete));
    }

    // Update del Post
    const changePostData = (key, newValue) => {
        setPostData(data => ({ ...data, [key]: newValue }));
    }

    return (
        <>
            {/* Form Card */}
            <div className={formStyle.cardForm}>

                {/* Card Title */}
                <div className={formStyle.cardTitle}>
                    <h3>Creo un nuovo Post</h3>
                </div>

                {/* Card Body */}
                <div className={formStyle.cardBody}>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>

                        {/* Input Title */}
                        <div className={formStyle.cardInput}>
                            <label htmlFor="title">Titolo</label>
                            <input
                                type="text"
                                id='title'
                                name='title'
                                value={postData.title}
                                onChange={(e) => changePostData('title', e.target.value)}
                            />
                        </div>

                        {/* Input Image */}
                        <div className={formStyle.cardInput}>
                            <label htmlFor="image">URL Immagine</label>
                            <input
                                type="url"
                                id='image'
                                name='image'
                                value={postData.image}
                                onChange={(e) => changePostData('image', e.target.value)}
                            />
                        </div>

                        {/* Input Content */}
                        <div className={formStyle.cardInput}>
                            <label htmlFor="content">Content</label>
                            <textarea
                                id='content'
                                name='content'
                                rows='5'
                                value={postData.content}
                                onChange={(e) => changePostData('content', e.target.value)}
                            />
                        </div>
                        <div className={formStyle.cardBtn}>
                            <button>Crea</button>
                        </div>
                    </form>
                </div>
            </div>

            <h3>Lista dei nuovi Post</h3>
            {posts.map(({ title, image, content, published, tags }, i) => (
                <div key={`post${i}`} className={formStyle.postCard}>
                    <PostCard
                        title={title}
                        image={image}
                        content={content}
                        published={published}
                        tags={tags}
                    />
                    <button className={formStyle.deleteBtn} onClick={() => removePost(i)}>
                        <Delete />
                    </button>
                </div>
            ))}
        </>
    );
}

export default Form;