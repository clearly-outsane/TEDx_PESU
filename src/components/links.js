import React from 'react'
import { createMuiTheme, Grid, responsiveFontSizes } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import imagex from '../assets/images/speakerImages/imagex.png'
import '../styles/links.css'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

let theme = createMuiTheme({
    typography: {
        fontFamily: 'Raleway',
    },
})

theme = responsiveFontSizes(theme)

const LinksPage = () => {
    const classes = useStyles()
    return (
        <Grid
            container
            style={{ height: '100vh', transition: '0.5s', overflow: 'hidden' }}
        >
            <Hidden smDown>
                <Grid container xs={6}>
                    <img
                        src={imagex}
                        style={{ width: '100%', objectFit: 'cover' }}
                    />
                </Grid>
            </Hidden>
            <Grid
                container
                justify='center'
                xs={12}
                md={6}
                style={{ padding: '0 30px', transition: '0.3s' }}
            >
                <Grid
                    item
                    xs={12}
                    style={{ height: '20vh', marginTop: '100px' }}
                >
                    <Typography
                        style={{ maxWidth: '75%' }}
                        variant='h3'
                        gutterBottom
                    >
                        Everything in one place for your convinience
                    </Typography>
                </Grid>
                <Grid container xs={12} style={{ height: '50vh' }}>
                    <Grid container item xs={12}>
                        <Grid item xs={6} md={6}>
                            <Typography
                                display='inline'
                                style={{
                                    color: 'rgba(0,0,0,0.48)',
                                    marginRight: '10px',
                                }}
                            >
                                Submit your application
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Typography
                                display='inline'
                                style={{ color: 'red', marginRight: '10px' }}
                            >
                                A link
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={6} md={6}>
                            <Typography
                                display='inline'
                                style={{
                                    color: 'rgba(0,0,0,0.48)',
                                    marginRight: '10px',
                                }}
                            >
                                Submit your application
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Typography
                                display='inline'
                                style={{
                                    color: 'rgba(0,0,0,0.48)',
                                    marginRight: '10px',
                                }}
                            >
                                Submit your application
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={6} md={6}>
                            <Typography
                                display='inline'
                                style={{
                                    color: 'rgba(0,0,0,0.48)',
                                    marginRight: '10px',
                                }}
                            >
                                Submit your application
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Typography
                                display='inline'
                                style={{
                                    color: 'rgba(0,0,0,0.48)',
                                    marginRight: '10px',
                                }}
                            >
                                Submit your application
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        style={{ marginBottom: '30px' }}
                    >
                        <Grid item xs={6} md={6}>
                            <Typography
                                display='inline'
                                style={{
                                    color: 'rgba(0,0,0,0.48)',
                                    marginRight: '10px',
                                }}
                            >
                                Submit your application
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Typography
                                display='inline'
                                style={{
                                    color: 'rgba(0,0,0,0.48)',
                                    marginRight: '10px',
                                }}
                            >
                                Submit your application
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button
                        style={{
                            height: '40px',
                            padding: '0 15px',
                            borderRadius: '0',
                            backgroundColor: 'red',
                            color: '#fff',
                            fontSize: '12px',
                            fontWeight: 600,
                        }}
                    >
                        Register for Countdown
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LinksPage
