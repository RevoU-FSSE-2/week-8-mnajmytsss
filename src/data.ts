export interface Financial {
    id: number
    type: boolean
    name: string
    details: string
    amount: number
}

export let financials: Financial[] = [
    {
        id: 1,
        name: "Najmy",
        type: true,
        details: "Nabung",
        amount: 100000
    },
    {
        id: 2,
        name: "Nadhief",
        type: true,
        details: "Gajian",
        amount: 1000000
    },
    {
        id: 3,
        name: "Fanya",
        type: false,
        details: "Makan malam",
        amount: 100000
    },
    {
        id: 4,
        name: "Rayhan",
        type: true,
        details: "Gajian",
        amount: 1000000
    },
    {
        id: 5,
        name: "Alika",
        type: false,
        details: "Jajan",
        amount: 20000
    }
]