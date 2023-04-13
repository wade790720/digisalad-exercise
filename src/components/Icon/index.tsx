import React from "react"
import Svg from "./svg"
import cx from "classnames"
import styled from "./Icon.module.scss"

export type IconProps = {
  /**
   * Fill in the icon name.
   */
  name: string
  width?: number
  height?: number
} & ReactProps.WithClassName &
  ReactProps.WithStyle

export const Icon = (props: IconProps) => {
  const camelCased = props.name.replace(/-([a-z])/g, g => g[1].toUpperCase())
  const componentName = camelCased.charAt(0).toUpperCase() + camelCased.slice(1)

  const compareIcon: { [key: string]: JSX.Element } = {
    ArrowUp: <Svg.ArrowUp />,
    ArrowDown: <Svg.ArrowDown />,
    ArrowLeft: <Svg.ArrowLeft />,
    ArrowRight: <Svg.ArrowRight />,
    ArrowsOutLineVertical: <Svg.ArrowsOutLineVertical />,
    Search: <Svg.Search />,
    Group: <Svg.Group />,
    Information: <Svg.Information />,
    Cross: <Svg.Cross />,
    Calendar: <Svg.Calendar />,
    UpTriangle: <Svg.UpTriangle />,
    DownTriangle: <Svg.DownTriangle />,
    Dash: <Svg.Dash />,
    Shortcut: <Svg.Shortcut />,
    Clock: <Svg.Clock />,
    Plus: <Svg.Plus />,
    Trash: <Svg.Trash />,
    Watch: <Svg.Watch />,
    WatchFilled: <Svg.WatchFilled />,
    WatchHidden: <Svg.WatchHidden />,
    Bookmark: <Svg.Bookmark />,
    BookmarkFilled: <Svg.BookmarkFilled />,
    BulletList: <Svg.BulletList />,
    Check: <Svg.Check />,
    Edit: <Svg.Edit />,
    Warning: <Svg.Warning />,
    Setting: <Svg.Setting />,
    Lock: <Svg.Lock />,
    CircleCross: <Svg.CircleCross />,
  }

  return (
    <div
      className={cx(
        { [styled["arrow-wrapper"]]: componentName.includes("Arrow") },
        props.className,
      )}
      style={{ display: "flex", ...props.style }}>
      {React.cloneElement(compareIcon[componentName], {
        ...(props.width && { width: props.width }),
        ...(props.height && { height: props.height }),
      })}
    </div>
  )
}

export default Icon
