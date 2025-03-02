import Sheet from '../../components/sheet/sheet';
import Code from '../../components/code/Code';
import H5 from '../../components/typo/H5'; 
import Notifier from '../../components/notification/Notifier';

const CodePage = (props) => {   

    return <Sheet>
        
        <H5>Code Component</H5>
            <Code>
                {
                    `import Code from '../../components/code/Code';`
                }
            </Code>
<Code>
    {
`<div>
    <p>This is a paragraph
    with newlines</p>
    <H5>This is a heading</H5>
</div>`
    }
</Code>
<H5>Code : </H5>
<Code>
    {
`<Code>
{
\`<div>
<p>This is a paragraph
with newlines</p>
<H5>This is a heading</H5>
</div>\`
}
</Code>`
    }
</Code>
</Sheet>;
}
export default CodePage;