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
                    <span style={{ fontWeight: 'bold', fontSize: '120%'}}>Bemutatkozás:</span> IT szakember vagyok, erős alapokkal mind a <strong>rendszertámogatás</strong>, mind a <strong>szoftverfejlesztés</strong> területén. 
                    Négy évet töltöttem el általános <strong>IT rendszertámogató technikus (3142/9 FEOR)</strong> pozícióban, tapasztalatot szerezve, megszerezve a szükséges képesítést és elsajátítva a mindennapi IT működtetés részleteit. 
                    Ezt követően elvégeztem egy egyéves <strong>Szoftverfejlesztés és Tesztelés (506131203)</strong> tanfolyamot. Az utolsó 2 évem itt rendkívül gyakorlatorientált volt, így remek gyakorlati tapasztalatot nyújtott valós alkalmazások fejlesztésében.
                </span>
 
                <span>
                    <span style={{ fontWeight: 'bold', fontSize: '120%'}}>Technikai készségek:</span> Erős készségeket fejlesztettem ki a <strong>C#, HTML, JavaScript, TypeScript és MySQL</strong> technológiákban, valamint tapasztalatot szereztem <strong>React.js, .NET Framework, Docker és Azure</strong> környezetekben. 
                    Több különböző szkriptet készítettem a mindennapi feladatok automatizálására <strong>PowerShell</strong>, <strong>C#</strong> és <strong>Python</strong> nyelveken, például az új rendszereken történő alkalmazások telepítésétől/eltávolításától kezdve a különböző adatfájlok Excel-kompatibilis formátumba való konvertálásáig, amelyek javították az IT munkafolyamataim hatékonyságát.
                </span>

                <span>
                    <span style={{ fontWeight: 'bold', fontSize: '120%'}}>Projektek és szakmai gyakorlat:</span> Tanulmányaim során fejlesztettem egy teljesen működőképes <strong>lóverseny fogadási szimulációs weboldalt</strong> és több kisebb weboldalt technikai interjúkörökre. 
                    Elvégeztem egy <strong>egy hónapos spanyolországi szakmai gyakorlatot</strong> is, ahol hibrid weboldal/mobil alkalmazást készítettem az <strong>Ionic</strong> keretrendszer használatával, nemzetközi tapasztalatot szerezve és megtanulva együttműködni kollaboratív, agilis környezetben.
                </span>

                <span>
                    <span style={{ fontWeight: 'bold', fontSize: '120%'}}>Jelenlegi munkahelyem és soft skillek:</span> Jelenleg az <strong>NSZFH-nál dolgozom IT technikusként</strong>, ahol a felhasználók bevezetését és a mindennapi IT műveleteket végzem. 
                    A munkám fejlesztette azon képességemet, hogy <strong>nyomás alatt oldjam meg a problémákat, elviseljem az ismétlődő feladatokat, és hatékonyan működjek együtt csapatkörnyezetben</strong>.  
                    Szeretem ötvözni a <strong>gyakorlati IT tapasztalatomat</strong> a <strong>szoftverfejlesztéssel</strong>, és folyamatosan olyan lehetőségeket keresek, ahol valódi hatással bíró eszközöket és alkalmazásokat fejleszthetek.
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
                                    <a href="https://bored-bets.vercel.app" target="_blank" rel="noopener noreferrer" className='portfolioCard boredbets'><a>boredBets</a><span>Teljesen automatizált lóversenyfogadás szimulátor</span></a>
                                    <a href="https://pfc-frontend-pearl.vercel.app" target="_blank" rel="noopener noreferrer" className='portfolioCard PfC'><a>PfC Login</a><span>Egyszerű hitelesítő weboldal</span></a>
                                    <a href="https://github.com/bag0ly/cruix" target="_blank" rel="noopener noreferrer" className='portfolioCard cruix'><a>Cruix</a><span>Ügyfélprojekt a katolikus műemlékekről<br/>Fejlesztése megszakadt</span></a>
                                    <a href="https://github.com/RRichard2004/Intern_EduApp" target="_blank" rel="noopener noreferrer" className='portfolioCard eduapp'><a>Education App</a><span>Többplatformos Ionic app, amely több forráson való eligazodást segíti.</span></a>
            
                                </div>
                        </Box>
        </Box> 
    );
}