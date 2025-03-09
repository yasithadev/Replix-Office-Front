import Sheet from '../components/sheet/sheet';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Title from '../components/title/Title'
import Raw from '../components/raw/raw';
import H1 from '../components/typo/H1'
import H3 from '../components/typo/H3'
import H4 from '../components/typo/H4';
import H5 from '../components/typo/H5'
import H6 from '../components/typo/H6'
import Sub1 from '../components/typo/Sub1'
import FormSection from '../components/form-section/formSection';
import Code from '../components/code/Code'
const CreateUser = () => {
    return <Sheet>

        <Stack spacing={2} direction="row"></Stack>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <h1>Purpose</h1>
    </Sheet>;
  };
  
  export default CreateUser;