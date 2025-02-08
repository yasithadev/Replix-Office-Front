import Sheet from '../components/sheet/sheet';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const CreateUser = () => {
    return <Sheet>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <h1>Purpose</h1>
    </Sheet>;
  };
  
  export default CreateUser;