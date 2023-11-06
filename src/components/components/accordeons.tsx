import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import './accordeons.css';
import { useState } from "react";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
const Accordions = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    const tab =[
        {
            id:1, 
            title: 'Mon espace',
            isOpen: false,
            icon: <i style={{width:'22px', marginTop:'5px'}} className="fa-solid fa-id-card"></i>,
            subMenu: []
        },
        {
            id: 2,
            title: 'Validation',
            isOpen: false,
            icon: <i style={{width:'22px', marginTop:'2px',fontSize:'18px'}} className="fa-solid fa-check"></i>,
            subMenu: []
        },
        {
            id: 3,
            title: 'Indicateurs',
            isOpen: false,
            icon: <i style={{width:'22px', marginTop:'2px',fontSize:'18px'}} className="fa-solid fa-list-check"></i>,
            subMenu: []
        },
        {
            id: 4,
            title: 'Soldes',
            isOpen: false,
            icon: <i style={{width:'22px', marginTop:'2px',fontSize:'18px'}} className="fa-solid fa-scale-balanced"></i>,
            subMenu: ['Gestion des soldes', 'Ajuster un solde', 'Compteurs', 'Historique']
        },{
            id: 5,
            title: 'Recherche',
            isOpen: false,
            icon: <i style={{width:'22px', marginTop:'2px',fontSize:'18px'}} className="fa-solid fa-magnifying-glass"></i>,
            subMenu: []
        }
    ]
    
    return (
        <>
           {tab.map((ac, i)=>( 
           <Accordion  
            sx={{ width: '200px', marginBottom:0 }} expanded={expanded === 'panel'+i}
            onChange={handleChange('panel'+i)}
            style={{ backgroundColor: expanded === 'panel'+i ? 'white' : 'rgba(0,0,0,0)', color:expanded=== 'panel'+i?'#084693':'white', borderBottom:'2px solid #0489E0'}}
            >
                <AccordionSummary
                    expandIcon={<i className="fa-solid fa-chevron-down" style={{color:expanded=== 'panel'+i?"#084693":"white"}}></i>}
                    aria-controls={`panel${i}a-content`}
                    id={`panel${i}a-header`}
                    sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}
                >
                    {ac.icon}
                    <Typography sx={{marginLeft:'12px'}}> <b>{ac.title}</b></Typography>
                </AccordionSummary>
                <AccordionDetails >
                    {ac.subMenu? ac.subMenu.map((item)=>(
                        <Typography sx={{textAlign:'end', color:'#646464',fontSize:'14px', cursor:'pointer', '&:hover': {
                            color: '#0090F5', // Change color on hover
                            textDecoration: 'none', 
                            fontWeight:'bold',
                          }}}>
                            {item}
                        </Typography>
                    )) :(
                    <Typography>
                        Lorem ipsum dolor sit amet 
                    </Typography>
                    )}
                </AccordionDetails>
            </Accordion>))}
            
        </>
    )
}
export default Accordions;