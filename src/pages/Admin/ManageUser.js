import Sheet from '../../components/sheet/sheet';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Title from '../../components/title/Title'
import Raw from '../../components/raw/raw';
import H1 from '../../components/typo/H1'
import H4 from '../../components/typo/H4';
import Name from '../../components/formfield/Name';
import Email from '../../components/formfield/email';
import Form from '../../components/form/Form';
import Pagination from '../../components/pagination/pagination';
import CustomSelect from '../../components/Rselect/rselect';
import ROption from '../../components/Rselect/roption';

const ManageUser = () => {

    const submitCallBack = async (formData) => {console.log(formData)}

    return <Sheet>
    <H4>Create User</H4>
        <Form onSubmitButtonClicked={submitCallBack} lan="2" validation={false} btnLable="Search" >
            <Name label="User Name"/>
            <Email label="Email"/>
            <Name label="First Name"/>
            <Name label="Second Name"/>
            <CustomSelect initialValue="1" label = "Active / Inactive">
                <ROption value="0">Inactive</ROption>
                <ROption value="1">Active</ROption>
            </CustomSelect>
        </Form>
    </Sheet>;

}
export default ManageUser;