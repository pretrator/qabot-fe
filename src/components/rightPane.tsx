import FileUploader from '@Comp/fileUploader';
import QueryPane from '@Comp/queryPane';
import { QUERY, attchBackendURL } from '@Src/urls';
import lodash from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ANSWER, SET_QUESTION } from '@Src/actionsType';
import Questions from '@Comp/questions'
import Answer from '@Comp/answers'
import { Dispatch } from 'redux';
import { useState } from 'react';
import { message } from 'antd';
import { DEFAULT_MESSAGE_WAIT_TIME, FAILED_UPLOADING_FILE, HTTP_ERROR, NO_BODY_IN_RESPONSE } from '@Src/constants';

const RightPane = (props: any) => {
    const { currentConv, setCurrConv } = props;
    const [isLoading, setLoading] = useState<Boolean>(false);
    const dispatch = useDispatch()
    const question = useSelector((state: any) => state.conversations[currentConv]?.question)
    const answer = useSelector((state: any) => state.conversations[currentConv]?.answer)
    const gptResponseHandler = generateGPTResponseHandler(dispatch, currentConv, setLoading)

    return <div className="flex max-h-full max-w-full flex-1 flex-col overflow-hidden bg-white justify-center items-center">
        { lodash.isUndefined(currentConv) ? 
            <div className='h-[30rem] w-[48rem]'>
                <FileUploader setCurrConv={setCurrConv}/> 
            </div>
            : <div className='relative mx-auto flex flex-1 gap-3 text-base juice:gap-4 juice:md:gap-5 juice:lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] pt-[56px] text-black w-full'>
                <div className='flex flex-col w-full h-full'>
                    <Questions question={question}/>
                    <Answer answer={answer}/>
                </div>
                <QueryPane onQuery={gptResponseHandler} isLoading={isLoading}/>
            </div>
            }
    </div>;
}

const generateGPTResponseHandler = (dispatch: Dispatch, currentConv: string | null, setLoading: any) => async (question: string) => {
    setLoading(true)
    dispatch({ type: SET_QUESTION, data : { conversationId: currentConv, question }})
    dispatch({ type: SET_ANSWER, data: { conversationId: currentConv, answer: '' }})
    let answer = ""
    const data = {
        "conversationId": currentConv,
        "query": question
    }

    try {
      const response = await fetch(attchBackendURL(QUERY), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`${HTTP_ERROR} ${response.status}`);
      }
  
      if(!response.body) {
        throw new Error(`${NO_BODY_IN_RESPONSE}: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
  
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
            setLoading(false)
            break;
        }
        const chunk = decoder.decode(value, { stream: true });
        answer += chunk.replace(/["']/g, '')
        dispatch({ type: SET_ANSWER, data: { conversationId: currentConv, answer }})
      }
    } catch (error) {
      console.error('Fetch error:', error);
      message.error(FAILED_UPLOADING_FILE, DEFAULT_MESSAGE_WAIT_TIME);
      setLoading(false)
    }
  }

export default RightPane;