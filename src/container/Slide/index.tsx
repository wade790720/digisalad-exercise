import cx from 'classnames';
import { useState } from "react";
import Slider from 'react-slick';
import SlideImg from '../../assets/images/slide.png'
import Underline from 'components/Underline';
import styled from './Slide.module.scss'

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={cx(className, styled.next)}
      style={{ ...style, display: "block", background: `url('${require('../../assets/images/right.png')}`, width: 56, height: 56 }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={cx(className, styled.prev)}
      style={{ ...style, display: "block", background: `url('${require('../../assets/images/left.png')}`, width: 56, height: 56 }}
      onClick={onClick}
    />
  );
}

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <section className={styled.wrapper}>
      <div className={styled.pagination}>
        <div>0{currentSlide + 1}</div>
        <div className={styled.separation}></div>
        <div style={{ textAlign: 'right' }}>04</div>
      </div>
      <Slider {...settings}>
        {Array(4).fill(0).map((image, index) => (
          <div className={styled.outer} key={index}>
            <div className={styled.inner}>
              <div className={styled.app}>
                <img src={SlideImg} alt={`Slide ${index}`} />
              </div>
              <div className={styled.description}>
                <p className={styled.showcase}>HIGHLIGHTED SHOWCASE</p>
                <div className={styled.title}>
                  <h2>LP CLUB MOBILE APP</h2>
                  <Underline className={styled.line} width={401} />
                </div>
                <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Slide;