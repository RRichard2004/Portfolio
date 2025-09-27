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
            {/*<Box sx={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                my: 2, 
                height: '30px' }}>
                    <button>About Me</button>
                    <button>Technical Skills</button>
                    <button>Projects And Experience</button>
                    <button>Current Position</button>
            </Box>*/}
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
                <span><span style={{ fontWeight: 'bold', fontSize: '120%'}}>About Me:</span> I am an IT professional with strong foundations in both <strong>system support</strong> and <strong>software development</strong>. I spent four years in a general <strong>IT System Support Technician (3142/9 FEOR)</strong> position, gaining experience, obtaining the necessary qualifications, and mastering the details of day-to-day IT operations. Following this, I completed a one-year <strong>Software Development and Testing (506131203)</strong> course. My last 2 years there were extremely practice-oriented, providing excellent hands-on experience in developing real-world applications.</span>
                
                <span><span style={{ fontWeight: 'bold', fontSize: '120%'}}>Technical Skills:</span> I have developed strong skills in <strong>C#, HTML, JavaScript, TypeScript, and MySQL</strong> technologies, and gained experience with <strong>React.js, .NET Framework, Docker, and Azure</strong> environments. I have created various scripts to automate daily tasks using <strong>PowerShell</strong>, <strong>C#</strong>, and <strong>Python</strong>, ranging from installing/removing applications on new systems to converting different data files into Excel-compatible formats, which have improved the efficiency of my IT workflows.</span>
                
                <span><span style={{ fontWeight: 'bold', fontSize: '120%'}}>Projects and Professional Experience:</span> During my studies, I developed a fully functional <strong>horse racing betting simulation website</strong> and several smaller websites for technical interview rounds. I also completed a <strong>one-month professional internship in Spain</strong>, where I built a hybrid website/mobile application using the <strong>Ionic</strong> framework, gaining international experience and learning to collaborate in a collaborative, agile environment.</span>
                
                <span><span style={{ fontWeight: 'bold', fontSize: '120%'}}>Current Position and Soft Skills:</span> I currently work at <strong>NSZFH as an IT technician</strong>, where I handle user onboarding and daily IT operations. My work has developed my ability to <strong>solve problems under pressure, handle repetitive tasks, and work effectively in a team environment</strong>. I enjoy combining my <strong>practical IT experience</strong> with <strong>software development</strong>, and I am continuously seeking opportunities where I can develop tools and applications with real impact.</span>
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