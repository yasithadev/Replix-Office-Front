import Input from '../../components/input/Input';
import Sheet from '../../components/sheet/sheet';
import Raw from '../../components/raw/raw';

const InputPage = (props) => {    
    return <Sheet>
        <Input labelOnTop="true" col="2" type="tel" label="Tel (Office)"/>
        <Input labelOnTop="true" col="2" type="tel" label="Tel (Office)"/>
    <Raw><Input labelOnTop="true" col="2" type="tel" label="Tel (Office)"/></Raw>
    <Raw><Input labelOnTop="false" col="2" type="tel" label="Tel (Office)"/></Raw>
</Sheet>;
}
export default InputPage;