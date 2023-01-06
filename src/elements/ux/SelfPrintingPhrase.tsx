import React, { FC, memo } from 'react';
import cls from 'classnames';

export interface SelfPrintingPhraseProps {
  string: string;
  scrollY: number;
  screenHeight: number;
  howMuchFullScreensAnimationTakes: number;
  isTerminalSticks?: boolean;
}

const SelfPrintingPhrase: FC<SelfPrintingPhraseProps> = memo((props) => {
  const {
    string,
    scrollY,
    screenHeight,
    howMuchFullScreensAnimationTakes,
    isTerminalSticks,
  } = props;

  const phrase = () => {
    const lettersArray = string.split('');
    let step =
      (screenHeight * howMuchFullScreensAnimationTakes) / lettersArray.length;
    if (isTerminalSticks) {
      step =
        (screenHeight * howMuchFullScreensAnimationTakes) /
        (lettersArray.length + 18);
      const phraseWithoutSticks = lettersArray.map((letter, index) => {
        return (
          <>
            <span
              className={cls(
                { hidden: scrollY <= step * (index + 12) },
                { inline: scrollY > step * (index + 12) }
              )}
            >
              {letter}
            </span>
            <span
              className={cls(
                'select-none',
                {
                  hidden:
                    scrollY <= step * (index + 12) ||
                    scrollY > step * (index + 13),
                },
                { inline: scrollY > step * (index + 12) }
              )}
            >
              |
            </span>
          </>
        );
      });
      const startingSticks = [
        <span
          className={cls(
            'select-none',
            {
              hidden: scrollY <= step || scrollY > step * 2,
            },
            { inline: scrollY > step }
          )}
        >
          |
        </span>,
        <span
          className={cls(
            'select-none',
            {
              hidden: scrollY <= step * 4 || scrollY > step * 6,
            },
            { inline: scrollY > step * 4 }
          )}
        >
          |
        </span>,
        <span
          className={cls(
            'select-none',
            {
              hidden: scrollY <= step * 8 || scrollY > step * 10,
            },
            { inline: scrollY > step * 8 }
          )}
        >
          |
        </span>,
      ];
      const finishingSticks = [
        <span
          className={cls(
            'select-none',
            {
              hidden:
                scrollY <= step * (lettersArray.length + 18 - 4) ||
                scrollY > step * (lettersArray.length + 18 - 2),
            },
            { inline: scrollY > step * (lettersArray.length + 18 - 4) }
          )}
        >
          |
        </span>,
        <span
          className={cls(
            'select-none',
            { hidden: scrollY <= step * (lettersArray.length + 18) },
            { inline: scrollY > step * (lettersArray.length + 18) }
          )}
        >
          |
        </span>,
      ];
      return [...startingSticks, ...phraseWithoutSticks, ...finishingSticks];
    }
    return lettersArray.map((letter, index) => {
      return (
        <span
          className={cls(
            { hidden: scrollY <= step * (index + 1) },
            { inline: scrollY > step * (index + 1) }
          )}
        >
          {letter}
        </span>
      );
    });
  };

  return <>{phrase()}</>;
});

SelfPrintingPhrase.displayName = 'SelfPrintingPhrase';

export { SelfPrintingPhrase };
