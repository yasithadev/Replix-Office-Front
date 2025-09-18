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
import Email from '../../components/formfield/email';
import Form from '../../components/form/Form';
import Pagination from '../../components/pagination/pagination';
import CustomSelect from '../../components/Rselect/rselect';
import ROption from '../../components/Rselect/roption';

const CreateUser = () => {
  const submitCallBack = async (formData) => {
    console.log("----------------submit-----------------")//TODO
    console.log("create user formData ",formData);
    //secondController.setLoginStatus(true);
    try{
        //await authService.doBasicAuthentication(username,password)
        //navigate("/");
    }
    catch(e){
      /*
      if (e instanceof UnauthorizedException) {
        throw new InvalidCredentialException();
      }
      
      if (e instanceof NetworkErrorException) {
        Notifier.notify("Error","W503 : "+ msg.W503);
      }
      */
    }
  }

    return <Sheet>
        <H4>Create User</H4>
        <Form onSubmitButtonClicked={submitCallBack} lan="2">
        <Name required={true} label="User Name"/>
        <Email required={true} label="Email"/>
        <Name label="First Name"/>
        <Name label="Second Name"/>
        <CustomSelect
        initialValue="0"
        label = "Active / Inactive"
      >
        <ROption value="0">Active</ROption>
        <ROption value="1">Inactive</ROption>
      </CustomSelect>
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