import React, { useEffect, useState } from "react"
import {Box, Typography, Grid, useMediaQuery, useTheme} from '@mui/material'
import Countdown from 'react-countdown-simple';
import { getDaysInMonthsAndDays } from "./getDaysInMonthsAndDays";

export const CountDown = () => {
    const marriageDate = new Date(2025, 0, 25);
    const theme = useTheme();
    const fontType = useMediaQuery(theme.breakpoints.down('sm')) ? 'h4' : 'h2';
    console.log(fontType);

        const content = ({ days, hours, minutes, seconds }) =>
        <Grid container rowSpacing={1} columnSpacing={{xs: 1.5}} sx={{color:'white'}}>
            <GridItem text={days} description='Tage'/>
            <GridItem text={hours} description='Stunden'/>
            <GridItem text={minutes} description='Minuten'/>
            <GridItem text={seconds} description='Sekunden'/>
        </Grid>
    
    return <Countdown targetDate={marriageDate} renderer={content}/>
}

const GridItem = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const fontType = isMobile ? 'h4' : 'h2';
    return <Grid item>
        <Box display='flex' flexDirection={'column'}>
            <Typography width={'100%'} variant={fontType} align="center">{props.text}</Typography>
            <Typography width={'100%'} variant='h7' sx={{fontSize: isMobile ? '14px' : '20px'}}align="center">{props.description}</Typography>
        </Box>
    </Grid>
}

const MobileGrid = (props) => {
    <Grid container rowSpacing={1} sx={{color:'white'}}>
        <GridItem text='Tage'/>
        <GridItem text={props.days}/>

        <GridItem text='Stunden'/>
        <GridItem text={props.hours}/>

        <GridItem text='Minuten'/>
        <GridItem text={props.minutes}/>

        <GridItem text='Sekunden'/>
    
    </Grid>
} 

const DesktopGrid = (props) => {
    <Grid container rowSpacing={1} sx={{color:'white'}}>
        <GridItem text='Tage'/>
        <GridItem text='Stunden'/>
        <GridItem text='Minuten'/>
        <GridItem text='Sekunden'/>

        <GridItem text={props.days}/>
        <GridItem text={props.hours}/>
        <GridItem text={props.minutes}/>
        <GridItem text={props.seconds}/>
    </Grid>
} 