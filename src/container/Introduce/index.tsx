import styled from './Introduce.module.scss'
import logo from '../../assets/images/logo.png';
import Underline from 'components/Underline';
import VideoSource from '../../assets/video/bg.mp4';

const Introduce = () => {
    return (
        <section className={styled.intro}>
            <video autoPlay muted loop>
                <source src={VideoSource} type="video/mp4" />
            </video>
            <div className={styled.content}>
                <img className={styled.logo} src={logo} alt="logo" />
                <div className={styled.slogan}>
                    <h1>WE CREATE</h1>
                    <h1>AMAZING</h1>
                    <h1>DIGITAL EXPERIENCES</h1>
                    <Underline className={styled.line} width={571} />
                </div>
            </div>
            <div className={styled.mask} />
            <div className={styled['scroll-down']}>
                <div className={styled.mouse}></div>
                <p>TASTE US NOW!</p>
            </div>
            <div className={styled.guide}></div>
            <div className={styled.text}>DIGITAL AGENCY</div>
        </section>
    )
}

export default Introduce