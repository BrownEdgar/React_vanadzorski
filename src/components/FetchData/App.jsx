
import useFetchData from '../Hooks/useFetchData/useFetchData';


export default function App() {
  const { data, loading, error, setUrl } = useFetchData('https://jsonplaceholder.typicode.com/posts?_limit=10');

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>useEffect</h1>
      <p>useEffect-ը React-ի hook է, որը թույլ է տալիս կատարել կողմնակի ազդեցություններ ֆունկցիոնալ կոմպոնենտներում:</p>
      <p>Կողմնակի ազդեցությունները կարող են լինել տվյալների բեռնում, DOM-ի փոփոխություններ, կամ այլ գործողություններ, որոնք չեն վերաբերում կոմպոնենտի UI-ին:</p>
      <p>useEffect-ը ընդունում է երկու արգումենտ՝ ֆունկցիա և կախվածությունների զանգված:</p>

      <hr />
      <div className="posts">
        <h2>Posts {loading ? <span>Loading... ☘️</span> : null}</h2>
        {data.map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
