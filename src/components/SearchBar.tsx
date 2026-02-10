import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { searchItems, type SearchItem } from '@/lib/searchData'

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const navigate = useNavigate()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchItems(query)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResults(filtered)
      setSelectedIndex(-1)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
      setQuery('')
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) =>
        prev < results.length - 1 ? prev + 1 : 0
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : results.length - 1
      )
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault()
      handleItemClick(results[selectedIndex])
    }
  }

  const handleItemClick = (item: SearchItem) => {
    navigate(item.path)
    setQuery('')
    setIsOpen(false)
    setResults([])
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (results.length > 0) {
      handleItemClick(results[0])
    }
  }

  return (
    <div ref={searchRef} className='relative w-full md:w-96'>
      <form onSubmit={handleSearch} className='relative'>
        <div className='relative flex items-center bg-slate-800/50 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors'>
          <Search size={18} className='absolute left-3 text-slate-400 pointer-events-none' />
          <input
            ref={inputRef}
            type='text'
            placeholder='Search pages, features, services...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => query && setIsOpen(true)}
            className='w-full bg-transparent pl-10 pr-10 py-2.5 text-white placeholder-slate-500 outline-none text-sm'
          />
          {query && (
            <button
              type='button'
              onClick={() => {
                setQuery('')
                inputRef.current?.focus()
              }}
              className='absolute right-3 text-slate-400 hover:text-white transition-colors'
            >
              <X size={16} />
            </button>
          )}
        </div>
      </form>

      {/* Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className='absolute top-full left-0 right-0 mt-2 max-h-96 overflow-y-auto bg-slate-900/95 border border-purple-500/30 rounded-lg shadow-2xl shadow-purple-500/20 backdrop-blur-sm z-50'>
          <div className='p-2'>
            {results.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full text-left px-4 py-3 rounded-md transition-colors mb-1 last:mb-0 ${
                  index === selectedIndex
                    ? 'bg-purple-600/40 border-l-2 border-purple-500'
                    : 'hover:bg-slate-800/50'
                }`}
              >
                <div className='flex items-start justify-between'>
                  <div className='flex-1'>
                    <p className='text-white font-medium text-sm'>{item.title}</p>
                    <p className='text-slate-400 text-xs line-clamp-1'>
                      {item.description}
                    </p>
                  </div>
                  <span className='ml-2 px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded whitespace-nowrap'>
                    {item.category}
                  </span>
                </div>
                <p className='text-slate-500 text-xs mt-1'>{item.page}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query && results.length === 0 && (
        <div className='absolute top-full left-0 right-0 mt-2 bg-slate-900/95 border border-purple-500/30 rounded-lg shadow-2xl shadow-purple-500/20 backdrop-blur-sm z-50 p-4 text-center'>
          <p className='text-slate-400 text-sm'>No results found for "{query}"</p>
          <p className='text-slate-500 text-xs mt-1'>Try searching for features, services, or pages</p>
        </div>
      )}
    </div>
  )
}

export default SearchBar
