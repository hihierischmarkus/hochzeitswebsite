import {Box, Fade, Typography, useMediaQuery, useTheme} from '@mui/material'
import { CountDown } from "./countdown";
import mobileImage from "../assets/images/mobile.jpeg"
import desktopImage from "../assets/images/desktop.jpg"

export const MainPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return <Box
                    display='flex' 
                    flexDirection='column'
                    alignItems='center'
                    sx={{
                        height:'100vh',
                        width: '100%',
                        margin: 0,
                        padding: 0,
                        backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color:'white'
                    }}
                    >
                        <Box display='flex' flexDirection='column' justifyContent='space-between' height='100vh'>
                            <Typography variant={isMobile ? 'h4' : 'h2'} sx={{letterSpacing: '0.1rem', fontWeight:300, mt:5, px:3}} align='center'>Hochzeit von Vivien & Markus</Typography>
                            <Box display='flex' flexDirection='column' alignItems='center' mt={3} justifyContent={'end'}>                                
                                <CountDown/>
                                <Typography sx={{letterSpacing: '0.1rem', fontWeight:300, mb:6, pt:8, px:3, fontSize:isMobile ? 16 : 20}} align='center' >Am 25.05.2025 ist es endlich soweit. Wir laden euch recht herzlich zu unserer Hochzeit ein. Weitere Infos folgen bald</Typography>
                            </Box>
                        </Box>
            </Box>
}