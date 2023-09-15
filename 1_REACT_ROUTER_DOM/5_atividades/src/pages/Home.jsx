import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <div>
            <h2>OLA</h2>
            <p>Se vc gosta de iphone, ou celulares em geral, voce ganhou um sortei no qual tera 1000reais e direito a um iphone 14 pro MAX </p>
        </div>
        <Link to={"/pag1"}>clique aqui para revindicar seu Iphone</Link>
    </div>
  )
}

export default Home