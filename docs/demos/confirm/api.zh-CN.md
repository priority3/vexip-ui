### 预设类型

```ts
type ConfirmType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
```

### Confirm 选项

| 名称            | 类型                                 | 说明                                                                          | 默认值           | 始于     |
| --------------- | ------------------------------------ | ----------------------------------------------------------------------------- | ---------------- | -------- |
| content         | `string`                             | 确认框的提示内容                                                              | `''`             | -        |
| className       | `string \| Record<string, boolean>`  | 提示的自定义类名                                                              | `null`           | -        |
| style           | `string \| Record<string, any>`      | 确认框的内联样式                                                              | `null`           | -        |
| confirmType     | `ConfirmType`                        | 确认按钮的类型                                                                | `'primary'`      | -        |
| confirmText     | `string`                             | 确认按钮的内容                                                                | `locale.confirm` | -        |
| cancelText      | `string`                             | 取消按钮的内容                                                                | `locale.cancel`  | -        |
| icon            | `Record<string, any> \| (() => any)` | 确认框的图标，传入函数时作为 render 函数渲染                                  | `null`           | -        |
| iconColor       | `string`                             | 确认框的图标的颜色                                                            | `''`             | -        |
| onBeforeConfirm | `() => unknown`                      | 设置确认框的确认前回调，支持异步函数和 `Promise`，返回值为 `false` 会阻止关闭 | `null`           | -        |
| renderer        | `() => any`                          | 使用 render 函数渲染自定义渲染                                                | `null`           | -        |
| parseHtml       | `boolean`                            | 是否将 `content` 作为 html 解析                                               | `false`          | `2.0.14` |
