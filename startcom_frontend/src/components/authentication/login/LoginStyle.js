const style = (theme) => ({
    form: {
        fontFamily: theme.font
    },
        buttonWrapper: {
            outline: "none",
            "&:hover": {
                backgroundColor: "transparent",
            },
            "&:focus": {
                outline: "none",
                border: "none"
            },
        },
        label: {
            color: theme.color.primary3,
            fontFamily: theme.font
        },
        formInput: {
            
            border: "none",
            padding: "12px 15px",
            margin: "5px 10px ",
            width: "80%",
            outline: "none",
            '& label.Mui-focused': {
                color: theme.color.primary1,
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: theme.color.primary1,
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: theme.color.primary3,
              }
        },
        successBtn: {
            outline: "none",
            fontFamily: theme.font,
            
            color: theme.color.primary3,
            fontSize: 13,
            padding: "10px 30px",
            // letterSpacing: 1,
            textTransform: "uppercase",
            margin: "10px 0",

            backgroundColor: 'transparent',
            "&:focus": {
                outline: "none"
            },
            "&:hover":{
              backgroundColor: 'transparent',
            }
        },
        progress: {
            marginTop: "5%"
        },
        icon: {
            color: "white"
        },
        registerBtn: {
            color: theme.color.primary1,
            fontFamily: theme.font,
            outline: "none",
        
          backgroundColor: theme.color.primary3,
                
                border: "1px",
                borderColor: theme.color.primary3,
        
            padding: "10px 30px",
            letterSpacing: 1,
            textTransform: "uppercase",
            transition: "all 350mx ease-in-out",
            margin: "20px 0",
            "&:hover": {
                transition: "all 350ms ease-in-out",
                backgroundColor: theme.color.primary3,
                color: 'white',
                border: "1px",
                borderColor: theme.color.primary3,
                outline: "none"
            },
            "&:focus": {
                outline: "none"
            }
        },
        input: {
            fontFamily: "'Quicksand', sans-serif;",
        },
        customError: {
            color: "red",
        },
        tick: {
            marginTop: "5%"
        }
    


})
export default style;