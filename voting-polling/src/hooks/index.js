import { useState } from "react"

export const usePolling = (config) => {
    const [pollingState, setPollingState] = useState(config);

    const addAVote = (id) => {
        setPollingState((state) => {
            return {
                ...state,
                options: {
                    ...state.options,
                    [id]: {
                        ...state.options[id],
                        answerCount: state.options[id].answerCount + 1,
                    }
                },
                totalAnswerCount: state.totalAnswerCount + 1,
            }
        })
    }

    return {
        pollingState,
        addAVote,
    }
}