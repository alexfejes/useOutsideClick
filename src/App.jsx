import { useState } from 'react'
import { Dropdown } from './components/Dropdown'
import './App.css'

const products = [
  { name: 'Wool overshirt', type: 'Shirts', price: 89, added: 6, color: '#8a6f4e' },
  { name: 'Linen trousers', type: 'Trousers', price: 64, added: 3, color: '#d9cdb4' },
  { name: 'Knit sweater', type: 'Knitwear', price: 72, added: 5, color: '#4f6d5a' },
  { name: 'Canvas jacket', type: 'Outerwear', price: 120, added: 1, color: '#2f3e56' },
  { name: 'Cotton tee', type: 'Tops', price: 24, added: 4, color: '#e9e4da' },
  { name: 'Denim jeans', type: 'Trousers', price: 79, added: 2, color: '#3b5a80' },
]

const sorters = {
  'Newest first': (a, b) => a.added - b.added,
  'Price: low to high': (a, b) => a.price - b.price,
  'Price: high to low': (a, b) => b.price - a.price,
  'Name A–Z': (a, b) => a.name.localeCompare(b.name),
}

function App() {
  const [sort, setSort] = useState('Newest first')
  const sorted = [...products].sort(sorters[sort])

  return (
    <>
      <header className="site-header">
        <a className="logo" href="#">
          Store
        </a>
        <nav className="nav">
          <a href="#">New in</a>
          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">Sale</a>
        </nav>
        <a className="cart" href="#">
          Cart (0)
        </a>
      </header>

      <main>
        <section className="hero">
          <h1>Everyday clothes, made to last.</h1>
          <p>Simple pieces in natural fabrics. Free returns within 30 days.</p>
        </section>

        <section className="shop">
          <div className="shop-bar">
            <h2>New arrivals</h2>
            <Dropdown label={`Sort: ${sort}`} align="right" items={Object.keys(sorters)} onSelect={setSort} />
          </div>

          <ul className="grid">
            {sorted.map((p) => (
              <li key={p.name} className="card">
                <div className="photo" style={{ '--swatch': p.color }} />
                <div className="meta">
                  <h3>{p.name}</h3>
                  <p>{p.type}</p>
                </div>
                <div className="buy">
                  <span>${p.price}</span>
                  <button>Add to cart</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">Free shipping on orders over $100.</footer>
    </>
  )
}

export default App
