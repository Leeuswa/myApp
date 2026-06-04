import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>
}

function About() {
  return <h1>About Page</h1>
}

function Product() {
const { category, id } = useParams(); // category, id 파라미터 읽기


return <h1>Product {category} ID: {id}</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:category/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}