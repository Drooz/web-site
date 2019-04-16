import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import useInfiniteScroll from '../../hooks/useInfiniteScroll/useInfiniteScroll';



const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  paper: {
    maxWidth: 1000,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
  },
});

var end = 50;
var start = 0;



function AutoGridNoWrap(props) {
  const { classes } = props;

    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      start = end + 1 ;
      end = end + 50 ;
      console.log("START ", start)
      console.log("END ", end) 
      setIsFetching(false);
    }, 2000);
  }

  return (
    
    <div className={classes.root}>
    <ul className="list-group mb-2">
      {props.users.slice(0,end).map(item => (
                
                  <Paper className={classes.paper} key={item.id}>
                    <Grid container wrap="nowrap" spacing={16}>
                      <Grid item>
                        <Avatar>{item.name[0]}</Avatar>
                      </Grid>
                      <Grid item xs>
                        <Typography>{item.name} <br/>{item.mobile_number}</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                                

            ))}
            {isFetching && 'Fetching more list items...'}
      </ul>
    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);