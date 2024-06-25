import { SET_CONVERSATIONS, SET_ANSWER, SET_QUESTION } from "@Src/actionsType"

const initialState = {}

const conversation = (state = initialState, action: any) => {
    switch(action.type){
        case SET_CONVERSATIONS:
            const newState: any = {}
            action.data.forEach((conv: any) => {
                newState[conv.conversationId] = conv
                newState[conv.conversationId].question = ""
                newState[conv.conversationId].answer = ""
            });
            return newState;
        case SET_QUESTION:
            const nextQuestionState: any = {
                ...state,
                [action.data.conversationId]: {
                    ...state[action.data.conversationId],
                    question: action.data.question,
                }
            }
            return nextQuestionState
        case SET_ANSWER:
            const nextAnswerState: any = {
                ...state,
                [action.data.conversationId]: {
                    ...state[action.data.conversationId],
                    answer: action.data.answer,
                }
            }
            return nextAnswerState
        default: 
            return state
    }
}

export default conversation
