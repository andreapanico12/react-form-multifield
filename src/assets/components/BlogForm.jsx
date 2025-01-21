import { useState, useEffect } from "react";

const BlogForm = () => {
  const formDataDefault = {
    title: ``,
    author: ``,
    publicationYear: ``,
    imageUrl: ``,
    content: ``,
    category: ``,
    tags: [],
    isPublished: false,
  };

  const [formData, setFormData] = useState(formDataDefault);
  const [articles, setArticles] = useState([]);

  const handlerChange = (e) => {
    // Destruttura l'elemento che ha generato l'onChange
    const { name, value, type, checked } = e.target;

    // Gestione dell'onChange dei tag
    if (type === "checkbox" && name === "tags") {
      setFormData((data) => ({
        ...data,
        tags: checked
          ? [...data.tags, value]
          : data.tags.filter((tag) => tag !== value),
      }));
      // Gestione dell'onChange di isPublished
    } else if (type === "checkbox") {
      setFormData((data) => ({
        ...data,
        [name]: checked,
      }));
      // Gestione dell'onChange degli altri campi
    } else {
      setFormData((data) => ({
        ...data,
        [name]: value,
      }));
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      setArticles([...articles, formData]);
      setFormData(formDataDefault);
    }
  };

  const handlerDelete = (index) => {
    const updatedArticles = articles.filter((article, i) => i !== index);
    setArticles(updatedArticles);
  };

  useEffect(() => {
    if (formData.isPublished) {
      alert("L'articolo sarà pubblicato!");
    }
  }, [formData.isPublished]);

  return (
    <div className="container">
      <h1>Blog Articles</h1>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Enter article Title"
          onChange={handlerChange}
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          placeholder="Enter article Author"
          onChange={handlerChange}
        />
        <input
          type="number"
          name="publicationYear"
          value={formData.publicationYear}
          placeholder="Enter article Publication Year"
          onChange={handlerChange}
        />
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          placeholder="Enter image URL"
          onChange={handlerChange}
        />
        <textarea
          name="content"
          value={formData.content}
          placeholder="Enter article Content"
          onChange={handlerChange}
        />
        <select name="category" value={formData.category} onChange={handlerChange}>
          <option value="">Select Category</option>
          <option value="Starters">Starters</option>
          <option value="Main Courses">Main Courses</option>
          <option value="Side Dishes">Side Dishes</option>
          <option value="Desserts">Desserts</option>
        </select>

        <div className="tags-container">
          <label>
            <input
              type="checkbox"
              name="tags"
              value="Starter"
              checked={formData.tags.includes("Starter")}
              onChange={handlerChange}
            />
            Starter
          </label>
          <label>
            <input
              type="checkbox"
              name="tags"
              value="Main"
              checked={formData.tags.includes("Main")}
              onChange={handlerChange}
            />
            Main
          </label>
          <label>
            <input
              type="checkbox"
              name="tags"
              value="Side"
              checked={formData.tags.includes("Side")}
              onChange={handlerChange}
            />
            Side
          </label>
          <label>
            <input
              type="checkbox"
              name="tags"
              value="Dessert"
              checked={formData.tags.includes("Dessert")}
              onChange={handlerChange}
            />
            Dessert
          </label>
          <label>
            <input
              type="checkbox"
              name="tags"
              value="Vegetarian"
              checked={formData.tags.includes("Vegetarian")}
              onChange={handlerChange}
            />
            Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              name="tags"
              value="Vegan"
              checked={formData.tags.includes("Vegan")}
              onChange={handlerChange}
            />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="tags"
              value="Cake"
              checked={formData.tags.includes("Cake")}
              onChange={handlerChange}
            />
            Cake
          </label>
          <label>
            <input
              type="checkbox"
              name="tags"
              value="Beef"
              checked={formData.tags.includes("Beef")}
              onChange={handlerChange}
            />
            Beef
          </label>
          <label>
            <input
              type="checkbox"
              name="tags"
              value="Chicken"
              checked={formData.tags.includes("Chicken")}
              onChange={handlerChange}
            />
            Chicken
          </label>
          <label>
            <input
              type="checkbox"
              name="tags"
              value="Pork"
              checked={formData.tags.includes("Pork")}
              onChange={handlerChange}
            />
            Pork
          </label>
          <label>
            <input
              type="checkbox"
              name="tags"
              value="Pasta"
              checked={formData.tags.includes("Pasta")}
              onChange={handlerChange}
            />
            Pasta
          </label>
        </div>

       
          <div className="form-actions">
          <label>
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handlerChange}
          />
          Pubblica l'articolo
        </label>
        <button type="submit">Add Article</button>
          </div>

      </form>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <p>
              <strong>{article.title}</strong> - {article.author} ({article.publicationYear})
            </p>
            <p>Categoria: {article.category}</p>
            <p>Tags: {article.tags.join(", ")}</p>
            <p>{article.isPublished ? "Pubblicato" : "Non Pubblicato"}</p>
            <img
              src={article.imageUrl}
              alt={`Immagine per ${article.title}`}
            ></img>  

            <button type="button" onClick={() => handlerDelete(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogForm;
