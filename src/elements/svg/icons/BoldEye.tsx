import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const BoldEye: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="47"
      height="32"
      viewBox="0 0 47 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.805 17.4306C47.805 17.4306 47.806 17.4285 45.6 16.5L47.806 17.4285C48.0647 16.8356 48.0647 16.1644 47.806 15.5715L45.6 16.5C47.806 15.5715 47.805 15.5694 47.805 15.5694L47.804 15.567L47.8014 15.5612L47.7946 15.5457L47.7738 15.4996C47.7568 15.4621 47.7335 15.4115 47.7037 15.3486C47.6442 15.2227 47.5589 15.0473 47.4469 14.8296C47.2231 14.3944 46.8918 13.7878 46.4461 13.0669C45.5573 11.629 44.1994 9.71343 42.3133 7.7924C38.5303 3.93934 32.5441 0 24 0C15.4559 0 9.46966 3.93934 5.68666 7.7924C3.80055 9.71343 2.44272 11.629 1.55387 13.0669C1.1082 13.7878 0.77687 14.3944 0.553077 14.8296C0.441091 15.0473 0.355758 15.2227 0.296253 15.3486C0.266493 15.4115 0.243167 15.4621 0.226174 15.4996L0.205411 15.5457L0.198561 15.5612L0.196015 15.567L0.19496 15.5694C0.19496 15.5694 0.194052 15.5715 2.39992 16.5L0.194052 15.5715C-0.064684 16.1644 -0.064684 16.8356 0.194052 17.4285L2.39992 16.5C0.194052 17.4285 0.19496 17.4306 0.19496 17.4306L0.196015 17.433L0.198561 17.4388L0.205411 17.4543L0.226174 17.5004C0.243167 17.5379 0.266493 17.5885 0.296253 17.6515C0.355758 17.7773 0.441091 17.9527 0.553077 18.1704C0.77687 18.6056 1.1082 19.2122 1.55387 19.9331C2.44272 21.371 3.80055 23.2866 5.68666 25.2076C9.46966 29.0607 15.4559 33 24 33C32.5441 33 38.5303 29.0607 42.3133 25.2076C44.1994 23.2866 45.5573 21.371 46.4461 19.9331C46.8918 19.2122 47.2231 18.6056 47.4469 18.1704C47.5589 17.9527 47.6442 17.7773 47.7037 17.6515C47.7335 17.5885 47.7568 17.5379 47.7738 17.5004L47.7946 17.4543L47.8014 17.4388L47.804 17.433L47.805 17.4306ZM24 21.2143C21.349 21.2143 19.2 19.1036 19.2 16.5C19.2 13.8964 21.349 11.7857 24 11.7857C26.651 11.7857 28.8 13.8964 28.8 16.5C28.8 19.1036 26.651 21.2143 24 21.2143ZM14.4 16.5C14.4 11.2927 18.6981 7.07143 24 7.07143C29.3019 7.07143 33.6 11.2927 33.6 16.5C33.6 21.7073 29.3019 25.9286 24 25.9286C18.6981 25.9286 14.4 21.7073 14.4 16.5Z"
        fill=""
      />
    </svg>
  )
})

BoldEye.displayName = 'BoldEye'