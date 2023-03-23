import { useState } from "react";


const Input = (props) => {
    const [value, setValue] = useState("")
    const [focus, setFocus] = useState(false)

    return (
        <div {...props} className={`relative ${props?.className}`}>
            
            <input 
                className="absolute bg-neutral-200 rounded-md w-full h-10 px-3 pt-3 text-xs text-neutral-600 "
                type={props?.type} 
                value={value}
                onChange={ e => setValue(e.target.value)}
                onFocus={() => setFocus(false)}
                onBlur={() => setFocus(false)}
                required={true}
                autoFocus={false}
            />
            <div className={`transition-all font-bold duration-300 absolute z-0 ml-3 text-neutral-400 ${focus || value.length > 0 ? 'text-xs mt-1' : 'text-base mt-2'}`}>
                { props?.label }
            </div>
        </div>
    )
}

export default Input;