import CRonaldo from '../../assets/images/ronaldo.jpg'

const Intro = () => {

    const playVideo = () => {
        const playBtn = document.querySelector('.intro__video__playBtn')
        const videoImg = document.querySelector('.intro__video__img')
        const videoDiv = document.querySelector('.intro__video__video')
        videoImg.classList.add('fadeOut')
        videoDiv.classList.add('fadeIn')
        playBtn.classList.add('hidden')
    }

    return(
        <section className="intro bottom-space">
            <div className="intro__container">
                <div className="intro__textBlock">
                    <h1 className="intro__textBlock__title">Hello World! I am <span className="break intro__textBlock__title--name">Cristiano Ronaldo</span></h1>
                </div>
                <div className="intro__video">
                    <div className="intro__video__inner">
                        <img className="intro__video__img" src={CRonaldo} alt="Video BG" />
                        <div className="intro__video__playBtn" onClick={playVideo}>
                            <svg width="0" height="0" viewBox="0 0 50 35.44">
                                <path d="m49.46,10.39c0-5.26-4.06-9.62-9.31-9.99C30.04-.13,19.77-.13,9.72.36,4.78.36.38,5.13.38,10.39-.13,15.47-.13,20.59.38,25.67c0,5.13,4.13,9.3,9.25,9.34h0c5.08.28,10.18.42,15.28.42s10.17-.13,15.2-.4c5.11,0,9.27-4.11,9.34-9.22.72-5.12.72-10.31,0-15.42Zm-3.51,15.13c0,.07,0,.14,0,.21-.02,3.25-2.67,5.87-5.92,5.85,0,0-.01,0-.02,0-10.09.53-20.2.53-30.29,0-3.25-.03-5.87-2.69-5.84-5.94,0-.03,0-.06,0-.09-.5-4.94-.5-9.91,0-14.85,0-.06,0-.13,0-.19-.03-3.41,2.53-6.28,5.92-6.64,5.01-.23,10.06-.33,15.11-.33s10.1.11,15.11.33h.09c3,0,5.84,3.23,5.84,6.64,0,.09,0,.18,0,.26.69,4.88.66,9.83,0,14.71v.04Z"></path>
                                <path d="m33.32,16.54l-12.52-6.45c-.86-.45-1.92-.11-2.37.75-.45.86-.11,1.92.75,2.37h0l9.52,4.89-7.01,3.63v-3.63c0-.97-.78-1.75-1.75-1.75s-1.75.78-1.75,1.75v6.52c0,.97.78,1.75,1.75,1.75.28,0,.56-.06.81-.19l12.52-6.52c.58-.3.95-.9.95-1.56.01-.64-.33-1.24-.89-1.56Z"></path>
                            </svg>
                        </div>
                        <div className="intro__video__video">
                            <iframe src="https://www.youtube-nocookie.com/embed/OUKGsb8CpF8" className="intro__video__video__src" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro