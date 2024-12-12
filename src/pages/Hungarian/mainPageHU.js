import React from 'react';
import { Box, Typography } from '@mui/material';

export default function MainPage() {
    return (
        <Box sx={{ 
            width: '100%', 
            display: 'flex', 
            flexWrap: 'wrap', 
            flexDirection: 'collumn', 
            alignItems: 'center' }}>
            <Box sx={{ 
                    width: '100%', 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'space-around', 
                    p: 2, 
                    gap: 2 }}>
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
                <Typography flex={1} mx={3} minWidth={200} variant="span" fontSize={30}>Ez az oldal rólam szól és hogy milyen király vagyok</Typography>

            </Box>  
            <Box sx={{ width: '100%', my:2, mx:10, display: 'flex', flexDirection: 'column', gap: 2}}>
            
            <span style={{ fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in enim tempor, vehicula quam a, vestibulum nisl. Etiam id enim orci. Donec lectus ex, elementum id hendrerit id, accumsan molestie lectus. Quisque luctus mollis consequat. Vestibulum ligula risus, sodales sed fermentum iaculis, dapibus eget arcu. Ut eros ipsum, accumsan gravida ultricies eget, tristique vitae arcu. Nulla fringilla felis non lectus imperdiet, sit amet lacinia lacus ullamcorper. Phasellus ullamcorper justo nec ligula faucibus tincidunt. Phasellus mattis lectus id ipsum mollis consequat. Nullam aliquam mattis sagittis.</span> 
            <span style={{ fontSize: 15 }}>Aliquam interdum ipsum a leo tincidunt, vitae maximus lectus ornare. Cras id porta leo. Nulla feugiat erat pharetra feugiat rhoncus. Integer at leo a nisl ultrices tincidunt. Aliquam erat volutpat. Praesent facilisis gravida pellentesque. Aliquam maximus vel metus vel mollis. Sed malesuada velit diam, sit amet suscipit tellus malesuada non. Pellentesque risus ex, lobortis vitae aliquam eget, ultrices id nibh.</span>
            <span style={{ fontSize: 15 }}>Vivamus tempus a orci nec aliquam. Praesent ultricies, urna ut posuere egestas, diam enim aliquam nisi, in sodales ipsum lacus nec lacus. Mauris justo dolor, pulvinar id maximus vel, porta tempus urna. Nam cursus nisi id rutrum mattis. Donec rhoncus neque quis tristique auctor. Sed rutrum vestibulum vulputate. Nulla congue ex id finibus tincidunt. Ut ultricies lacus sed eleifend aliquet. Pellentesque rhoncus molestie risus ut pharetra. Vestibulum lectus felis, molestie sed nisi eget, sodales congue nisi.</span>
            <span style={{ fontSize: 15 }}>Suspendisse vehicula velit nibh, sit amet auctor tellus porttitor ut. Sed ultricies tellus diam, vel finibus sapien dictum eu. Phasellus sagittis enim quis enim efficitur pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed purus nisl, volutpat a sem sed, ornare laoreet dui. Ut scelerisque sapien sit amet erat cursus maximus. Sed turpis justo, volutpat et posuere at, finibus sed augue. Donec magna nisl, vestibulum a tincidunt ut, mattis ac ipsum. Phasellus urna mauris, placerat eget viverra vitae, volutpat nec nulla. Ut hendrerit neque eget ex lacinia vehicula at vitae tellus. Phasellus vitae lobortis tellus, vitae vestibulum libero. Aenean erat lacus, dignissim et aliquam id, rhoncus sed felis. Suspendisse potenti. Donec congue elementum ultricies. Fusce sollicitudin, est in molestie mattis, libero velit suscipit urna, ut facilisis nibh neque non lacus.</span>
            <span style={{ fontSize: 15 }}>Cras pulvinar mi nec nunc convallis, at vestibulum nibh hendrerit. Vestibulum in dui eget ante dapibus pulvinar. Morbi eget nisl quis velit aliquam iaculis eu ac sapien. Suspendisse convallis massa id elementum gravida. Nulla gravida pretium felis aliquam luctus. Fusce a nisi id tortor gravida volutpat. Nunc erat justo, placerat vel sollicitudin vitae, luctus in neque. Morbi rutrum euismod vulputate. Donec quis convallis arcu. Etiam rhoncus in tellus ac faucibus. Nullam quis magna arcu. Maecenas vulputate malesuada lorem, vitae lobortis ipsum pellentesque sed. Donec lobortis convallis commodo</span>
            </Box>
        </Box> 
    );
}