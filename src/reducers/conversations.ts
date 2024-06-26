import { SET_CONVERSATIONS, SET_ANSWER, SET_QUESTION } from "@Src/actionsType"

const initialState = {}

interface actionType {
    type: string;
    data: any
}

const conversation = (state : any = initialState, action: actionType) => {
    const { type, data } = action;
    switch(type){
        case SET_CONVERSATIONS:
            const newState: any = {}
            data.forEach((conv: { conversationId: string | number; }) => {
                newState[conv.conversationId] = conv
                newState[conv.conversationId].question = ""
                newState[conv.conversationId].answer = ""
            });
            return newState;
        case SET_QUESTION:
            const nextQuestionState = {
                ...state,
                [data.conversationId]: {
                    ...state[data.conversationId],
                    question: action.data.question,
                }
            }
            return nextQuestionState
        case SET_ANSWER:
            const nextAnswerState = {
                ...state,
                [action.data.conversationId]: {
                    ...state[data.conversationId],
                    answer: action.data.answer,
                }
            }
            return nextAnswerState
        default: 
            return state
    }
}

export default conversation
