import {useEffect, useState} from "react";

const Algo = () => {
    const [isFriend, setIsFriend] = useState(null)
    const [error, setError] = useState(false)
    const [text, setText] = useState(`Benjamin est ami avec Paul
Sophie est amie avec moi
Je suis ami avec Benjamin
---
Est-ce que Sophie est mon amie ?`)

    useEffect(() => {
        setIsFriend(null)
        setError(null)
    }, [text])


    const is_friend = () => {
        const friendships = {}

        // Séparation des infos et de la question
        const splitText = text.split('---')

        if (splitText.length !== 2) {
            setError('Le texte ne respecte pas le format demandé')
            return false
        }
        const data = splitText[0].trim()

        // Récupération de la question
        const question = splitText[1].trim()

        // Récupération du prénom de la personne qu'on veut vérifier
        const rgx = /Est-ce que (.+) est mon ami(e)? \?/gm
        const resRgx = rgx.exec(question)
        if (!resRgx) {
            setError('Le format de la question ne semble pas être respécté.')
            return false
        }
        const person = resRgx[1]

        // Récupération de chaque ligne des infos
        const links = data.split(/\r?\n|\r|\n/g)

        // Création d'un dictionnaire avec chaque personne et ses relations directes
        links.map((v) => {
            const rgx1 = /(.+) est ami(e)? avec (.+)/gm
            const rgx2 = /(.+) suis ami(e)? avec (.+)/gm
            const res = rgx1.exec(v) || rgx2.exec(v)
            if (res?.length) {
                const a = res[1] === 'Je' ? 'moi' : res[1]
                const b = res[3] === 'Je' ? 'moi' : res[3]
                if (!friendships[a]) friendships[a] = []
                if (!friendships[b]) friendships[b] = []
                friendships[a].push(b)
                friendships[b].push(a)
            }
        })

        if (!friendships[person]) {
            setError('Cette personne n‘est pas dans la liste')
            return false
        }


        // Vérification de la relation
        setIsFriend(check_relation([person], friendships, []))
    }

    const check_relation = (relations, data, blackList) => {
        // Si toutes les relations de la personne qu'on vérifie sont blacklistée, pas de lien avec cette personne
        // Sinon on check si la personne est amie directe avec "moi"
        if (relations.some((v) => !blackList.includes(v))) {
            for (let i = 0; i < relations.length; i++) {
                if (!blackList.includes(relations[i])) {
                    if (data[relations[i]].includes('moi')) return true
                    else {
                        // je blacklist les relations que j'ai déjà vérifiées pour éviter uen boucle infinie
                        blackList.push(relations[i])
                        // La personne en question n'est pas directement amie avec moi, je check si un de ses amis est ami avec moi

                        if (check_relation(data[relations[i]], data, blackList)) return true
                    }
                }
            }
        }
        return false
    }
    return(
        <div className='flex justify-center'>
            <div className='flex flex-col items-center justify-center py-10 space-y-[40px] w-full'>
                <div className='flex items-center justify-between w-full'>
                    <h2 className='font-bold text-[2.25rem] self-start'>Copain or not copain ?</h2>
                </div>
                <div className='max-w-[640px] space-y-[40px] flex flex-col'>
                    <span className='text-[1rem]'>Renseignez les relations de vos amis et vérifiez si les amis de vos amis sont vos amis !</span>
                    <textarea className={'outline-none w-full h-[200px] border pt-[20px] px-[30px] pb-[10px]  rounded-[20px] ' + (error ? 'border-red-700' : 'focus:border-[#32b48d] border-[#d1d1d1]')} value={text} onChange={(e) => setText(e.target.value)} />
                    {error ? <span className='text-center text-red-700'>{error}</span> : null}
                    <button className='text-[1.125rem] py-[20px] px-[40px] rounded-[110px] bg-[#4ecf89] text-white font-bold self-end' onClick={() => is_friend()}>Tester l‘amitié</button>
                    {isFriend !== null ? (
                        <>
                            {isFriend ? <div className='text-center p-[30px] w-full bg-[#eefbf4] text-[#0b5351] rounded-[20px]'>Vous êtes ami(e) avec cette personne ! :D</div> : <div className='rounded-[20px] text-center p-[30px] w-full bg-red-200 text-red-700'>Vous n‘êtes pas ami(e) avec cette personne ! :(</div>}
                        </>
                    ) : null}
                </div>
            </div>
        </div>)
}


export default Algo
