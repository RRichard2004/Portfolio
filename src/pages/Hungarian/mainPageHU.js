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
            flexWrap: 'wrap', 
            flexDirection: 'collumn', 
            alignItems: 'center' }}>
            <Box sx={{ 
                width: '100%', 
                display: 'flex', 
                flexWrap: 'nowrap', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-around', 
                p: 2, 
                gap: 2,
                "@media (max-width:650px)": {
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
                        Ruszó Richárd
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
            <Box sx={{ width: '100%', my:2, mx:10, display: 'flex', flexDirection: 'column', gap: 2, fontSize: 20, textAlign: 'justify'}}>
                <span>
                    <span style={{ fontWeight: 'bold', fontSize: '120%'}}>Introduction:</span> I am an IT professional with a strong foundation in both <strong>system support and software development</strong>. 
                    I spent four years gaining experience as a general IT System Support Technician <strong>(3142/9 FEOR)</strong>, earning my certification and learning the ins and outs of everyday IT operations. 
                    Following that, I completed a one-year course in <strong>Software Development and Testing (506131203)</strong>. My last 2 years here the last two years were highly practical and gave me hands-on experience in developing real-world applications.
                </span>

                <span>
                    <span style={{ fontWeight: 'bold', fontSize: '120%'}}>Technical Skills:</span> I have developed strong skills in <strong>C#, HTML, JavaScript, TypeScript, and MySQL</strong>, and I am experienced with <strong>React.js, .NET Framework, Docker, and Azure</strong>. 
                    I have built multiple small scripts to automate everyday tasks—ranging from installing/uninstalling applications on new systems to converting various data files into Excel-ready formats—which improved efficiency in IT workflows.
                </span>

                <span>
                    <span style={{ fontWeight: 'bold', fontSize: '120%'}}>Projects & Internship:</span> During my studies, I developed a fully functional <strong>horse betting simulation game</strong> and multiple small websites for technical interview rounds. 
                    I also completed a <strong>one-month internship in Spain</strong>, where I created a <strong>hybrid website/mobile application using the Ionic framework</strong>, gaining international exposure and experience working in a collaborative, agile environment.
                </span>

                <span>
                    <span style={{ fontWeight: 'bold', fontSize: '120%'}}>Current Work & Soft Skills:</span> Currently, I work at <strong>NSZFH as an IT technician</strong>, where I manage user onboarding and day-to-day IT operations. 
                    My work has honed my ability to <strong>solve problems under pressure, endure repetitive tasks, and collaborate effectively in a team environment</strong>.  
                    I enjoy combining my <strong>practical IT experience</strong> with <strong>hands-on software development</strong>, continuously seeking opportunities to create tools and applications that have a real impact.
                </span>
            </Box>
        </Box> 
    );
}