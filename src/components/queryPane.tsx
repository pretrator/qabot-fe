import { useState } from 'react';
import { Affix, Input } from "antd"



const QueryPane = (props: any) => {
    const [inputText, setInputText] = useState('');

    const { onQuery } = props;
        const Upload = <div className="bg-blue-200 rounded-full" onClick={() => onQuery(inputText)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className="icon-2xl">
                    <path fill="currentColor" fill-rule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clip-rule="evenodd"></path>
                </svg>
            </div>;


    return <div className="absolute bottom-0 w-full mb-[10px]">
             <Input value={inputText} onChange={(e) => setInputText(e.target.value)} size="large" suffix={Upload} className="rounded-full" id="promptInput"/>
        </div>
}

export default QueryPane;