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

  const categories = [
    "Starters",
    "Main Courses",
    "Side Dishes",
    "Desserts"
  ]

  const categoriesTags = [
    "Starters",
    "Main",
    "Side",
    "Desserts",
    "Beef",
    "Chicken",
    "Pork",
    "Pasta",
    "Vegetarian",
    "Vegan",
    "Gluten Free",
    "Cake",
    "Roast",
    "Breakfast",
    "Brunch"
  ]

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
          {categories.map((category,index) =>  (
            <option key={index} value={category}>{category}</option>
          ))}
          

        </select>

        <div className="tags-container">
          {categoriesTags.map((categoryTag,index) => (
             <label>
              <input
                key={index}
                type="checkbox"
                name="tags"
                value={categoryTag}
                checked={formData.tags.includes(categoryTag)}
                onChange={handlerChange}
              />
              {categoryTag}
            </label>

          ))}
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
