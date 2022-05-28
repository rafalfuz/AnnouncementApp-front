import { Button, Box, TextField } from "@mui/material"
import './header.css'

export const Header = () => {
    return (
        <header className='header'>
        <h1 className='tittle'>Announcements</h1>
        <Button className='addBtn' color='secondary' variant="contained" size='large'>Add new advert</Button>
        <Box className="searchSection">
            <TextField size='small' placeholder="Find ad..." color='secondary'/>
            <Button color="secondary" variant="contained" size='small'>Search</Button>
        </Box>
      </header>
    )
}