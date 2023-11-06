
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import absence from '../../assets/Images/ManatimeTest_Library/Module_Absences.svg'
import Typography from '@mui/material/Typography'
import Planning from "../../assets/Images/ManatimeTest_Library/Module_Planning.svg";
import heure from '../../assets/Images/ManatimeTest_Library/Module_Heures.svg';
import note from '../../assets/Images/ManatimeTest_Library/Module_NotedeFrais.svg';
import  presence from '../../assets/Images/ManatimeTest_Library/Module_Présence.svg';
import competence from '../../assets/Images/ManatimeTest_Library/Module_Compétences.svg';
import salaire from '../../assets/Images/ManatimeTest_Library/Module_SalaireetPAie.svg';
import entretien from '../../assets/Images/ManatimeTest_Library/Module_Entretiens.svg';
import material from '../../assets/Images/ManatimeTest_Library/Module_Matériels.svg';
import doc from '../../assets/Images/ManatimeTest_Library/Mdule_Documents.svg';
import rh from '../../assets/Images/ManatimeTest_Library/Module_RH.svg';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function ResponsiveGrid() {
    const cards=[
        {
            id:1,
            image:Planning,
            title:"Planning",
        },
        {
            id:2,
            image:absence,
            title:"Abscences",
        },
        {
            id:3,
            image: heure,
            title:"Heures",
        },
        {
            id:4,
            image: note,
            title:"Note de frais",
        },
        {
            id:5,
            image: presence,
            title:"Présence",
        },
        {
            id:6,
            image: competence,
            title:"Compétences",
        },
        {
            id:7,
            image: salaire,
            title:"Salaire et paie",
        },
        {
            id:8,
            image: entretien,
            title:"Entretiens",
        },
        {
            id:9,
            image: material,
            title:"Matériels",
        },
        {
            id:10,
            image: doc,
            title:"Documents",
        },
        {
            id:6,
            image: rh,
            title:"RH",
        }
    ]
  return (
    <Box sx={{ flexGrow: 1, display:"flex", flexDirection:'column', gap:'8px' }}>
      <Box sx={{display:"flex", flexDirection:'row', gap:'8px'}}>
      {cards.slice(0,4).map((item, index)=>(
        <Card 
        sx={{width:"170px", 
        height:'170px', 
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center', 
        border: '1px solid #D4D4D4', 
        boxShadow:'none',
        cursor:'pointer', 
        color:'#494949',
        backgroundColor:'#fff', 
        borderRadius:'10px',  '&:hover':{
            border: '3px solid #0090F5',color:'#0090F5'
            
        }}}>
         
         <img src={item.image} alt="" width='89px' height='83px'/>
          <Typography sx={{fontFamily:'Poppins', fontSize:'20px'}}>
              {item.title}
          </Typography>
        
        </Card>
      ))}
      </Box>
      <Box sx={{display:"flex", flexDirection:'row', gap:'8px'}}>
      {cards.slice(4,8).map((item, index)=>(
        <Card 
        sx={{width:"170px", 
        height:'170px', 
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center', 
        border: '1px solid #D4D4D4', 
        boxShadow:'none',
        cursor:'pointer', 
        color:'#494949',
        backgroundColor:'#fff', 
        borderRadius:'10px',  '&:hover':{
            border: '3px solid #0090F5', color:'#0090F5',
        }}}>
         
         <img src={item.image} alt="" width='89px' height='83px'/>
          <Typography sx={{fontFamily:'Poppins', fontSize:'20px'}}>
              {item.title}
          </Typography>
        
        </Card>
      ))}
      </Box>
      <Box sx={{display:"flex", flexDirection:'row', gap:'8px'}}>
      {cards.slice(8,11).map((item, index)=>(
        <Card 
        sx={{width:"170px", 
        height:'170px', 
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center', 
        border: '1px solid #D4D4D4', 
        boxShadow:'none',
        cursor:'pointer', 
        color:'#494949',
        backgroundColor:'#fff', 
        borderRadius:'10px',  '&:hover':{
            border: '3px solid #0090F5',color:'#0090F5'
        }}}>
         
         <img src={item.image} alt="" width='89px' height='83px'/>
          <Typography sx={{fontFamily:'Poppins', fontSize:'20px'}}>
              {item.title}
          </Typography>
        
        </Card>
      ))}
      </Box>
    </Box>
  );
}