import React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

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
    height: '254px',
    padding: '32px 20px 32px 0px'
  },
  para: {
    color: theme.palette.common.black,
    ...theme.typography.mainParagraph,
    margin: 0
  },
  testbg: {
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
  const [sliderData, setSliderData] = useState({});
  const [reviews, setReviews] = useState('No reviews');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(1);

  useEffect(async () => {
    await getSliderData();
  }, []);

  const getSliderData = async () => {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json');
      setSliderData(response.data.slider);
      setReviews(response.data.slider.reviews);
    } catch (error) {
      console.log('ERROR');
      console.error(error);
    }

    // const data = await fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
    // const dataJson = await data.json();
    // setSliderData(dataJson.slider);
    // setReviews(dataJson.slider.reviews);
  }

  return (
    <div className={classes.bodyWrapper}>
      <div className={classes.body}>
        <Grid container spacing={0}>
          <Grid item xs={4} className={classes.titleRectangleWrapper}>
            <div className={classes.titleRectangle}>
              <h1 className={classes.titleText}>{sliderData.title}</h1>
            </div>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={4} className={classes.personBasicInfoContainer}>
            <h2 className={classes.personFullName}>
              {reviews[selectedIndex].name}
            </h2>
            <p className={classes.personJob}>
              {reviews[selectedIndex].position}
            </p>
          </Grid>
          <Grid item xs={6} className={classes.paragraphContainer}>
            <div>
              <p className={classes.para}>
                {reviews[selectedIndex].comment}
              </p>
              <div className={classes.paginatorRectangleWrapper}>
                <div className={classes.paginatorRectangleContainer}>
                  <div className={classes.pages}>
                    {selectedSlide} / {reviews.length}
                  </div>
                  <div className={classes.controls}>
                    <IconButton aria-label="previousElement" onClick={() => {
                      setSelectedIndex(0);
                      setSelectedSlide(1);
                    }}>
                      <FontAwesomeIcon icon={faArrowLeft} className={classes.arrow} />
                    </IconButton>
                    <IconButton aria-label="nextElement" onClick={() => {
                      setSelectedIndex(1);
                      setSelectedSlide(2);
                    }}>
                      <FontAwesomeIcon icon={faArrowRight} className={classes.arrow} />
                    </IconButton>
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
