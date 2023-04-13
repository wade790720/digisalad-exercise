import cx from 'classnames'
import styled from './Menu.module.scss'
import icon01 from '../../assets/images/ingredient_01.png'
import icon02 from '../../assets/images/ingredient_02.png'
import icon03 from '../../assets/images/ingredient_03.png'
import icon04 from '../../assets/images/ingredient_04.png'
import icon05 from '../../assets/images/ingredient_10.png'
import menuLogo from '../../assets/images/logo_menu.png';
import close from '../../assets/images/close.png';

type MenuProps = {
    toggle: boolean
    onClick: () => void
}

const Menu = ({ ...props }: MenuProps) => {
    return (
        <div className={cx(styled.nav, { [styled.active]: props.toggle })}>
            <header className={cx(styled.header)}>
                <div className={styled.inner} >
                    <img className={cx(styled.logo)} src={menuLogo} alt="logo" width={120} height={53} />
                    <div className={styled.right} onClick={props.onClick}>
                        <img className={cx(styled.logo)} src={close} alt="close" width={22} height={22} />
                    </div>
                </div>
            </header>

            <div className={styled.content}>
                <div className={styled.inner}>
                    <div className={cx(styled.item, styled.about)}>
                        <div className={styled.card}>
                            <img src={icon01} alt="menu01" />
                            <div className={styled.title}>
                                <p>EMPOWERING BRANDS</p>
                                <p>ABOUT US</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx(styled.item,styled.careers)}>
                        <div className={styled.card}>
                            <img src={icon03} alt="menu02" />
                            <div className={styled.title}>
                                <p>BE COOL WITH US</p>
                                <p>CAREERS</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx(styled.item,styled.services)}>
                        <div className={styled.card}>
                            <img src={icon05} alt="menu03" />
                            <div className={styled.title}>
                                <p>AREAS OF EXPERTISE</p>
                                <p>SERVICES</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx(styled.item,styled.works)}>
                        <div className={styled.card}>
                            <img src={icon02} alt="menu04" />
                            <div className={styled.title}>
                                <p>CASE STUDIES</p>
                                <p>WORKS</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx(styled.item,styled.insights)}>
                        <div className={styled.card}>
                            <img src={icon04} alt="menu05" />
                            <div className={styled.title}>
                                <p>OUR STRATEGIES</p>
                                <p>INSIGHTS</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx(styled.item,styled.contact)}>
                        <div className={styled.card}>
                            <div className={styled.title}>
                                <p>START YOUR JOURNEY WITH US</p>
                                <p>CONTACT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu