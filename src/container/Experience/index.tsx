import styled from './Experience.module.scss'
import Title from 'components/Title';
import ExperienceImg from '../../assets/images/brand_experience.png'
import UnderlineImg from '../../assets/images/experience_underline.png';

const Experience = () => {
    return (
        <section className={styled.wrapper}>
            <Title text="OUR BRAND EXPERIENCE" style={{ marginBottom: '54px' }}>
                <img src={UnderlineImg} alt="underline" />
            </Title>
            <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.</p>
            <img src={ExperienceImg} alt="experience" />
        </section>
    )
}

export default Experience