import { useEffect, useState } from "react";
import { Accordion as MyAccordion, AccordionDetails as MyAccordionDetails, AccordionSummary as MyAccordionSummary } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { withStyles, Typography } from "@material-ui/core";
import MyModal from "./modals";

const Accordion = withStyles({
    root:{
        backgroundColor: 'transparent',
        border: 'thin solid #cacaca',
        boxShadow: 'none',
        '&$expanded':{
            margin: '0'
        }
    },
    expanded:{}
})(MyAccordion);

const AccordionSummary = withStyles({
    root:{
        fontWeight: 'bold'
    }
})(MyAccordionSummary);

const AccordionDetails = withStyles(theme => ({
    root:{
        display: 'block',
        backgroundColor: 'white',
        '& p+div':{
            marginTop: theme.spacing(1),
        },
        '& div':{
            position: 'relative',
            paddingBottom: '56.25%',
            marginBottom: theme.spacing(2),
            '& iframe':{
                position: 'absolute',
                width: '100%',
                height: '100%'
            },
            '& img':{
                position: 'absolute',
                maxWidth: '100%',
                height: '100%'
            }
        },
        '& a':{
            textDecoration: 'none'
        },
        '& p':{
            margin: '0'
        }
    }
}))(MyAccordionDetails);

export default function Accord({active}){
    const [expanded, setExpanded] = useState('panel1');
    useEffect(() => setExpanded('panel1'), [active]);
   
    return(
        <>
            {/* Acordions block 1 */}
            {active === 0 && <div>
                <Accordion expanded = {expanded === 'panel1'} TransitionProps={{ unmountOnExit: true }}
                 onClick = {() => setExpanded('panel1')}>
                    <AccordionSummary expandIcon = {<ExpandMore/>}>
                        What is FreeSHOUTcast?
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            FreeSHOUTcast provides Free Online Radio Servers. You can get your own server and start your internet radio station for free!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded = {expanded === 'panel2'} TransitionProps={{ unmountOnExit: true }}
                 onClick = {() => setExpanded('panel2')}>
                    <AccordionSummary expandIcon = {<ExpandMore/>}>
                        Is the service really free?
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>                        
                            Yes, FreeSHOUTcast completely free, this is not a demo or trial.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded = {expanded === 'panel3'} TransitionProps={{ unmountOnExit: true }}
                 onClick = {() => setExpanded('panel3')}>
                    <AccordionSummary expandIcon = {<ExpandMore/>}>
                        What's the trick?
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>                        
                            There is no trick, we created this service for online radio enthusiasts. You can try streaming online, share favorite music or become a radio DJ for free.
                        </Typography>
                    </AccordionDetails>
                </Accordion> 
            </div>}

            {/* Acordions block 2 */}
            {active === 1 && <div>
                <Accordion expanded = {expanded === 'panel1'} TransitionProps={{ unmountOnExit: true }}
                 onClick = {() => setExpanded('panel1')}>
                    <AccordionSummary expandIcon = {<ExpandMore/>}>
                        What is AutoDJ?
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            AutoDJ lets you upload music and pre-recorded shows to your free radio server (like a free music cloud) and create playlists online so you can listen and share your stream on the Internet. Everything can be accessed via your web browser, not need to install anything on your computer.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded = {expanded === 'panel2'} TransitionProps={{ unmountOnExit: true }}
                 onClick = {() => setExpanded('panel2')}>
                    <AccordionSummary expandIcon = {<ExpandMore/>}>
                        Playlist Setup
                    </AccordionSummary>
                    <AccordionDetails>
                            <Typography>
                                To learn how to add tracks to a playlists in AutoDJ, watch the video
                            </Typography>
                            <div>
                                <iframe title = 'add track' src="//www.youtube.com/embed/s307CQqzo4g"/>
                            </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded = {expanded === 'panel3'} TransitionProps={{ unmountOnExit: true }}
                 onClick = {() => setExpanded('panel3')}>
                    <AccordionSummary expandIcon = {<ExpandMore/>}>
                            How many tracks can I upload?
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You have 1GB of disc space for your tracks. If it’s full, remove old tracks to upload new.
                        </Typography>
                    </AccordionDetails>
                </Accordion> 

                <Accordion expanded = {expanded === 'panel4'} TransitionProps={{ unmountOnExit: true }}
                 onClick = {() => setExpanded('panel4')}>
                    <AccordionSummary expandIcon = {<ExpandMore/>}>
                            How to activate AutoDJ (Centova Cast Control Panel)
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <p>When you get a new server, AutoDJ is disabled by default. To enable AutoDJ, perform the instructions described below. </p>
                        <br/>
                        <p>1. Stop your server</p>
                        <MyModal url = 'https://img.fastcast4u.com/content/tutorials/enable1.jpg'/>
                        <p>{'2. Go to Settings -> AutoDJ -> Permitted and enabled.'}</p>
                        <MyModal url = 'https://img.fastcast4u.com/content/tutorials/enable2.jpg'/>
                        <p>{'3. Select -> AutoDJ -> Permitted and enabled and click Update'}</p>
                        <MyModal url = 'https://img.fastcast4u.com/content/tutorials/enable3.jpg'/>
                        <p>4. AutoDJ icon should appear in the menu</p>
                        <MyModal url = 'https://img.fastcast4u.com/content/tutorials/enable4.jpg'/>
                        <b>Notice: The server will not start unless there will be some files uploaded onto the server and added to a playlist.</b>
                        <br/>
                        <p>{'Once you have enabled AutoDJ you can upload some audio files onto the server by selecting AutoDJ -> Files -> Upload.'}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion> 

                <Accordion expanded = {expanded === 'panel5'} TransitionProps={{ unmountOnExit: true }}
                 onClick = {() => setExpanded('panel5')}>
                    <AccordionSummary expandIcon = {<ExpandMore/>}>
                        How to upload your audio files to AutoDJ? (Centova Cast Control Panel)
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p style = {{fontSize: 'large'}}>To learn how to add tracks to playlists in AutoDJ see the tutorial below:</p>
                            <br/>
                            <p>1. Select MEDIA hyperlink in the panel on the left side of Centova Control Panel, under the AutoDJ section</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/centovacast/media.jpg'/>
                            <p>2. Drag and drop an artist, an album or a song of your choice into the desired playlist. Note that you can hold CTRL button in order to select multiple entries</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/centovacast/medialibrary.jpg'/>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/centovacast/upload-select-album.jpg'/>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/centovacast/upload-select-song.jpg'/>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/centovacast/upload-draganddrop.jpg'/>
                            <p>3.In order to go back to the main Centova Control Panel click RETURN at the bottom of the page.</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/centovacast/media-upload-return.jpg'/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>}

            {/* Block 3 */}
            {active === 2 && <div>
                <Accordion expanded = {expanded === 'panel1'} TransitionProps={{ unmountOnExit: true }}
                 onClick = {() => setExpanded('panel1')}>
                    <AccordionSummary expandIcon = {<ExpandMore/>}>
                        How to set up a live stream? (Centova Cast Control Panel and Mixxx)
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>If you would like to start broadcasting live using Mixxx, make sure you have all the software required:</p>
                            <p><b>Download</b> and <b>install</b> Mixxx: 
                                <a href = 'https://www.mixxx.org/download/'>mixxx.org/download</a>
                            </p>
                            <p><b>Download</b> Lame MP3 codec and install it having installed Mixxx first. </p>
                            <p>1. First of all, if you would like to use AutoDJ and broadcast live using Mixxx, you need to create at least one DJ account in Centova Cast Control Panel by selecting the DJ option in the menu of Centova Cast Control Panel.</p>
                            <p>Restart the server after adding each DJ account. Only one DJ can be connected to the server at the time.</p>
                            <p>If you do not use the AutoDJ feature or have a server without AutoDJ, you can skip this first step.</p>
                            <p>2.<b>Open</b> Mixxx and select <b>Options</b> and <b>Preferences:</b></p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/mixxx/mixxx4.jpg'/>
                            <p>3. If you would like to use a <b>microphone</b>, select it in the <b>Input</b> devices section.</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/mixxx/mixxx5.jpg'/>
                            <p>4. To configure the connection to your Radio Server, select <b>Live Broadcasting</b> in the menu.</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/mixxx/mixxx6.jpg'/>
                            <p>5. <b>Open</b> the Centova Cast Control Panel of your Radio Station and copy the following details from the <b>Quick link</b> section of your server:</p>
                            <p>- Hostname (1)</p>
                            <p>- Port number (2)</p>
                            <p>- as the password use the password and username of the DJ account that you have created separated by a colon (:), e.g. "testdj:mypassword" (3) or source password that you have received by email.</p>
                            <p>- Mount and Login – leave empty as presented below:</p>
                            <br/>
                            <b>For a server with AutoDJ and a DJ account:</b>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/mixxx/mixxx_a.jpg'/>
                            <p><b>A server with no AutoDJ and no DJ account:</b></p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/mixxx/mixxx_b.jpg'/>
                            <p>6. Fill in Stream details, it is up to you what details will you use. These are Stream Details that will be seen by your listeners. We also recommend selecting the Public server option and UTF-8 encoding for metadata.</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/mixxx/mixxx_7.jpg'/>
                            <p>7. Select the bitrate (audio quality) of the stream. If you use AutoDJ the bitrate of your live stream should be the same as the bitrate of your server/AutoDJ. If you do not use AutoDJ make sure that broadcasting bitrate does not exceed the maximum bitrate of your server. You can check the maximum broadcasting bitrate of your server in the Quick links section of your Centova Cast Control Panel. </p>
                            <p>Select the audio coded for your stream. We recommend broadcasting in MP3 file format because it is supported by most of the players on the Intenet.</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/mixxx/mixxx_8.jpg'/>
                            <p>Click <b>Enable Live Broadcasting</b> to connect to the server and start broadcasting live.</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/mixxx/mixxx1.jpg'/>
                            <p>You should see a confirmation that Mixxx has been successfully connected to the server:</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/mixxx/mixxx_10.jpg'/>
                            <p>If you see the same message as below, sure that you have downloaded and installed the <a href = 'https://billing.fastcast4u.com/downloads.php?action=displaycat&catid=1'>Lame MP3 codec from our website</a></p>
                            <br/>
                            <p><b>Important: Restart (close and open) Mixxx software after installing the codec.</b></p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/mixxx/mixxx3.jpg'/>
                            <p>Untick the <b>Enable Live Broadcasting</b> option to disconnect from the server.</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/mixxx/mixxx_9.jpg'/>
                            <p>You are ready to start broadcasting live!</p>
                            <a href = 'https://www.mixxx.org/manual/latest/chapters/djing_with_mixxx.html'>Learn more about DJing using Mixxx</a>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded = {expanded === 'panel2'} TransitionProps={{ unmountOnExit: true }}
                 onClick = {() => setExpanded('panel2')}>
                    <AccordionSummary expandIcon = {<ExpandMore/>}>
                        How to set up a live stream? (Centova Cast Control Panel and BUTT)
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>                        
                            <p><b>If you do not have all required software yet, <a href = 'http://butt.sourceforge.net/'>download and install B.U.T.T. (Broadcast Using This Tool).</a> </b></p>
                            <b>This simple app does not allow creating any playlists, so it can be used to broadcast the sound from your microphone, line-in input, an external mixer of from a different software.</b>
                            <p>1. Before you start the configuration process, log in to the Centova Cast Panel and select the Quick Links section. </p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/centovacast/quicklinks.jpg'/>
                            <p>2. Find ShoutCast/Icecast server details under Live Source Connections:</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/sam/centova-livesource.jpg'/>
                            <p>If you would like to use AutoDJ and broadcast live using BUTT, you need to create at least one DJ account in Centova Cast Control Panel by selecting the DJ option in the menu of Centova Cast Control Panel.</p>                      
                            <a href = 'https://fastcast4u.com/help?id=37'>Check this tutorial to see how to create DJ accounts</a>
                            <p>Restart the server after adding each DJ account. Only one DJ can be connected to the server at the time.</p>
                            <p>If you do not use the AutoDJ feature or have a server without AutoDJ, you can skip this first step.</p>
                            <p>3. Open B.U.T.T software and select <b>Settings</b></p>
                            <br/>
                            <p>4. You should be able to view the Settings page as presented below, select <b>ADD</b> Server</p>
                            <MyModal url = 'https://img.fastcast4u.com/help/butt11.jpg'/>
                            <p>5. Open your Cantova Cast Panel to copy the encoder settings to BUTT like presented below:</p>
                            <MyModal url = 'https://img.fastcast4u.com/help/butt5.jpg'/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded = {expanded === 'panel3'} TransitionProps={{ unmountOnExit: true }}
                 onClick = {() => setExpanded('panel3')}>
                    <AccordionSummary expandIcon = {<ExpandMore/>}>
                        How to set up a live stream? (Centova Cast Control Panel and Winamp)
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>                        
                            <p><b>If you do not have all the required software yet, you can easily <a href = 'https://billing.fastcast4u.com/downloads.php'>download Winamp and SHOUTcast DSP Plugin from our website.</a></b></p>
                            <br/>
                            <p>Before you start the configuration process, log in to the Centova Cast Panel and select the Quick Links section. </p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/centovacast/quicklinks.jpg'/>
                            <p>Find ShoutCast/Icecast server details under Live Source Connections:</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/sam/centova-livesource.jpg'/>
                            <p>Open Winamp with a DSP plugin installed. If your DSP plugin did not open, then push CTRL + P and enter DSP/Effects under Plug-ins tab. Then just double click Nullsoft SHOUTcast Source DSP.</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/dspplugin.png'/>
                            <p>You should be able to view Winamp with a DSP plugin like presented below:</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/winampdsp.png'/>
                            You will see an <b>Encoder Settings</b> button if you selected the AAC codec or a list with <b>Encoder Settings</b> if you selected MP3.
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/aacview.png'/>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/mp3codec.png'/>
                            <p>A window with a bitrate slider will open. Select an appropriate bitrate. Remember, not to exceed your maximum limit, you can easily check it in Centova Cast Control Panel. </p>
                            <p><em><small>(Note: If you use Auto DJ the bitrate of your live stream should match the bitrate set up for Auto DJ) </small></em></p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/bitrate.png'/>
                            <p>The maximum bitrate for your server is visible here:</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/aacview.png'/>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/v1v2infobitrate.png'/>
                            <br/>
                            <p>To connect to a Shoutcast v2 server, enter details marked on a screenshot below. You need to enter the server address, port, DJ username, DJ password and Stream ID (mount point number, the default setting is "1").</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/shoutcastv2login.png'/>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/v2login.png'/>
                            <p>If you wish to record and save your stream, Select "Save Encoded Output", and choose the location where it should be saved.</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/saveencoder.png'/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>  
            </div>}

            {/* Block 4 */}
            {active === 3 && <div>
                <Accordion expanded = {expanded === 'panel1'} TransitionProps={{ unmountOnExit: true }}
                 onClick = {() => setExpanded('panel1')}>
                    <AccordionSummary expandIcon = {<ExpandMore/>}>
                        How to set up a live stream? (Centova Cast Control Panel and Winamp)
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>                        
                            <p><b>If you do not have all the required software yet, you can easily <a href = 'https://billing.fastcast4u.com/downloads.php'>download Winamp and SHOUTcast DSP Plugin from our website.</a></b></p>
                            <br/>
                            <p>Before you start the configuration process, log in to the Centova Cast Panel and select the Quick Links section. </p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/centovacast/quicklinks.jpg'/>
                            <p>Find ShoutCast/Icecast server details under Live Source Connections:</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/sam/centova-livesource.jpg'/>
                            <p>Open Winamp with a DSP plugin installed. If your DSP plugin did not open, then push CTRL + P and enter DSP/Effects under Plug-ins tab. Then just double click Nullsoft SHOUTcast Source DSP.</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/dspplugin.png'/>
                            <p>You should be able to view Winamp with a DSP plugin like presented below:</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/winampdsp.png'/>
                            You will see an <b>Encoder Settings</b> button if you selected the AAC codec or a list with <b>Encoder Settings</b> if you selected MP3.
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/aacview.png'/>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/mp3codec.png'/>
                            <p>A window with a bitrate slider will open. Select an appropriate bitrate. Remember, not to exceed your maximum limit, you can easily check it in Centova Cast Control Panel. </p>
                            <small>(Note: If you use Auto DJ the bitrate of your live stream should match the bitrate set up for Auto DJ) </small>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/bitrate.png'/>
                            <p>The maximum bitrate for your server is visible here:</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/aacview.png'/>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/v1v2infobitrate.png'/>
                            <br/>
                            <p>To connect to a Shoutcast v2 server, enter details marked on a screenshot below. You need to enter the server address, port, DJ username, DJ password and Stream ID (mount point number, the default setting is "1").</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/shoutcastv2login.png'/>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/v2login.png'/>
                            <p>If you wish to record and save your stream, Select "Save Encoded Output", and choose the location where it should be saved.</p>
                            <MyModal url = 'https://img.fastcast4u.com/tutorials/winamp/saveencoder.png'/>
                        </Typography>
                    </AccordionDetails>
                </Accordion> 
            </div>}
        </>
    )
}