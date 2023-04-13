import styled from './Ingredients.module.scss'
import Title from 'components/Title';
import Button from 'components/Button';
import ServiceCard from 'components/ServiceCard';
import Underline from 'components/Underline';
import UnderlineImg from '../../assets/images/ingredients_underline.png';

const services = [
    {
        name: 'UX Design',
        img: require('../../assets/images/ingredient_01.png'),
    }, {
        name: 'UI Design',
        img: require('../../assets/images/ingredient_02.png'),
    }, {
        name: 'website development',
        img: require('../../assets/images/ingredient_03.png'),
    }, {
        name: 'mobile app development',
        img: require('../../assets/images/ingredient_04.png'),
    }, {
        name: 'ecommerce',
        img: require('../../assets/images/ingredient_05.png'),
    }, {
        name: 'customer loyalty',
        img: require('../../assets/images/ingredient_06.png'),
    }, {
        name: 'digital transformation',
        img: require('../../assets/images/ingredient_07.png'),
    }, {
        name: 'digital marketing',
        img: require('../../assets/images/ingredient_08.png'),
    }, {
        name: 'BRANDING',
        img: require('../../assets/images/ingredient_09.png'),
    },
];

const Ingredients = () => {
    return (
        <section className={styled.wrapper}>
            <Title text="OUR INGREDIENTS" style={{ marginBottom: '43px' }} >
                <img src={UnderlineImg} alt="underline" />
            </Title>
            <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.</p>
            <Button>OUR SERVICE</Button>
            <div className={styled.services}>
                {services.map((service, index) => <ServiceCard key={index} service={service.name} img={service.img} />)}
            </div>
            <div className={styled.prompt}>
                <p>VIEW MORE DIGISALAD’S INGRADIENTS</p>
                <Underline className={styled.line} width={416} dot={false} color="#FFBC58" />
            </div>
        </section>
    )
}

export default Ingredients