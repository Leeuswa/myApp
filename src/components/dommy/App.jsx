import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Product() {
  const { category, id } = useParams();
  return <h1>Product {category} ID: {id}</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:category/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}