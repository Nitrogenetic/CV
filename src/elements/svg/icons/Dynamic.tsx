// import React, { ReactElement, useEffect, useState } from 'react'
// import { AllIconNames, IconProps } from '~icons'

// const Dynamic = (props: { icon: AllIconNames } & IconProps) => {
//   const { icon, ...otherProps } = props

//   const [Icon, setIcon] = useState<ReactElement>()
//   useEffect(() => {
//     // import(`./${icon}.tsx`).then(res => {
//     //   setIcon(res.default)
//     // })
//   }, [])

//   return Icon ? React.createElement(Icon.type, otherProps) : null
// }

// export default Dynamic
