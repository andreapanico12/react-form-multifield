import { useState } from "react"

const BlogForm = () => {

  const [title, setTitle] = useState(``);
  const [author, setAuthor] =useState (``);
  const [publicationYear, setPublicationYear] = useState(0)

  const [articles, setArticles] = useState([]);


  const handlerSubmit = (e) => {
    e.preventDefault();
    if(title && author && publicationYear){
      setArticles([...articles,{  title, author, year: publicationYear}]);
      setTitle("");
      setAuthor(``);
      setPublicationYear(0)
    }

  }

  const handlerDelete = (index) => {
    const updatedArticles = articles.filter((article,i) => i !==index)
    setArticles(updatedArticles)
    console.log(index)
    console.log(updatedArticles)

  }

  return(
    <div className="container">
    <h1>Blog Articles</h1>
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Enter article Title"
        onChange={(e)=>setTitle(e.target.value)}

      />
      <input
        type="text"
        value={author}
        placeholder="Enter article Author"
        onChange={(e)=>setAuthor(e.target.value)}

      />
      <input
        type="number"
        value={publicationYear}
        placeholder="Enter article Publication Year"
        onChange={(e)=>setPublicationYear(e.target.value)}

      />
      <button type="submit">
        Add Article
      </button>
    </form>
    <ul>
      {articles.map((article, index) => (
        <li
          key={index}
        >
          <p>{article.title} {article.author} {article.year}</p>
          <button
            type="button"
            onClick={() => handlerDelete(index)}
            >

            ❌
          </button>
        </li>
      ))}
    </ul>
  </div>
  )
} 

export default BlogForm