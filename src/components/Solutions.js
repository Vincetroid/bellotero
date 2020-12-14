import React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleRectangleWrapper: {
    marginBottom: '32px'
  },
  titleRectangle: {
    backgroundColor: theme.palette.common.cobaltBlue,
    height: '56px',
    width: 'fit-content',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '4px',
    paddingLeft: '4px',
    paddingRight: '4px',
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
    height: '254px',
  },
  paragraphContainer: {
    background: theme.palette.common.white,
    height: '254px',
    padding: '32px 20px 32px 0px'
  },
  para: {
    color: theme.palette.common.black,
    ...theme.typography.secondaryParagraph,
    margin: 0,
    width: '349px',
    paddingTop: '32px'
  },
  testbg: {
    background: "red"
  },
  testbg2: {
    background: "blue"
  },
  paginatorRectangleWrapper: {
    backgroundColor: theme.palette.common.cobaltBlue,
    width: '240px',
    height: '56px',
    float: 'right',
    marginTop: '6%',
    marginRight: '-17%',
  },
  calculatorContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridCalculator: {
    display: 'grid',
    gridGap: '1rem',
    gridTemplateRows: '126px 126px 140px',
    height: '390px',
    flex: 0.6,
  },
  slider: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sliderMIS: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sliderProcessInvoices: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  resultBigNumbers: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sliderLabel: {
    display: 'flex',
    width: '157px',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: '5px'
  },
  label: {
    ...theme.typography.label,
  },
  inputWrapper: {
    width: '190px',
    height: '38px',
    padding: '6px 2px',
    borderRadius: '4px',
    border: '1px solid #d6dcff',
    background: theme.palette.common.white,
    position: 'absolute',
    top: '12px',
    right: '0',
  },
  input: {
    width: '134px',
    height: '40px',
    float: 'right',
    color: theme.palette.common.black,
    fontFamily: 'Roboto',
    fontSize: '36px',
    fontWeight: '500',
    lineHeight: '1.11',
    letterSpacing: '0.77px',
    textAlign: 'right',
  },
  dollarSign: {
    width: '15px',
    height: '40px',
    opacity: '0.24',
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontSeight: '500',
    lineHeight: '1.67',
    letterSpacing: '0.51px',
    marginLeft: '6px',
  },
  inputWrapperPI: {
    width: '74px',
    height: '38px',
    padding: '6px 2px',
    borderRadius: '4px',
    border: '1px solid #d6dcff',
    background: theme.palette.common.white,
    position: 'absolute',
    top: '12px',
    right: '0',
  },
  inputPI: {
    width: '67px',
    height: '40px',
    float: 'right',
    color: theme.palette.common.black,
    fontFamily: 'Roboto',
    fontSize: '36px',
    fontWeight: '500',
    lineHeight: '1.11',
    letterSpacing: '0.77px',
    textAlign: 'right',
  },
  dollarSignBold: {
    width: '22px',
    height: '40px',
    margin: '28px 0px 12px 0',
    fontFamily: 'Roboto',
    fontSize: '36px',
    fontWeight: '500',
    lineHeight: '1.11',
    letterSpacing: '0.77px',
    color: theme.palette.common.cobaltBlue,
  },
  resultBigNumbers: {
    background: "green",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  estimatedCostFoodSavingsWrapper: {
    position: 'relative',
    background: "aqua",
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  estimatedCostFoodSavingsWrapperAlign: {
    position: 'relative',
    background: "aqua",
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  yourEstimatedAnnualSavingsWrapper: {
    position: 'relative',
    background: "aqua",
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  estimatedCostFoodSavings: {
    width: '188px',
    height: '72px',
    margin: '0 0 8px 8px',
    fontFamily: 'Roboto',
    fontSize: '72px',
    fontWeight: '500',
    lineHeight: '1',
    letterSpacing: '1px',
    textAlign: 'right',
    color: theme.palette.common.cobaltBlue,
  },
}));

function Home() {
  const classes = useStyles();
  const [calculatorData, setCalculatorData] = useState({
    title: '',
    description: ''
  });
  const [valueMIS, setValueMIS] = useState(30);
  const [valuePI, setValuePI] = useState(7);

  useEffect(async () => {
    await getCalculatorData();
  }, []);

  const getCalculatorData = async () => {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json');
      setCalculatorData(response.data.calculator);
      console.log('response.data.calculator');
      console.log(response.data.calculator);
    } catch (error) {
      console.log('ERROR');
      console.error(error);
    }
  }

  const handleChangeMIS = (event, newValue) => {
    setValueMIS(newValue);
  };

  const handleInputChangeMIS = (event) => {
    setValueMIS(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlurMIS = () => {
    if (valueMIS < 0) {
      setValueMIS(0);
    } else if (valueMIS > 100) {
      setValueMIS(100);
    }
  };



  const handleChangePI = (event, newValue) => {
    setValuePI(newValue);
  };

  const handleInputChangePI = (event) => {
    setValuePI(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlurPI = () => {
    if (valuePI < 0) {
      setValuePI(0);
    } else if (valuePI > 100) {
      setValuePI(100);
    }
  };

  return (
    <div className={classes.bodyWrapper}>
      <div className={classes.body}>
        <Grid container spacing={0} >
          <Grid item xs={4} className={classes.titleRectangleWrapper}>
            <div className={classes.titleRectangle}>
              <h1 className={classes.titleText}>{calculatorData.title.substring(0,14)}</h1>
            </div>
            <div className={classes.titleRectangle}>
              <h1 className={classes.titleText}>{calculatorData.title.substring(15,27)}</h1>
            </div>
            <p className={classes.para}>
              {calculatorData.description}
            </p>
          </Grid>
          <Grid item xs={8}>
            <div className={classes.calculatorContainer}>
              <div className={classes.gridCalculator}>
                {/* <div className={classes.sliderMIS}> */}
                <div className={classes.slider}>
                  <div className={classes.sliderLabel}>
                    <p className={classes.label}>
                      Monthly ingredient spending
                    </p>
                  </div>
                  <Slider 
                    min={10}
                    max={100}
                    step={1}
                    value={valueMIS}
                    onChange={handleChangeMIS}
                    aria-labelledby="continuous-slider-mis"
                  />
                  <div className={classes.inputWrapper}>
                    <span className={classes.dollarSign}>$</span>
                    <Input
                      className={classes.input}
                      value={valueMIS}
                      margin="none"
                      onChange={handleInputChangeMIS}
                      onBlur={handleBlurMIS}
                      inputProps={{
                        'aria-label': 'naked',
                        step: 1,
                        min: 10,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'continuous-slider-mis',
                      }}
                    />
                  </div>
                </div>
                <div className={classes.slider}>
                  <div className={classes.sliderLabel}>
                    <p className={classes.label}>
                      Full-time employees that process invoices
                    </p>
                  </div>
                  <Slider 
                    min={1}
                    max={10}
                    step={1}
                    value={valuePI}
                    onChange={handleChangePI}
                    aria-labelledby="continuous-slider-pi"
                  />
                  <div className={classes.inputWrapperPI}>
                    <Input
                      className={classes.inputPI}
                      value={valuePI}
                      margin="none"
                      onChange={handleInputChangePI}
                      onBlur={handleBlurPI}
                      inputProps={{
                        'aria-label': 'naked',
                        step: 1,
                        min: 1,
                        max: 10,
                        type: 'number',
                        'aria-labelledby': 'continuous-slider-pi',
                      }}
                    />
                  </div>
                </div>
                <div className={classes.resultBigNumbers}>
                  <div className={classes.estimatedCostFoodSavingsWrapper}>
                    <div className={classes.estimatedCostFoodSavingsWrapperAlign}>
                      <div className={classes.quantity}>
                        <span className={classes.dollarSignBold}>$</span>
                        <span className={classes.estimatedCostFoodSavings}>8.611</span>
                      </div>
                        <span className={classes.label}>Estimated cost food savings</span>
                   </div>
                  </div>
                  <div className={classes.yourEstimatedAnnualSavingsWrapper}>
                    <div className={classes.quantity}>
                      <span className={classes.dollarSignBold}>$</span>
                      <span className={classes.estimatedCostFoodSavings}>36.211</span>
                    </div>
                      <span className={classes.label}>Your estimated annual savings</span>
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
