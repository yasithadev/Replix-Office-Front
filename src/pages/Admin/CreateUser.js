import Sheet from '../../components/sheet/sheet';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Title from '../../components/title/Title'
import Raw from '../../components/raw/raw';
import H1 from '../../components/typo/H1'
import H3 from '../../components/typo/H3'
import H4 from '../../components/typo/H4';
import H5 from '../../components/typo/H5'
import H6 from '../../components/typo/H6'
import Sub1 from '../../components/typo/Sub1'
import FormSection from '../../components/form-section/formSection';
import Code from '../../components/code/Code';
import Name from '../../components/formfield/Name';
import Form from '../../components/form/Form';
import Pagination from '../../components/pagination/pagination'

const CreateUser = () => {
    return <Sheet>
        <H4>Create User</H4>
        <Form lan="2">
        <Name col="6" label="User Name"/>
        <Name col="6" label="First Name"/>
        <Name col="6" label="Second Name"/>
        </Form>
        <Pagination totalPages="20" currentPage="10"></Pagination>
      <Stack spacing={2} direction="row"></Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Sheet>;
  };
  
  export default CreateUser;
/*
  return <Sheet>
  <!--
  <Stack spacing={2} direction="row"></Stack>
  <Stack spacing={2} direction="row">
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </Stack>
  
  <H4>Create User</H4>
  </Sheet>;
};
*/