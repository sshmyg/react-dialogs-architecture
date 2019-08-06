# React dialogs architecture

You can use this architecture to manage dialogs in your react project.

# Demo
[Simple usage](https://codesandbox.io/s/react-dialogs-architecturesimple-usage-gpgix)

# Architecture:
1. __Provider__ - contains main logic to manage `open`, `close` methods. You can add any additional methods you want.
2. __containers/Dialog__ - render logic for Dialog component. Where component should be rendered, what props should it take...
3. __components/Dialog__ - this component renders by dialog container on 2d step. Could be default and custom.
4. __hooks/useDialog__ - provide access to main logic, 'open', 'close'...

# Usage:
- __Static dialogs__ (without dynamic content, such as changable state or something. Open once, and this dialog shouldn't change until close): Use hook`useDialog` which returns required methods like `openDialog('dialog-id')` and `closeDialog('dialog-id')`.
- __Dynamic dialogs__ (with changable state):
1. Add __Dialog container__ to your render: __(`standalone` and `id` - required)__. Any additional props will be passed to __Dailog component__ and you can reach it there. Any state or something.
```javascript
<DialogsContainer
    standalone
    id="test2"
/>
```
2. Call `openDialog` with same ID and additional param `standalone` on any required action to open this dialog.
```
openDialog('test2', { standalone: true })}
```
3. To close this dialog, just call `closeDialog('test2')` with propper ID
