const TAG_NAME = 'progress'

module.exports = function ({ print }) {
  /**
   * @type {function(isError: (number|boolean|string)?): void} aliLog
   * @desc - 无法转换时告知用户的通用方法，接受0个或1个参数，意为是否error级别
   */
  const aliLog = print('ali', TAG_NAME)
  return {
    test: TAG_NAME,
    props: [
      {
        test: /^(border-radius|font-size|color|active-mode)$/,
        ali: aliLog()
      },
      {
        test: /^(activeColor|backgroundColor)$/,
        ali (obj) {
          const propsMap = {
            'activeColor': 'active-color',
            'backgroundColor': 'background-color'
          }
          obj.name = propsMap[obj.name]
          return obj
        }
      }
    ],
    event: [
      {
        test: /^(activeend)$/,
        ali: aliLog()
      }
    ]
  }
}