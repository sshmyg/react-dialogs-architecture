# React dialogs architecture

You can use this architecture to manage dialogs in your react project.

[Example](https://codesandbox.io/s/o45z7myy15)

Example works with [recompose](https://github.com/acdlite/recompose), but you can simply throw it out.

## Architecture:
1. __Provider__ - contains main logic to manage `open`, `close` methods. You can add any additional methods you want.
2. __Container__ - render logic for Dialog component. Where component should be rendered, what props should it take...
3. __Component__ - this component renders by dialogs container on 2d step. Could be default and custom.
4. __HOC__ - `withDialog` provide access to main logic, 'open', 'close'...

## Usage:
- __Static dialogs__ (without dynamic content, such as changable state or something. Open once, and this dialog shouldn't change until close): Wrap your component with `withDialog` hoc and use `this.props.openDialog('dialog-id')` and `this.props.closeDialog('dialog-id')`.
- __Dynamic dialogs__ (with changable state):
1. Add __Dialogs container__ to your render: __(`standalone` and `id` - required)__. Any additional props will be thrown to __Dailog component__ and you can reach it htere. Any state or something.
```javascript
<DialogsContainer
    standalone
    id="test2"
/>
```
2. Call `openDialog` with same ID and additional param `standalone` on any required action to open this dialog.
```
this.props.openDialog('test2', { standalone: true })}
```
3. To close this dialog, just call `this.props.closeDialog('test2')` with propper ID
