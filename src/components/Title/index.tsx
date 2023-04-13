import styled from './Title.module.scss'

type TitleProps = {
    text: string
} & ReactProps.Component

const Title = ({ ...props }: TitleProps) => {
    return (
        <div className={styled.wrapper} style={props.style}>
            <div className={styled.inner}>
                <div className={styled.text}>{props.text}</div>
                <div className={styled.underline}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Title