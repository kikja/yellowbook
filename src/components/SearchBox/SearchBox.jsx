import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import './SearchBox.css'
import axios from 'axios';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { PersonOutlined } from '@mui/icons-material';

export default function SearchBox() {
    const [searchInput, setSearchInput] = useState('');
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    useEffect(() => {
        axios.get(`https://sheetdb.io/api/v1/7s6j03b3878ey`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(APIData)
        }
    }

    const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    })


    return (
        <div>
            <div className='container'>
                <Paper
                    sx={
                        {
                            flex: 1,
                            display: 'flex',
                            p: '2px 4px',
                            justifyContent: 'center',
                            marginLeft: 50,
                            marginRight: 50,
                            marginTop: 10
                        }
                    }
                    component="form"
                    variant="outlined" square
                >
                    <InputBase
                        onChange={(e) => searchItems(e.target.value)}
                        className='inputSearch'
                        sx={
                            {
                                margin: '7px',
                                flex: 1,
                                padding: '5px',
                                textAlign: 'center',
                                letterSpacing: '1px',
                                fontSize: '16px',
                                paddingLeft: '18px'
                            }
                        }
                        placeholder="Find a person"
                        inputProps={{ 'aria-label': 'search number' }}
                    />
                    <IconButton type="submit" sx={{ p: '15px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            <div className='container-res'>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <div className='container-res'>
                                <Card sx={
                                    {
                                        padding: 3,
                                        marginLeft: 50,
                                        marginRight: 50,
                                        height: 'auto',
                                        display:'flex'
                                    }
                                }
                                >
                                    <PersonOutlined
                                        sx={{
                                            bgcolor: '#81c784',
                                            color: '#fafafa',
                                            borderRadius: 50,
                                            padding: 1,
                                        }}
                                    />
                                    <Typography variant="subtitle1" sx={{margin: 1}}>
                                         {item.name}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{margin: 1}}>
                                        เบอร์โทรศัพท์:  {item.number}
                                    </Typography>
                                    {!item.internalNumber == "" ? 
                                    (<Typography variant="subtitle1" sx={{margin: 1}}>
                                       ต่อ:  {item.internalNumber}
                                    </Typography>) : ("")

                                    }
                                    
                                    <Typography variant="subtitle1" sx={{margin: 1}}>
                                       ประเภท:  {item.typeNumber}
                                    </Typography>
                                    
                                </Card>
                            </div>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <div>

                            </div>
                        )
                    })
                )}
            </div>

        </div>

    );
}
