import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Abscence from '../assets/Images/ManatimeTest_Library/Absence_Icon.svg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Burger from '../assets/Images/ManatimeTest_Library/Burger button.svg'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Accueil from '../assets/Images/ManatimeTest_Library/Accueil.svg';
import Ajouter from '../assets/Images/ManatimeTest_Library/Add.svg';
import help from '../assets/Images/ManatimeTest_Library/Help.svg';
import setting from '../assets/Images/ManatimeTest_Library/Settings.svg';
import user from '../assets/Images/ManatimeTest_Library/Photo.png';
import { Breadcrumbs, Link, Stack } from '@mui/material';
import Accordions from './components/accordeons';
import './css/mainLayout.css';
import Logo from '../assets/Images/ManatimeTest_Library/Logo.svg';
import graphisme from '../assets/Images/ManatimeTest_Library/Graphic.svg';
import TableData from './components/TableData';
import ResponsiveGrid from './components/CardGroup';
const drawerWidth = 1000;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    borderTopRightRadius: '40px',
    borderBottomRightRadius: '40px',

});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    border:'none',
    width: `calc(${theme.spacing(7)} + 135px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 135px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal]=React.useState<boolean>(false);
    const handleModal =(state: any)=>{
        setOpenModal(state);
    }

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const breadcrumbs = [
        <Typography key="3" color="#494949" fontWeight='bold' fontSize='18px'
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '10px' }}
        >
            <img src={Abscence} alt="" width='37px' height='38.18px' /> <b>Absence </b>
        </Typography>,

        <Link
            underline='none'
            key="2"
            color="#858585"
            href="/"
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '10px' }}
            fontWeight={500}
        >
            <i className="fa-solid fa-scale-balanced" style={{ width: '26px', height: '23px', marginTop: '8px' }}></i> Sous module
        </Link>,
        <Link
            underline='none'
            key="2"
            color="#858585"
            href="/"
            margin='10px'
            fontWeight={500}
        >
            Sous sous module
        </Link>,
    ];
    return (
        <>
            <CssBaseline />
            <AppBar style={{ position: 'fixed', backgroundColor: 'white', height: '66px', boxShadow: 'none', filter: open ? 'blur(3px)' : 'none', zIndex:12 }}>
                <Toolbar sx={{ marginLeft: '70px' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <img src={Burger} width='22px' height='20px' />
                    </IconButton>

                    <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} >
                        <Stack spacing={3} sx={{ marginLeft: '45px', visibility: open ? 'hidden' : 'visible', transition: "opacity ease-in-out, visibility 0s" }}>
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize="medium" />}
                                aria-label="breadcrumb"
                                sx={{fontFamily:'Poppins'}}
                            >
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Stack>
                        <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '40px', position: 'fixed', right: '30px' }} >
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <img src={help} alt="" />
                                <img src={setting} alt="" />
                            </div>
                            <div style={{ borderLeft: '1px solid #858585', height: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: "10px" }}>
                                <Typography fontSize='16px' color='#494949' fontWeight={500} lineHeight='24px' >
                                    <b>Nom et Prénom </b>
                                </Typography>
                                <Typography fontSize='14px' color='#858585' fontWeight={400} lineHeight='24px'>
                                    Entreprise
                                </Typography>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3CE021', position: 'absolute', right: '-3px' }}></div>
                                <img src={user} />
                            </div>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} anchor='left' style={{ width: 240, zIndex:14 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', border:'none' }}>
                    <Box>
                        <DrawerHeader>
                        <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            marginRight: 5,
                            position:'absolute',
                            left:'90px',
                            zIndex:222,
                            // ...(open && { display: 'none' }),
                        }}
                        onClick={handleDrawerOpen}
                    >
                        <img src={Burger} width='22px' height='20px' />
                    </IconButton>
                        </DrawerHeader>
                        <List sx={{paddingBottom:0}}>

                            {['Accueil', 'Ajouter'].map((text, index) => (
                                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                            backgroundColor: '#0090F5',
                                            color: '#FFFFFF',
                                            width: '200px',
                                            '&:hover, &:focus': {
                                                bgcolor: '#03a9fc',
                                            },
                                            borderTop: '1px solid #00A6FF',
                                            borderBottom: '1px solid #0084E1'
                                        }}
                                        onClick={()=>text==='Ajouter'? handleModal(true): handleModal(false)}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: 3,
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {index % 2 === 0 ? <img src={Accueil} /> : <img src={Ajouter} />}

                                        </ListItemIcon>
                                        <ListItemText primary={<b>{text}</b>} sx={{ opacity: 1, fontSize: '18px', fontWeight: 500 }} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <Box className='accordion-box' sx={{ width: '200px', height:'100vh' }} >
                                <Accordions />
                                <Box sx={{ padding: 0, scrollMarginBottom: '0px', marginBottom:0, marginTop:'150px' }}>
                                    <img style={{ width: '200px', height: '289px' }} src={graphisme}></img>
                                </Box>
                            </Box>
                        </List>
                    </Box>
                    <Box>
                        {open && <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:'118px', marginLeft:'30px', gap:'110px' }}>
                            <img src={Logo} alt=""  width='350px' height='72.5px' />
                            <ResponsiveGrid/>
                        </Box>}
                    </Box>
                </Box>

            </Drawer>
            <section style={{
                flexGrow: 1, padding: theme.spacing(3),
                transition: 'filter 0.5s ease-in-out', filter: open ? 'blur(3px)' : 'none', margin: 20
            }}
            onClick={handleDrawerClose} >

                <Box>
                    
                <TableData isOpen={openModal} handleModal={handleModal}/>
                </Box>


            </section>

        </>
    );
}