import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function MainPage() {
    return (
        <Box sx={{ 
            width: '100%', 
            display: 'flex', 
            height: '100%',
            flexWrap: 'wrap', 
            flexDirection: 'collumn', 
            justifyContent: 'center',
            alignItems: 'center' }}>
            <Box sx={{ 
                width: '100%', 
                display: 'flex', 
                flexWrap: 'nowrap', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-around', 
                marginX: 10,
                p: 2, 
                gap: 2,
                "@media (max-width:800px)": {
                    flexDirection: "column",
                },
            }}>
                <Box
                    sx={{
                        aspectRatio: '1',
                        minWidth: 100,
                        maxWidth: 200,
                        minHeight: 100,
                        maxHeight: 200,
                        borderRadius: '50% 25px 50% 25px',
                        marginInline: 2,
                        padding: 1,
                        overflow: 'hidden',
                        boxShadow: 10,
                        border: "2px black solid",
                        flexShrink: 0  // Prevent image from shrinking
                    }}
                >
                    <img
                        src="profileP.jpg"
                        alt="Example"
                        style={{ 
                            width: '100%', 
                            height: '100%',
                            borderRadius: '50%',
                        }}
                    />
                </Box>
                <Box
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'flex-start',
                        margin: 0, 
                        padding: 2,
                        flex: 1,  // Take remaining space
                        minWidth: 0  // Allow shrinking below content size
                    }}
                >
                    <Typography 
                        mx={1} 
                        variant="body1" 
                        fontSize={35} 
                        sx={{ 
                            textAlign: 'flex-end', 
                            wordWrap: 'break-word',
                            fontWeight: 'bold',
                            letterSpacing: 1,
                        }}
                    >
                        Ruszo Richard
                    </Typography>
                    <Typography 
                        mx={3} 
                        variant="body5" 
                        fontSize={25} 
                        sx={{ 
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <a 
                            href="tel:+36303137120" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ textDecoration: "none", color: "inherit", display: "inline-flex", alignItems: "center", gap: "8px" }}
                            >
                            <FaPhoneAlt /> +36 30 313 7120
                        </a>
                    </Typography>
                    <Typography 
                        mx={3}  
                        variant="body5" 
                        fontSize={25} 
                        sx={{ 
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <a 
                            href="mailto:ricsiruszo90@gmail.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ textDecoration: "none", color: "inherit", display: "inline-flex", alignItems: "center", gap: "8px" }}
                            >
                            <IoIosMail /> ricsiruszo90@gmail.com
                        </a>
                    </Typography>
                    <Typography 
                        mx={3} 
                        variant="body5" 
                        fontSize={25} 
                        sx={{ 
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <a 
                            href="https://github.com/RRichard2004" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ textDecoration: "none", color: "inherit", display: "inline-flex", alignItems: "center", gap: "8px" }}
                            >
                            <FaGithub /> RRichard2004
                        </a>
                    </Typography>
                    <Typography 
                        mx={3} 
                        variant="body5" 
                        fontSize={25} 
                        sx={{ 
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <a 
                            href="https://www.linkedin.com/in/richard-ruszo-27b3ab311" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ textDecoration: "none", color: "inherit", display: "inline-flex", alignItems: "center", gap: "8px" }}
                            >
                            <FaLinkedin />richard-ruszo
                        </a>
                    </Typography>
                </Box>
            </Box> 
            <Box sx={{ 
                width: '80%', 
                maxWidth: 1000, 
                my:2, 
                mx:10, 
                display: 'flex', 
                alignItems: 'center',
                flexDirection: 'column', 
                gap: 2, 
                fontSize: 20, 
                textAlign: 'justify',
                }}>
                <span> 
                    I'm a <strong>Software Developer</strong> who works with <strong>C#, JavaScript/TypeScript, React.js, .NET, and Azure</strong>. I got my start with a <strong>four-year IT System Support certificate</strong> in school, followed by a <strong>focused year learning Software Development and Testing</strong>. </span><span> Right now, I'm working in <strong>IT Helpdesk support</strong>, which has been incredibly valuable. I get to see firsthand how people actually use software and where they run into problems. This really shapes how I build things—I focus on making applications that are not just powerful, but also <strong>intuitive and easy to support</strong>. </span><span> I've worked on a variety of projects, from <strong>desktop apps to full-stack web solutions</strong>, and even built a <strong>mobile app with Ionic during an internship in Spain</strong>. I'm now ready to move into a full-time <strong>software development role</strong>, where I can use my unique blend of technical skill and user-focused thinking. 
                </span>
            </Box>
            <Box sx={{ 
                width: '80%', 
                maxWidth: 1500, 
                my:2, 
                mx:10, 
                display: 'flex', 
                alignItems: 'center',
                flexDirection: 'column', 
                gap: 2, 
                }}>
                    <div style={{ 
                        display: 'flex', 
                        gap: '16px',  
                        flexWrap: 'wrap', 
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                        <a href="https://bored-bets.vercel.app" target="_blank" rel="noopener noreferrer" className='portfolioCard boredbets'><a>boredBets</a><span>A fully automated horse betting simulation website</span></a>
                        <a href="https://pfc-frontend-pearl.vercel.app" target="_blank" rel="noopener noreferrer" className='portfolioCard PfC'><a>PfC Login</a><span>Simple Sign in/out website with persistent login</span></a>
                        <a href="https://github.com/bag0ly/cruix" target="_blank" rel="noopener noreferrer" className='portfolioCard cruix'><a>Cruix</a><span>Client project about catholic monuments - stopped development</span></a>
                        <a href="https://github.com/RRichard2004/Intern_EduApp" target="_blank" rel="noopener noreferrer" className='portfolioCard eduapp'><a>Education App</a><span>Multiplatform Ionic application used to navigate through multiple sources</span></a>

                    </div>
            </Box>
        </Box> 
    );
}