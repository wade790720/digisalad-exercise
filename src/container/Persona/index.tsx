import styled from './Persona.module.scss'
import AvatarImg from '../../assets/images/avatar.png'
import QuoteImg from '../../assets/images/quote.png'

const Persona = () => {
    return (
        <section className={styled.wrapper}>
            <div className={styled.bg} />
            <div className={styled.persona}>
                <div className={styled.left}>
                    <img src={AvatarImg} alt="avatar" />
                    <p className={styled.name}>Tony Ng</p>
                    <p className={styled.title}>Founder & Creative Director</p>
                </div>
                <div className={styled.right}>
                    <img src={QuoteImg} alt="quote" />
                    <p>A great digital work isn’t about designing beautiful pages purely. It is about context - how do we deliver the
                        <span> right experience to the right person at the right time</span>.
                        The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Persona