import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Fade, FormControl, InputLabel, MenuItem, Modal, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import ajuster from '../../assets/Images/ManatimeTest_Library/Ajuster.svg'
import transfert from '../../assets/Images/ManatimeTest_Library/Transferer.svg';
import solder from '../../assets/Images/ManatimeTest_Library/Solder.svg';
import React from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    border: '1px solid #C4C4C4',
    height:'38px',

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '16px',
    border: '1px solid #C4C4C4',

  },
}));
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {

  },
}));




type Data = {
  id: number,
  user: String,
  categorie: String,
  period: String,
  present_sold: number |null,
  sold_taken: number|null,
  futur_sold: number|null,
}
type Props = {
  isOpen: boolean,
  handleModal: any
}
export default function TableData(props: Props) {
  
  const [data, setData] = useState<Data[]>([{
    id: -1,
    user: '',
    categorie: '',
    period: '',
    present_sold: null,
    sold_taken: null,
    futur_sold: null,
  }])
  console.log('isopen :' + props.isOpen);
  const [user, setuser] = React.useState('');
  const [categorie, setCategorie]= useState('');
  const [period, setPeriod]=useState ('');
  const [presentSold, setPresentSold]=useState(0);
  const [soldTaken, setSoldTaken]=useState(0);
  const [futurSold, setFutur]=useState(0);
  const [idObject, setIdObject]=useState(0);

  const handleSubmit=(e: any)=>{
    
    e.preventDefault();
    if(user==='' || categorie==='' || period==='' || presentSold===null || soldTaken===null || futurSold===null){
      alert("Veuillez completer tous les champs!");
      
      
    }else{
      setIdObject(idObject+1);
      
      setData([...data, {
      id: idObject,
      user: user,
      categorie: categorie,
      period: period,
      present_sold: presentSold,
      sold_taken: soldTaken,
      futur_sold: futurSold,
    }]);
    setuser('');
    setCategorie('');
    setPeriod('');
    setPresentSold(0);
    setSoldTaken(0);
    setFutur(0);props.handleModal(false)}
    
  }

  const handleChange = (event: SelectChangeEvent) => {
    setuser(event.target.value as string);
    
  };
  const handleSuppr=(index: number)=>{
    const newdata= data.filter(item=>item.id!==index
    )
     setData(newdata)
      
  }

  useEffect(()=>{setData(data)}, [data])
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.isOpen}
        onClose={props.handleModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        
      >
        <Fade in={props.isOpen} style={{borderRadius:'10px'}} >

          <Box sx={style}>
            <form style={{marginLeft:'150px'}} onSubmit={(e) => {handleSubmit(e)}}>
              <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'start', gap:'20px'}}>
                <Typography  variant='h4'>Veuillez completer les champs</Typography>
                <Box sx={{width:'51%',display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:'20px'}}>
                <FormControl fullWidth>
                  <InputLabel required id="demo-simple-select-label">Utilisateurs</InputLabel>
                  <Select
                    
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={user}
                    label="Utilisateurs"
                    onChange={handleChange}
                  >
                    <MenuItem value={''}></MenuItem>
                    <MenuItem value={'Darléne Menson Dujon'}>Darléne Menson Dujon</MenuItem>
                    <MenuItem value={'Marlon Brandon'}>Marlon Brandon</MenuItem>
                    <MenuItem value={'Lova Salema'}>Lova Salema</MenuItem>
                  </Select>
                </FormControl>
                <TextField required id="outlined-basic" label="Catégorie" variant="outlined" value={categorie} onChange={(e)=>setCategorie(e.target.value)} />
                </Box>
                <Box  sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:'20px'}}>
                  <TextField required id="outlined-basic" label="Période" variant="outlined" type='text'  value={period} onChange={(e)=>setPeriod(e.target.value)}/>
                  <TextField required id="outlined-basic" label="Solde actuel" variant="outlined" type='number' value={presentSold} onChange={(e)=>setPresentSold(parseFloat(e.target.value))} />
                </Box>
                <Box  sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:'20px'}}>
                  <TextField required id="outlined-basic" label="Solde pris" variant="outlined" type='number' value={soldTaken} onChange={(e)=>setSoldTaken(parseFloat(e.target.value))} />
                  <TextField required id="outlined-basic" label="Solde futur" variant="outlined" type='number' value={futurSold} onChange={(e)=>setFutur(parseFloat(e.target.value))} />
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', gap:'20px', width:'63%'}}>
                <Button type='submit' onClick={(e) => {handleSubmit(e)}} color='success' variant='outlined'>Ajouter</Button>
                <Button type='reset' onClick={() => props.handleModal(false)} variant="outlined" color="error">Annuler</Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
      <TableContainer component={Paper} sx={{ marginLeft: '188px', borderRadius: '4px', position:'relative', top:'-130px'}}>
        <Table sx={{ minWidth: 700, borderRadius: '4px' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell  sx={{ width: '450px',  paddingBottom: '15px',fontSize:'16px' }}><b>Utilisateurs</b></StyledTableCell>
              <StyledTableCell align="left" sx={{fontSize:'16px'}}><b>Catégorie</b></StyledTableCell>
              <StyledTableCell align="left" sx={{fontSize:'16px'}}><b>Période</b></StyledTableCell>
              <StyledTableCell align="left" sx={{fontSize:'16px'}}><b>Solde actuel</b></StyledTableCell>
              <StyledTableCell align="left" sx={{fontSize:'16px'}}><b>Solde pris</b></StyledTableCell>
              <StyledTableCell align="left" sx={{fontSize:'16px'}}><b>Solde futur</b></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {! data[1]?.id? (<p style={{textAlign:'center'}}>Aucune donnée</p>
           ): 
            data?.slice(1, data.length).map((row, index) => (
              <StyledTableRow key={''}>
                <StyledTableCell  scope="row" align='left' sx={{fontSize:'16px',minWidth:'150px'}}>
                  {row.user}
                </StyledTableCell>
                <StyledTableCell align="left"  sx={{paddingBottom:'25px', minWidth:'150px'}}> <div style={{width:'12px', height:'12px', borderRadius:'50%', backgroundColor: index%2==0?'#FF8851': '#A851FF', position:'relative', top:'15px'}}></div> &nbsp; &nbsp;&nbsp;&nbsp;{row.categorie}</StyledTableCell>
                <StyledTableCell align="left" sx={{fontSize:'16px',minWidth:'80px'}}>{row.period} </StyledTableCell>
                <StyledTableCell align="left" sx={{fontSize:'16px',minWidth:'80px'}}>{row.present_sold} </StyledTableCell>
                <StyledTableCell align="left" sx={{fontSize:'16px',minWidth:'80px'}}>{row.sold_taken} </StyledTableCell>
                <StyledTableCell align="left" sx={{fontSize:'16px',minWidth:'80px'}}>{row.futur_sold} </StyledTableCell>
                <StyledTableCell align="center">
                  <Box  sx={{position:'relative', top:'10px'}} >
                  <img src={ajuster} style={{marginLeft:'-10px'}} width='32px'></img>
                  <img src={transfert} style={{marginLeft:'45px'}} width='32px'></img>
                  <img src={solder} style={{marginLeft:'45px'}} width='32px'></img>
                  <Button variant='contained' color='error' style={{marginLeft:'15px', marginBottom:'22px'}} onClick={()=>handleSuppr(row.id)} >Supprimer</Button>
                  </Box>
                  
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
}