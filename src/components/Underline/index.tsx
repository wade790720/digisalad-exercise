import cx from 'classnames'
import styled from './Underline.module.scss'

type UnderlineProps = {
    dot?: boolean
    width?: number
    color?: string
} & ReactProps.WithClassName & ReactProps.WithStyle

const Underline = ({ dot = true, color = '#26c6d0', ...props }: UnderlineProps) => {
    return (
        <div className={cx(styled.line, { [styled.dot]: dot }, props.className)} style={{ width: props.width, background: color, ...props.style }} />
    )
}

export default Underline