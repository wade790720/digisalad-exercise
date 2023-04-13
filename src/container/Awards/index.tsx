import styled from './Awards.module.scss'
import Title from 'components/Title';
import AwardImg from '../../assets/images/award.png'
import UnderlineImg from '../../assets/images/awards_underline.png';

const Awards = () => {
    return (
        <section className={styled.wrapper}>
            <div className={styled.awards}>
                <div className={styled.left}>
                    <Title text="AWARDS"  style={{ marginBottom: '30px' }} >
                        <img src={UnderlineImg} alt="underline" />
                    </Title>
                    <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. </p>
                </div>
                <div className={styled.right}>
                    {Array(4).fill(0).map((_, index) => <img key={index} src={AwardImg} alt="award" />)}
                </div>
            </div>
            <div className={styled.bg} />
        </section>
    )
}

export default Awards