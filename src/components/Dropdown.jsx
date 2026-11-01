import { useState } from 'react'
// import { useRef } from 'react'
// import { useOutsideClick } from '../hooks/useOutsideClick'

export function Dropdown({ label, items, onSelect, align = 'left' }) {
  const [open, setOpen] = useState(false)
  // const ref = useRef(null)
  // useOutsideClick(ref, () => setOpen(false))

  return (
    <div className="dropdown" /* ref={ref} */>
      <button className="dropdown-trigger" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {label}
        <span className={open ? 'caret up' : 'caret'} aria-hidden="true" />
      </button>
      {open && (
        <ul className={`dropdown-menu ${align}`}>
          {items.map((item) => (
            <li key={item}>
              <button
                onClick={() => {
                  onSelect?.(item)
                  setOpen(false)
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
