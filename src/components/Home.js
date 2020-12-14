import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from './ui/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleRectangleWrapper: {
    marginBottom: '80px'
  },
  titleRectangle: {
    backgroundColor: theme.palette.common.cobaltBlue,
    width: '389px',
    height: '56px',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    ...theme.typography.title,
    color: theme.palette.common.white,
  },
  personFullName: {
    fontFamily: theme.typography.persoName,
    color: theme.palette.common.black,
    fontSize: '32px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
    margin: 0,
  },
  personJob: {
    fontFamily: theme.typography.persoName,
    color: theme.palette.common.grey,
    ...theme.typography.tab,
    margin: 0,
  },
  bodyWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    ...theme.widthContainer,
    marginTop: '70px'
  },
  personBasicInfoContainer: {
    background: theme.palette.common.white,
    height: '254px',
    padding: '32px',
  },
  paragraphContainer: {
    background: theme.palette.common.white,
    // background: "red",
    height: '254px',
    padding: '32px 20px 32px 0px'
  },
  para: {
    color: theme.palette.common.black,
    ...theme.typography.mainParagraph,
    margin: 0
  },
  paragraphContainer2: {
    background: "red"
  },
  paginatorRectangleWrapper: {
    backgroundColor: theme.palette.common.cobaltBlue,
    width: '240px',
    height: '56px',
    float: 'right',
    marginTop: '6%',
    marginRight: '-17%',
  },
  paginatorRectangleContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pages: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '56px',
    ...theme.typography.paginator,
    color: theme.palette.common.white,
    marginTop: '5px'
  },
  controls: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '56px',
    borderLeft: '1px solid white',
  },
  arrow: {
    fontSize: '20px',
    color: theme.palette.common.white,
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.bodyWrapper}>
      <div className={classes.body}>
        <Grid container spacing={0}>
          <Grid item xs={4} className={classes.titleRectangleWrapper}>
            <div className={classes.titleRectangle}>
              <h1 className={classes.titleText}>Our customers love us</h1>
            </div>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={4} className={classes.personBasicInfoContainer}>
            <h2 className={classes.personFullName}>Pete Zahut</h2>
            <p className={classes.personJob}>Chef @ Maniak</p>
          </Grid>
          <Grid item xs={6} className={classes.paragraphContainer}>
            <div>
              <p className={classes.para}>
                “It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail"
              </p>
              <div className={classes.paginatorRectangleWrapper}>
                <div className={classes.paginatorRectangleContainer}>
                  <div className={classes.pages}>
                    1 / 4
                  </div>
                  <div className={classes.controls}>
                    <FontAwesomeIcon icon={faArrowLeft} className={classes.arrow} />
                    <FontAwesomeIcon icon={faArrowRight} className={classes.arrow} />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
