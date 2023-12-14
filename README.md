# Kwin Window to Desktop & Refocus
A kwin script to send active window to a numbered virtual desktop and refocus on current desktop. Similar to XFCE the focus is applied to (if any) topmost window.

## Why
The default behaviour KDE's window to desktop functionality keeps the focus on the moved window, which is not in current desktop anymore.

## Install
Clone the repository and install it via `kpackagetool5`.
```shell
kpackagetool5 --type=KWin/Script -i <dir>
```
