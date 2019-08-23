import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/es/Paper/Paper";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/es/Divider/Divider";
import {myDetails, myName, myOccupation, myImageLink} from './../vars/homeItems'

const size = 200;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },

});

const style = {
    avatar: {height: size, width: size, marginTop: 32},
    container:{
        backgroundColor: '#F2F1E8',
    },
    container2:{
        backgroundColor: '#E34234',
    },
    detailsGrid: {
        padding: 24
    },
    divider: {
        color:'#ffffff',
        width: '100%',
        height: 2
    },
    title: {
        color: '#ffffff',
        fontSize: 44
    },
    subtitle: {
        color: '#ffffff',
        fontSize: 18
    },
    details: {
        color: '#16191a',
        fontSize: 18,
        margin: 24
    }
};

const Home = (props) => (
    <Grid container
          direction="column">
        <Paper style={style.container}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={style.container2}>

                <Avatar alt={myName} src={myImageLink}
                        style={style.avatar}/>

                <Grid container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      style={style.detailsGrid}
                >
                    <Typography style={style.title}>
                        {myName}
                    </Typography>

                    <Typography style={style.subtitle}>
                        {myOccupation}
                    </Typography>
                </Grid>

                <Divider style={style.divider}/>

            </Grid>

            <Typography style={style.details}>
                {myDetails}
            </Typography>
        </Paper>
    </Grid>
);

Home.propTypes = {};

export default withStyles(styles)(Home);