import { useState, useEffect } from 'react';
import cx from 'classnames';
import Button from 'components/Button';
import styled from './Header.module.scss'
import HeaderLogo from '../../assets/images/logo_header.png';

type HeaderProps = {
    toggle?: boolean;
    onClick?: () => void;
}

const Header = ({ ...props }: HeaderProps) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    return (
        <header className={cx(styled.wrapper, { [styled.sticky]: isSticky })}>
            <div className={styled.inner} >
                <img className={styled.logo} src={HeaderLogo} alt="logo" width={120} height={53} />
                <div className={styled.right}>
                    <Button>START YOUR PROJECT</Button>
                    <div className={cx(styled['nav-wrap'], { [styled.active]: props.toggle })} onClick={props.onClick}>
                        <div className={styled['menu-icon']}>
                            <span className={cx(styled['menu-icon-line'], styled['menu-icon-line-right'])}></span>
                            <span className={styled['menu-icon-line']}></span>
                            <span className={cx(styled['menu-icon-line'], styled['menu-icon-line-left'])}></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header