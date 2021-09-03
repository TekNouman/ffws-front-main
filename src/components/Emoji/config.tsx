export enum EmojiEnum {
  hourglass,
  information,
  link,
  magnifying,
  page,
  play,
  studio,
}

export const emojisConfig: Record<EmojiEnum, string> = {
  [EmojiEnum.hourglass]: require('./icons/hourglass.png'),
  [EmojiEnum.information]: require('./icons/information.png'),
  [EmojiEnum.link]: require('./icons/link.png'),
  [EmojiEnum.magnifying]: require('./icons/magnifying.png'),
  [EmojiEnum.page]: require('./icons/page.png'),
  [EmojiEnum.play]: require('./icons/play.png'),
  [EmojiEnum.studio]: require('./icons/studio.png'),
};
