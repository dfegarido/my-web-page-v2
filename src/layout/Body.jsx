import { useDispatch, useSelector } from "react-redux"
import CharacterAnimation from "../components/CharacterAnimation"
import About from "../pages/About"
import Services from "../pages/Services"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import { useEffect, useRef } from "react"
import { setReference } from "../store/metadata"
import { 
    WHITE, 
    LIME, 
    FONT_FAMILY } from '../helpers/constants'
import Button from '../components/atom/Button'


const Body = () => {

    const { windowHeight, scrollTop }  = useSelector(({ metadata }) => metadata)
    const homeRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setReference({name: 'homeRef', value: homeRef }))
    })

    const greetings = "Hi i'm"
    const name = "Darwin Fegarido"

    const nameToAnimate = [
        "Javascript Developer",
        "Python Developer",
        "Frontend Developer",
        "Backend Developer",
        "Solution Architect",
        "DevOps", 
        "Shopify Developer",
        "Fullstack Developer",
    ]

    return (
        <div 
            ref={homeRef}
            className="flex-1 flex-row ">
            {/* Landing Page Background */}
            <div 
                className={`bg-cover bg-no-repeat bg-center bg-fixed bg-landing-two flex min-w-full`} 
                style={{ 
                    height: `${windowHeight}px` ,
                }}>
                <div 
                    style={{
                        ...styles.container,
                        ...(scrollTop > 100 ? styles.hideContainer : null),
                    }}
                    className={`flex-1 grid justify-items-center`}>
                    <div  style={styles.greetings} className={`flex-1`}>
                        { greetings }
                    </div>
                    <div  style={styles.name} className={`flex-1`}>
                        { name }
                    </div>
                    <div className="flex-1"  style={styles.iAm}>
                        <p> <CharacterAnimation label={nameToAnimate}/> </p>
                    </div>
                    <div  style={styles.contactBtn} className={`flex-1`}>
                        <Button label={"Contact"} style={styles.contactLabel} className={`h-10`}  />
                    </div>
                </div>
                
            </div>
            <div>
                {/* Pages */}
                <About />
                <Services />
                <Portfolio />
                <Contact />
            </div>
        </div>
        
    )
}

const styles = {
    container: {
        transition: 'opacity .3s',
        opacity: '1',
    },
    hideContainer: {
        opacity: '0'
    },
    greetings: {
        position: 'absolute',
        top: '15rem',
        left: '100px',
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '4.5rem',
        lineHeight: '82px',
        color: WHITE,
    },
    name: {
        position: 'absolute',
        top: '19rem',
        left: '100px',
        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '3.5rem',
        lineHeight: '82px',
        color: WHITE,
    },
    iAm: {
        position: 'absolute',
        height: '68px',
        top: '23rem',
        left: '100px',

        fontFamily: FONT_FAMILY,
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '2rem',
        lineHeight: '68px',

        color: WHITE,

    },
    contactBtn: {
        position: 'absolute',
        height: '68px',
        width: '200px',
        top: '29rem',
        left: '100px',
        color: WHITE,
    },
    contactLabel: {
        fontSize: '21px',
        fontWeight: '600',
        color: LIME
    }
}

export default Body;