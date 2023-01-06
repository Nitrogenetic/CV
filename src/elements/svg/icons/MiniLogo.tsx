import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const MiniLogo: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls(className)}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...otherProps}
    >
      <rect width="36" height="36" fill="url(#mini-logo-icon-pattern)" />
      <defs>
        <pattern id="mini-logo-icon-pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#mini-logo-icon" transform="translate(0 -0.00126263) scale(0.00126263)" />
        </pattern>
        <image
          id="mini-logo-icon"
          width="792"
          height="794"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxgAAAMaCAYAAAAFteBvAAAgAElEQVR4Ae3du6tlV54f8BtN4qQn6sgg5g8YBBM5cgXTwXSkxJNMMFUyxpgeQ9kgsB2422AHhYMRyIHBCipSXDgxKKqgnMoK5cBQNE4MgpExTDAzcMyvr47uqfPce53f3ns9PgfEvbp1Hnv/1mc9vuu8Hh4WuOwenv9s9/D8mf/UgAEGGGCAAQYYYICBag38bIEocP9d7h6ef7x7+PTl7uHFm93Di/e7hxc7/6kBAwwwwAADDDDAAAPNGIg1/JvHNf3zj+9PCAX38PgMxae/ESiaQSP0Cb4MMMAAAwwwwAADUw283z3EWv/58s9wHASLHyRS4YIBBhhggAEGGGCAga4N/LBo0PjxZVCCheQ7Nfm6HisMMMAAAwwwwEAfBiJovCx44dP5mzw+a/G791cA0gcQ7agdGWCAAQYYYIABBkoMvLn7ZVOPb+B+8a2nvrp+6qsEl9sYlBhggAEGGGCAgTENfBsZ4fxTEzf++mO48JKoMeEYMLQ7AwwwwAADDDDAwCUDP8wOGcKFZyw8a8UAAwwwwAADDDDAwBUD00PGj++58LIoifVSYvV3NhhggAEGGGCAAQbCQLxc6vZH2f74hXnQQMMAAwwwwAADDDDAAAO3DLy5+s6L3cPzT648DXLrzv07gAwwwAADDDDAAAMMDGfg+SdnQ8aPL43ypu7hQHhtoVDNAAMMMMAAAwwwcJeBeD/G6UulHr+l7647llaFEwYYYIABBhhggAEGhjTw6W8+eBbDsxeCldTOAAMMMMAAAwwwwMAdBj58FiO++vuOO5NSh0ypOqA+wwADDDDAAAMMMHBo4NOXPz2L8fgRU4f/6HdYGGCAAQYYYIABBhhgYJaBb38XMHYPzz9SuFmF84yNZ2wYYIABBhhggAEGGDhr4PlHD14eJVwImAwwwAADDDDAAAMM5Bj49OXD7uHF65w70yjqyAADDDDAAAMMMMDA4AZeR8D4dvAieHrr7NNbBgf9ggEGGGCAAQYYYGC2gW8jYFhgqwEDDDDAAAMMMMAAAwykGBAwQEqBJKgK6gwwwAADDDDAAANhQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmth14IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEGGGCAAQbSDAgYMKVhsmNhx4IBBhhggAEGGGBAwBAwBAwGGGCAAQYYYIABBtIMCBgwpWGyY2HHggEGGGCAAQYYYEDAEDAEDAYYYIABBhhggAEG0gwIGDClYbJjYceCAQYYYIABBhhgQMAQMAQMBhhggAEG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"
        />
      </defs>
    </svg>
  )
})

MiniLogo.displayName = 'MiniLogo'
