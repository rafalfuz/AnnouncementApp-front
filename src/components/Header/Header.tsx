import { SyntheticEvent, useContext, useState } from "react"
import { SearchContext } from '../../context/Context'
import { Button } from "../Button/Button"
import './header.css'

export const Header = () => {

    const {search, setSearch} = useContext(SearchContext)
    const [inputValue, setInputValue] = useState(search)
    
    const handleSetSearchLocalState = (e:SyntheticEvent) => {
        e.preventDefault()
        setSearch(inputValue)
    }
    return (
    <header className='header'>
        <Button to='/' text="Announcements"/>
        <Button text="Add new ad" to='/add'/>
        <div className="searchSection">
            <form onSubmit={handleSetSearchLocalState}>
            <input value={inputValue} onChange={e=>setInputValue(e.target.value)}></input>
            <Button text='Find'/>
            </form>
        </div>
    </header>
    )
}