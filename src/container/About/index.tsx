import { useState } from 'react';
import ReactPlayer from 'react-player';
import Title from 'components/Title';
import Button from 'components/Button';
import PlayButtonImg from '../../assets/images/play_button.png';
import UnderlineImg from '../../assets/images/about_underline.png';
import styled from './About.module.scss'

const About = () => {
    const [playing, setPlaying] = useState(false);

    const onReady = () => {
        setTimeout(() => {
            setPlaying(true);
        }, 0);
    };

    return (
        <section className={styled.about}>
            <div className={styled.guide}></div>
            <div className={styled.inner}>
                <Title text="ABOUT DIGISALAD" style={{ marginBottom: '72px' }}>
                    <img src={UnderlineImg} alt="underline" />
                </Title>
                <ReactPlayer
                    className={styled.video}
                    width={960}
                    height={544}
                    style={{ marginBottom: '30px' }}
                    url='https://youtu.be/IeIRJ9jZ5Ro'
                    light
                    controls
                    playing={playing}
                    onReady={onReady}
                    onPause={() => setPlaying(false)}
                    config={{
                        youtube: {
                            playerVars: { showinfo: 1 }
                        }
                    }}
                    playIcon={<img src={PlayButtonImg} width={112} height={112} alt='play' />}
                />
                <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.</p>
                <Button>VIEW MORE</Button>
            </div>
        </section>
    )
}

export default About