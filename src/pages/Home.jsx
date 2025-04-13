import {useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import CountryList from '../components/CountryList'
import Pagination from '../components/Pagination'
import Menu from '../components/Menu'

function Home() {
    const [searchTerm, setSearchTerm] = useState('')
    const [countries, setCountries] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const countriesPerPage = 10

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch(
                searchTerm 
                ? `https://restcountries.com/v3.1/name/${searchTerm}`
                : `https://restcountries.com/v3.1/all`
            )
            const data =await response.json()
            setCountries(data)
            setCurrentPage(1)
        }
        fetchCountries()
    }, [searchTerm])

    const indexOfLast = currentPage * countriesPerPage
    const indexOfFirst = indexOfLast - countriesPerPage
    const currentCountries = countries.slice(indexOfFirst, indexOfLast)

    return (
        <div className='countries-page'>
            <h1>Countries of the world</h1>
            <div className='nav-panel'>
                <Menu/>
                {/* Строка поиска */}
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            </div>
            
            {/* Список стран */}
            <CountryList countries={currentCountries}/>
            
            {/* Пагинация */}
            <Pagination
                totalCountries={countries.length}
                countriesPerPage={countriesPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Home