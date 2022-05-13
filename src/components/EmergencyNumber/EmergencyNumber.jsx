import { Paper, Box, List, ListItem, Avatar, ListItemAvatar, ListItemText, Divider } from '@mui/material'
import './EmergencyNumber.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { LocalHospitalOutlined, BusinessOutlined } from '@mui/icons-material';


function EmergencyNumber() {
    const [APIdata, setAPIdata] = useState([''])
    useEffect(() => {
        axios.get(`https://sheetdb.io/api/v1/7s6j03b3878ey`)
            .then((incommingData) => {
                setAPIdata(incommingData.data);
            })
    }, [])

    return (
        <div className='container'>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 400,
                        height: 'auto',
                    },
                }}
            >
                <Paper elevation={3} >
                <div className='header'>
                        <LocalHospitalOutlined sx={{color:'#ef5350', height:36, width:36}}/>
                        <div className='header-text'>เบอร์ฉุกเฉิน</div>     
                    </div>
                    <Divider variant="fullWidth"/>
                    <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                        {
                            APIdata.filter(data => data.typeNumber === 'ฉุกเฉิน').map((data => {
                                return (
                                    <div>
                                        <ListItem>
                                            <ListItemAvatar >
                                                <Avatar sx={{ bgcolor: '#ef5350' }}>
                                                    <LocalHospitalOutlined className='icon' />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={data.name} secondary={data.number} />
                                        </ListItem>
                                        <Divider variant="fullWidth" component="li"/>
                                    </div>
                                )
                            }))}
                    </List>                  
                </Paper>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 400,
                        height: 'auto',
                    },
                }}
            >   
                <Paper elevation={3} >
                    <div className='header'>
                        <BusinessOutlined sx={{color:'#ffca28', height:36, width:36}}/>
                        <div className='header-text'>เบอร์หน่วยงานภายใน</div>     
                    </div>
                    <Divider variant="fullWidth"/>
                    <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper', position:'relative', overflow:'auto',  maxHeight: 280,'& ul': { padding: 0 } }}>
                        {
                            APIdata.filter(data => data.typeNumber === 'หน่วยงาน').map((data => {
                                return (
                                    <div>
                                        <ListItem>
                                            <ListItemAvatar >
                                                <Avatar sx={{ bgcolor: '#ffca28' }}>
                                                    <BusinessOutlined className='icon' />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={data.name} secondary={data.number} />
                                        </ListItem>
                                        <Divider variant="fullWidth" component="li"/>
                                    </div>
                                )
                            }))}
                    </List>                  
                </Paper>
            </Box>
        </div>
    )
}

export default EmergencyNumber