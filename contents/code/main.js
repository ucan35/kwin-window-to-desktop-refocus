function getTopmostWindowFromDesktop(desktop) {
  // Last item is the topmost window.
  let clients = workspace.stackingOrder;
  for (let i = clients.length - 1; i > -1; --i) {
    let c = clients[i];
    if (c.windowType === 0 && !c.minimized && c.desktops[0] === desktop && c.caption !== "Wayland to X Recording bridge — Xwayland Video Bridge") {
      return c;
    }
  }
  return null;
}

function moveWindowToDesktop(window, desktop) {
  if (window && desktop) {
    window.desktops = desktop;
  }
}

function moveWindowToDesktopAndRefocus(target) {
  desktop = workspace.desktops[target];
  moveWindowToDesktop(workspace.activeWindow, desktop);
  // If there are no windows in current desktop, reset focus.
  workspace.activeWindow = getTopmostWindowFromDesktop(workspace.currentDesktop);
}

registerShortcut('moveWindowToDesktopAndRefocus-1', 'Window to Desktop 1 And Refocus', 'Meta+!', function () { moveWindowToDesktopAndRefocus(0); });
registerShortcut('moveWindowToDesktopAndRefocus-2', 'Window to Desktop 2 And Refocus', 'Meta+@', function () { moveWindowToDesktopAndRefocus(1); });
registerShortcut('moveWindowToDesktopAndRefocus-3', 'Window to Desktop 3 And Refocus', 'Meta+#', function () { moveWindowToDesktopAndRefocus(2); });
registerShortcut('moveWindowToDesktopAndRefocus-4', 'Window to Desktop 4 And Refocus', 'Meta+$', function () { moveWindowToDesktopAndRefocus(3); });
