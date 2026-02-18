import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'



const Showcase = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'})

    useGSAP(() => {
        if(!isTablet){
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin:true,
                }
            });
            timeline.to('.mask img', {
                transform: 'scale(1.1)'
            }).to('.content', {
                opacity: 1,
                y: 0,
                ease: 'power1.in',
                
            })
        }
    }, [isTablet])

    return (
        <section id='showcase'>
            <div className="media">
                <video src='/videos/game.mp4' loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" alt="mask-svg" />
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                introducing {" "}
                                <span className='text-white'>
                                    M4, the next generation of Apple silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                it drives the performance of the new MacBook Air and MacBook Pro, delivering up to 18 hours of battery life. With its powerful CPU, GPU, and Neural Engine, M4 takes on the most demanding tasks with ease, while still being incredibly efficient. It's a game-changer for performance and battery life in a thin and light design.
                            </p>
                            <p>
                                A brand-new display engine delivers stunning visuals, while the advanced media engine allows for smooth 4K video editing and playback. With M4, you can experience the power of a desktop-class chip in a portable design, making it perfect for creative professionals, students, and anyone who needs a powerful and efficient laptop.
                            </p>
                            <p className='text-primary'>
                                Learn more about Apple intelligence
                            </p>
                        </div>
                    </div>
                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x Faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase
