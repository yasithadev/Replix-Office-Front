import Sheet from '../components/sheet/sheet';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Title from '../components/title/Title'
import Input from '../components/formfield/formfield';
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
        <Raw><Input></Input></Raw>
        <FormSection labelOnTop="true" col="2">
            <Input type="tel" label="Tel (Office)"/>
            <Input type="tel" label="Mobile" />
            <Input type="tel" label="Tel (Office)"/>
            <Input type="tel" label="Mobile" />
        </FormSection>
        <FormSection labelOnTop="true" col="3">
            <Input type="tel" label="Tel (Office)" />
            <Input type="tel" label="Mobile" />
            <Input type="tel" label="Tel (Office)" />
            <Input type="tel" label="Mobile" />
        </FormSection>
        <FormSection labelOnTop="true" col="4">
            <Input type="tel" label="Tel (Office)" />
            <Input type="tel" label="Mobile" />
            <Input type="tel" label="Tel (Office)" />
            <Input type="tel" label="Mobile" />
            <Input type="tel" label="Tel (Office)" />
            <Input type="tel" label="Mobile" />
        </FormSection>
        <FormSection labelOnTop="false" col="2">
            <Input type="tel" label="Tel (Office)" />
            <Input type="tel" label="Mobile"/>
            <Input type="tel" label="Tel (Home)"/>
        </FormSection>
        <FormSection labelOnTop="false" col="1">
            <Input type="tel" label="Tel (Office)"/>
            <Input type="tel" label="Sender Mobile Numberw"/>
            <Input type="tel" label="Tel (Home)"/>
        </FormSection>
        <FormSection labelOnTop="false" longLabels="true" col="1">
            <Input type="tel" label="Tel (Office)" />
            <Input type="tel" label="Sender Mobile Number should here * (M)"/>
            <Input type="tel" label="Tel (Home)"/>
        </FormSection>
        <Stack spacing={2} direction="row"><Input></Input> </Stack>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <h1>Purpose</h1>
    </Sheet>;
  };
  
  export default CreateUser;