import Input from '../../components/input/Input';
import Sheet from '../../components/sheet/sheet';
import Raw from '../../components/raw/raw';
import Code from '../../components/code/Code';
import H1 from '../../components/typo/H1'
import H3 from '../../components/typo/H3'
import H4 from '../../components/typo/H4'
import H5 from '../../components/typo/H5'
import H6 from '../../components/typo/H6'
import Sub1 from '../../components/typo/Sub1'
import Title from '../../components/title/Title'

const TypoPage = (props) => {    
    return <Sheet>

        <H1>Heading 1</H1>
        <Code>{
        `import H1 from '../components/typo/H1';`
        }</Code>
        <Code>{
        `<H1>Heading 1</H1>`
        }</Code>
        <H3>Heading 3</H3>
        <Code>{
        `<H3>Heading 1</H3>`
        }</Code>
        <H4>Heading 4</H4>
        <Code>{
        `import H4 from '../components/typo/H4';`
        }</Code>
        <Code>{
        `<H4>Heading 1</H4>`
        }</Code>
        <H5>Heading 5</H5>
        <H6>Heading 6</H6>
        <Code>{
        `import Sub1 from '../../components/typo/Sub1';`
        }</Code>
        <Code>{
        `<Sub1>Subtitle 1</Sub1>`
        }</Code>
        <Sub1>Subtitle 1</Sub1>
        <Title>Title</Title>
        </Sheet>;
}
export default TypoPage;