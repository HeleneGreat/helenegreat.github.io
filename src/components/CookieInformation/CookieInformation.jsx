import React, { useState, useContext } from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const CookieContext = React.createContext()

export function useCookieContext() {
    return useContext(CookieContext)
}

function CookieInformation({ children }) {
    const [open, setOpen] = useState(true)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    return (
        <CookieContext.Provider value={{ open, setOpen }}>
            {children}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                onClose={handleClose}
                autoHideDuration={null}
                message="Ce site utilise des cookies uniquement pour des fins de mesure d'audience. En aucun cas elles ne feront l'objet d'un traitement."
                action={
                    <React.Fragment>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </CookieContext.Provider>
    )
}

export default CookieInformation
