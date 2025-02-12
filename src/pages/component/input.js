import Input from '../../components/input/Input';
import Sheet from '../../components/sheet/sheet';
import Raw from '../../components/raw/raw';

const InputPage = (props) => {    
    return <Sheet>
        <Input col="2" type="tel" label="Tel (Office)"/>
        <Input labelOnLeft="false" col="2" type="tel" label="Tel (Office)"/>
    <Raw><Input labelOnLeft="false" col="2" type="tel" label="Tel (Office)"/></Raw>
    <Raw><Input labelOnLeft="true" col="2" type="tel" label="Tel (Office)"/></Raw>
    <Raw>
        <Input labelOnLeft="true" col="2" type="tel" label="Address"/>
        <Input labelOnLeft="true" col="2" type="tel" label="Email"/>
    </Raw>
</Sheet>;
}
export default InputPage;