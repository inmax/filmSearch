/*keys object are converted to lowercase*/
export const toLowerCaseKeyObj = (obj: object):object => {
    return Object.entries(obj).reduce((a: any, [key, value]) => {
      a[key.toLowerCase()] = value;
      return a;
    }, {})
  };