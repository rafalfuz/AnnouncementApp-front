import { Button, Box, TextField } from "@mui/material"
import { SyntheticEvent, useContext, useState } from "react"
import { SearchContext } from '../../context/Context'
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
        <h1 className='tittle'>Announcements</h1>
        <Button 
            className='addBtn' 
            color='secondary' 
            variant="contained" 
            size='small'
            >Add new advert
        </Button>
        <Box className="searchSection">
            <form onSubmit={handleSetSearchLocalState}>
            <input value={inputValue} onChange={e=>setInputValue(e.target.value)}></input>
            <button>Find</button>
            </form>
        </Box>
    </header>
    )
}