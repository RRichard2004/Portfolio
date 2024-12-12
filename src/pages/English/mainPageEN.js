import React from 'react';
import { Box, Typography } from '@mui/material';

export default function MainPage() {
    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2, gap: 2 }}>
                <Box
                    sx={{
                        aspectRatio: '1',
                        minWidth: 100,
                        maxWidth: 200,
                        minHeight: 100,
                        maxHeight: 200,
                        borderRadius: '8px',
                        marginInline:2,
                        overflow: 'hidden',
                        boxShadow: 8,
                    }}
                    >
                    <img
                        src="stock_pfp.png"
                        alt="Example"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>
                <Typography variant="h4">This is a page about myself and how great I'm</Typography>

            </Box>  
        </Box>
    );
}