import Button from 'components/Button'
import styled from './ServiceCard.module.scss'

type ServiceCardProps = {
    img?: string
    service?: string
}

const ServiceCard = (props: ServiceCardProps) => {
    return (
        <div className={styled.wrapper}>
            <div className={styled.circle}>
                <img src={props.img} alt="service" />
            </div>
            <div className={styled.name}>{props.service}</div>
            <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.</p>
            <Button>VIEW MORE</Button>
        </div>
    )
}

export default ServiceCard