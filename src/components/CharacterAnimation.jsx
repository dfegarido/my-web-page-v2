import { useEffect, useState } from "react"


const CharacterAnimation = ({ label }) => {
    const [description, setDescription] = useState('')
    let index = 0
    let developer = label[0]
    let labelIndex = 0

    const loop = () => {
        if(index < developer?.length){
            setDescription(prevState => prevState + developer[index])
            setTimeout(() => {
                index++;
                loop()
            }, 200)
        }else{
            index = 0;
            if(labelIndex < label?.length){
                labelIndex++
                developer = label[labelIndex]
                setDescription('')
                loop()
            }else{
                labelIndex = 0
                developer = label[labelIndex]
                setDescription('')
                loop()
            }
            
        }
    }

    

    useEffect(() => {
        loop()
    }, [])

    return (
        <span className="text-neutral-200 font-bold text-2xl sm:text-4xl">
            {description} 
        </span>
    )
}

export default CharacterAnimation