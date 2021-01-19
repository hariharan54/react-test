import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import PersonPinIcon from '@material-ui/icons/PersonPin';



const useStyles = makeStyles({
  root: {
      
    flexGrow: 1,
    position: 'fixed',
    bottom: 0,
    width:"100%"
  },
});

export default function BottomNavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // console.log(value), //0 home 1 create departments 2 create students
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        
        
        <Tab icon={<HomeIcon/>} label="Home"/>
        <Tab icon={<PersonPinIcon/>} label="Create Departments" />
        <Tab icon={<PersonPinIcon/>} label="Create Administrators" />
        
      </Tabs>
    </Paper>
  );
}