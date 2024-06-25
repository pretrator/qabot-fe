import FileUploader from './fileUploader';
import QueryPane from './queryPane';
import { axios } from './../utils';
import { QUERY } from './../urls';
import { AxiosRequestConfig } from 'axios';
import lodash from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ANSWER, SET_QUESTION } from '@Src/actionsType';
import Questions from '@Comp/questions'
import Answer from '@Comp/answers'

const RightPane = (props: any) => {
    const { currentConv } = props;
    const dispatch = useDispatch()
    const question = useSelector((state: any) => state.conversations[currentConv]?.question)
    const answer = useSelector((state: any) => state.conversations[currentConv]?.answer)

    console.log("question, answer", question, answer, currentConv)

    async function fetchStreamingPostWithJsonData(question: string) {
        let answer = ""
        dispatch({ type: SET_QUESTION, data : { conversationId: currentConv, question }})
        dispatch({ type: SET_ANSWER, data: { conversationId: currentConv, answer: '' }})
        
        const data = {
            "conversationId": currentConv,
            "query": question
        }

        try {
          const response = await fetch('http://localhost:3001' + QUERY, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
      
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }
            console.log("Value", value)
            const chunk = decoder.decode(value, { stream: true });
            answer += chunk.replace(/["']/g, '')
            console.log(answer)
            dispatch({ type: SET_ANSWER, data: { conversationId: currentConv, answer }})
          }
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }


    return <div className="flex max-h-full max-w-full flex-1 flex-col overflow-hidden bg-white justify-center items-center">
        { lodash.isUndefined(currentConv) ? 
            <div className='h-[30rem] w-[48rem]'>
                <FileUploader/> 
            </div>
            : <div className='relative mx-auto flex flex-1 gap-3 text-base juice:gap-4 juice:md:gap-5 juice:lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] pt-[56px] text-black w-full'>
                {/* {question} {answer} */}
                <div className='flex flex-col w-full h-full'>
                    <Questions question={question}/>
                    <Answer answer={answer}/>
                </div>
                <QueryPane onQuery={fetchStreamingPostWithJsonData}/>
            </div>
            }
    </div>;
}

export default RightPane;