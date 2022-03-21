import { useDispatch, useSelector } from "react-redux"
import CharacterAnimation from "../components/CharacterAnimation"
import About from "../pages/About"
import Services from "../pages/Services"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import { useEffect, useRef } from "react"
import { setReference } from "../store/metadata"


const Body = () => {

    const { windowHeight, scrollTop }  = useSelector(({ metadata }) => metadata)
    const homeRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setReference({name: 'homeRef', value: homeRef }))
    })

    const nameToAnimate = [
        "Fullstack Developer", 
        "Darwin Fegarido",
        "Solution Architect",
        "UI / UX Designer", 
        "SEO Specialist",
        "Dev Ops",
    ]

    return (
        <div 
            ref={homeRef}
            className="w-full flex-row ">
            {/* Landing Page Background */}
            <div 
                className={`bg-cover bg-no-repeat bg-center bg-fixed bg-landing-two`} 
                style={{ height: `${windowHeight}px` }}>
                <div style={{
                    ...styles.container,
                    ...(scrollTop > 100 ? styles.hideContainer : null)
                }}>
                    <p  style={styles.hello}>HELLO</p>
                    <div className="text-center "  style={styles.iAm}>
                        <p>I am <CharacterAnimation label={nameToAnimate}/> </p>
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
        position: 'relative',
        top: '170px',
        transition: 'opacity .3s',
        opacity: '1',
    },
    hideContainer: {
        opacity: '0'
    },
    hello: {
        position: 'absolute',
        width: '155px',
        height: '82px',
        left: '642px',
        top: '199px',
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '60px',
        lineHeight: '82px',
        color: '#FFFFFF',
    },
    iAm: {
        position: 'absolute',
        height: '68px',
        width: '100%',
        top: '303px',

        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '50px',
        lineHeight: '68px',

        color: '#FFFFFF',

    },
}

export default Body;