import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core';
import {registerBI, resetRegisterStatus } from '../../../actions/businessideas/BIActions';
import styles from './StyleRegisterBI';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import Navbar from '../../Layout/Navbar';
import Grid from "@material-ui/core/Grid";
import Footer from "../../Layout/Footer";
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const CustomCheckbox = withStyles({
    root: {
      color: '#718F94',
      '&$checked': {
        color: '#E3CFB5',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

class RegisterBI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegisteredSuccess: '',
            name: '',
            date:' ',
            description: '',
            targetFunding: '',
            needInvestor: false,
            needConsultant: false,
            open: false,
            setOpen: false,
            image:'',
            chosenFile: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 
        this.chooseFile = this.chooseFile.bind(this);
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.isRegisteredSuccess !== prevProps.isRegisteredSuccess && this.props.isRegisteredSuccess === true) {
            this.handleClickOpen();
            
            // this.setState({
            //     isRegisteredSuccess: '',
            //     name: '',
            //     date:' ',
            //     description: '',
            //     targetFunding: '',
            //     needInvestor: false,
            //     needConsultant: false,
            //     open: false,
            //     setOpen: false,
            //     file:'',
            //     chosenfile: ''
            // })  

        }

        else if (this.props.isRegisteredSuccess === false) {
            console.log('false');
        }

    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
  };

    handleClose = () => {
        this.setState({
            open: false
        })
        
        setTimeout(this.props.resetRegisterStatus(), 5000);
        this.props.history.push('/');
    
    };
    chooseFile = event => {
        console.log(event.target.files[0].name);
        this.setState({
            image: event.target.files[0],
            chosenFile: 'Uploaded file: '+ event.target.files[0].name
        })
    };

    
    onChange(e) {
        if (e.target.name === 'needInvestor' || e.target.name === 'needConsultant') {
            this.setState({
                [e.target.name] : e.target.checked

            })
        }  else {
            this.setState({
                [e.target.name] : e.target.value,
            })
        }  
    }

    getBase64 = (file, callback) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            var base64result = reader.result.split(',')[1];
            callback(base64result)
        };
       
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
     }

     handleRegisterBI = (encodedimage) => {
         
        const businessIdea = {
            name: this.state.name,
            date: this.state.date,
            description: this.state.description,
            targetFunding: this.state.targetFunding,
            image: encodedimage,
            needInvestor: this.state.needInvestor,
            needConsultant: this.state.needConsultant
        };
        console.log(JSON.stringify(businessIdea));
        this.props.registerBI(businessIdea);
        // this.handleClickOpen()

     };

    onSubmit(e) {
        e.preventDefault();
        if (!(this.state.image === '' || this.state.image === null || this.state.image === undefined)) {
            this.getBase64(this.state.image, this.handleRegisterBI)
        } else {
            const businessIdea = {
                name: this.state.name,
                date: this.state.date,
                description: this.state.description,
                targetFunding: this.state.targetFunding,
                image: '',
                needInvestor: this.state.needInvestor,
                needConsultant: this.state.needConsultant
            };
            // this.handleClickOpen();
            this.props.registerBI(businessIdea); 
        }
                
    }

  

    render() {
        const {classes} = this.props;
        return (

            <Grid container>
                <Navbar/>
                <Grid item md={2}/>
                <Grid item md={8} className={classes.formContainer} >
                    <form className={classes.form} autoComplete="off" onSubmit={this.onSubmit}>
                        <label className={classes.title}> Register Your Business Idea </label>
                            <div className={classes.content}>
                            <TextField
                                onChange={this.onChange}
                                value = {this.state.name}
                                name = 'name'
                                fullWidth
                                label="Business Idea Name"
                                required
                                className ={classes.input}
                            />

                            <TextField
                                onChange={this.onChange}
                                value = {this.state.date}
                                name = 'date'
                                fullWidth
                                label="Date of Establishment"
                                className ={classes.input}
                                type = 'date'
                                required
                                InputLabelProps={{
                                    shrink: true,
                                  }}
                            />

                            <TextField label="Description of Business Idea"
                                onChange={this.onChange}
                                value = {this.state.description}
                                name = 'description'
                                fullWidth
                                required
                                className ={classes.input}
                            />
                            <TextField label="Target Funding $"
                                onChange={this.onChange}
                                value = {this.state.targetFunding}
                                name = 'targetFunding'
                                fullWidth
                                className ={classes.input}
                                type='number'
                                required
                            />

                            <Button color="default"  className={classes.buttonFile}
                            label='My Label'startIcon={<CloudUploadIcon />}  >
                                   <input type="file" accept="image/*" id='file' style={{display:'none'}} name='image'  onChange={this.chooseFile}/>
                                   <label htmlFor='file' >

                                           Upload Business Idea Image
                                   </label>
                            </Button><br/>
                            <br/>
                            <br/>
                                <Typography className={classes.chosenFile}>{this.state.chosenFile}</Typography>
                                <br/>
                                <br/>
                            <FormControlLabel control={<CustomCheckbox checked={this.state.needInvestor} onChange={this.onChange} name="needInvestor" />}
                            label="Looking for an investor" className={classes.checkbox} />
                            <FormControlLabel control={<CustomCheckbox checked={this.state.needConsultant} onChange={this.onChange} name="needConsultant" />}
                            label="Looking for an consultant" className={classes.checkbox}/>
                            <br/>

                            <Button variant="contained" type='submit' className={classes.button}>Submit</Button>

                            <Dialog
                            className={classes.dialog}
                                open={this.state.open}
                                onClose={this.handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                >
                                <DialogContent>
                                    {/* <Card className={classes.card}>
                                        <CardActionArea> */}
                                            {/* <CardMedia className={classes.image}
                                            image={require("../../images/registersuccess.svg")}
                                            /> */}
                                            {/* <CardContent> */}
                                                <Typography gutterBottom className={classes.text}>
                                                Congratulations, your business idea has been registered successfully!
                                                </Typography>
                                            {/* </CardContent>

                                        </CardActionArea>
                                    </Card> */}

                                </DialogContent>

                            </Dialog>
                            </div>
                    </form>
                </Grid>
                <Grid item md={2}/>
                <Footer/>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => ({
      registerBI: (businessIdea) => dispatch(registerBI(businessIdea)),
      resetRegisterStatus: () => dispatch(resetRegisterStatus())
    
});

const mapStateToProps = state => ({
    isRegisteredSuccess: state.businessIdeas.isRegisteredSuccess,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RegisterBI));