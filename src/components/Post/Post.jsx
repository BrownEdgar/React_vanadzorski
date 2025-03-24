import './post.css'

function Post({ elem }) {

  console.log("Post rendered!!");

  return <div key={elem.id} className='Post' >
    <h2>{elem.title}</h2>
    <p>{elem.body}</p>

  </div>
}

export default Post;
