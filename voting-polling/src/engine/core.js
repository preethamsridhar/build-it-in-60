export const pollingConfig = {
    id: crypto.randomUUID(),
    question: {
        id: crypto.randomUUID(),
        label: 'Whats your favourite UI framework'
    },
    options: {
        id1: {
            id: 'id1',
            label: 'React',
            answerCount: 0,
        },
        id2: {
            id: 'id2',
            label: 'Angular',
            answerCount: 0,
        },
        id3: {
            id: 'id3',
            label: 'Vue',
            answerCount: 0,
        }
    },
    totalAnswerCount: 0,
}
