import React from "react"
import Icon from "components/Icon/index"
import { Button, ButtonProps } from "components/Button/Button"

export type IconButtonProps = ButtonProps

const IconButton = (props: IconButtonProps) => {
  const iconConfig = { leftIcon: false, rightIcon: false }
  const count = React.Children.count(props.children)
  React.Children.forEach(props.children, (child, index) => {
    // 如果 button 中只有 icon，就不處理針對 icon 附加的樣式
    if (!React.isValidElement(child) || count === 1) return
    if (child.type === Icon) {
      if (index === 0) iconConfig.leftIcon = true
      else iconConfig.rightIcon = true
    }
  })

  const customChildren: React.ReactNode[] = []
  React.Children.forEach(props.children, (child, index) => {
    if (React.isValidElement(child) && child.type === Icon && count !== 1) {
      customChildren.push(
        React.cloneElement(child, {
          ...child.props,
          style: index === 0 ? { marginRight: "4px" } : { marginLeft: "4px" },
          key: index,
        }),
      )
    } else if (child) {
      customChildren.push(child)
    }
  })

  return (
    <Button
      style={{
        ...(iconConfig.leftIcon && { paddingLeft: "8px" }),
        ...(iconConfig.rightIcon && { paddingRight: "8px" }),
      }}
      {...props}>
      {customChildren}
    </Button>
  )
}

export default IconButton
