import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import MediaCard from '../../components/Card/Index'

const useStyles = makeStyles({
    grid: {
        padding: '100px 120px'
    },
    gridItem: {

    }

})



function Home() {

    const classes = useStyles();

    return (
       
            <Grid container spacing={2} className={classes.grid}>
                <Grid className={classes.gridItem} container item xs={12} md={6} lg={3} justifyContent="center">
                    <MediaCard />
                </Grid>
                <Grid className={classes.gridItem} container item xs={12} md={6} lg={3} justifyContent="center">
                    <MediaCard />
                </Grid>
                <Grid className={classes.gridItem} container item xs={12} md={6} lg={3} justifyContent="center">
                    <MediaCard />
                </Grid>
                <Grid className={classes.gridItem} container item xs={12} md={6} lg={3} justifyContent="center">
                    <MediaCard />
                </Grid>
                <Grid className={classes.gridItem} container item xs={12} md={6} lg={3} justifyContent="center">
                    <MediaCard />
                </Grid>
                <Grid className={classes.gridItem} container item xs={12} md={6} lg={3} justifyContent="center">
                    <MediaCard />
                </Grid>
                <Grid className={classes.gridItem} container item xs={12} md={6} lg={3} justifyContent="center">
                    <MediaCard />
                </Grid>
                <Grid className={classes.gridItem} container item xs={12} md={6} lg={3} justifyContent="center">
                    <MediaCard />
                </Grid>
                <Grid className={classes.gridItem} container item xs={12} md={6} lg={3} justifyContent="center">
                    <MediaCard />
                </Grid>
                <Grid className={classes.gridItem} container item xs={12} md={6} lg={3} justifyContent="center">
                    <MediaCard />
                </Grid>


            </Grid>
        
    )
}

export default Home
