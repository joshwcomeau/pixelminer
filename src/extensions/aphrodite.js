import { StyleSheet as originalStyleSheet } from 'aphrodite/no-important';

export const globalSelectorHandler = (selector, _, generateSubtreeStyles) => {
  console.log('SELECTOR', selector)
  if (selector[0] !== '*') {
    return null;
  }

  console.log(selector)

  return generateSubtreeStyles(selector.slice(1));
};

const { StyleSheet, css } = originalStyleSheet.extend([{
  selectorHandler: globalSelectorHandler,
}]);

export { StyleSheet, css };
