import { useState } from 'react'
import { Dropdown } from './components/Dropdown'
import './App.css'

const records = [
  { title: 'Night Ferry', artist: 'Lumen Lake', genre: 'Dream pop', price: 29, year: 2024, label: '#f6c344' },
  { title: 'Concrete Bloom', artist: 'The Overpass', genre: 'Post-punk', price: 32, year: 2023, label: '#e8553d' },
  { title: 'Slow Orbit', artist: 'Mara Quell', genre: 'Ambient', price: 27, year: 2025, label: '#7fc8a9' },
  { title: 'Paper Saints', artist: 'Halfmoon Choir', genre: 'Folk', price: 25, year: 2022, label: '#c9b6f2' },
  { title: 'Heat Index', artist: 'DJ Sorrel', genre: 'House', price: 34, year: 2025, label: '#ff8fb1' },
  { title: 'Low Tide Hymns', artist: 'Ostrander', genre: 'Jazz', price: 31, year: 2021, label: '#8ec5ff' },
]

const sorters = {
  'Newest first': (a, b) => b.year - a.year,
  'Price: low to high': (a, b) => a.price - b.price,
  'Price: high to low': (a, b) => b.price - a.price,
  'Artist A–Z': (a, b) => a.artist.localeCompare(b.artist),
}

function App() {
  const [sort, setSort] = useState('Newest first')
  const sorted = [...records].sort(sorters[sort])

  return (
    <>
      <header className="site-header">
        <a className="logo" href="#">
          <span className="logo-disc" aria-hidden="true" />
          Side B
        </a>
        <nav className="nav">
          <a href="#">New in</a>
          <a href="#">Genres</a>
          <a href="#">Pre-orders</a>
        </nav>
        <Dropdown label="Alex" align="right" items={['My orders', 'Wishlist', 'Account settings', 'Sign out']} />
      </header>

      <main>
        <section className="hero">
          <h1>Records worth flipping over.</h1>
          <p>Small-batch pressings from independent labels, shipped flat in a proper mailer.</p>
        </section>

        <section className="shop">
          <div className="shop-bar">
            <h2>New this week</h2>
            <Dropdown label={`Sort: ${sort}`} align="right" items={Object.keys(sorters)} onSelect={setSort} />
          </div>

          <ul className="grid">
            {sorted.map((r) => (
              <li key={r.title} className="card">
                <div className="sleeve">
                  <div className="vinyl" style={{ '--label': r.label }} />
                </div>
                <div className="meta">
                  <h3>{r.title}</h3>
                  <p>{r.artist}</p>
                  <p className="small">
                    {r.genre}, {r.year}
                  </p>
                </div>
                <div className="buy">
                  <span>${r.price}</span>
                  <button>Add to cart</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">Side B Records, 214 Harbour St. Open Thursday to Sunday.</footer>
    </>
  )
}

export default App
