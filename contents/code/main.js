function getTopmostWindow() {
  let clients = workspace.clientList();
  let desktopCurrent = workspace.currentDesktop;

  // Iterate in reverse order, last item means topmost.
  for (let i=clients.length-1; i > -1; --i) {
    let c = clients[i];
    if (c.desktop == desktopCurrent && !c.minimized) {
      return c;
    }
  }

  return null;
}

function moveWindowToDesktop(window, target) {
  if (window) {
    window.desktop = target;
  }
}

function moveWindowToDesktopAndRefocus(target) {
  moveWindowToDesktop(workspace.activeClient, target);
  // If there are no windows in current desktop, reset focus.
  workspace.activeClient = getTopmostWindow();
}

registerShortcut('moveWindowToDesktopAndRefocus-1', 'Window to Desktop 1 And Refocus', 'Meta+!', function(){moveWindowToDesktopAndRefocus(1);});
registerShortcut('moveWindowToDesktopAndRefocus-2', 'Window to Desktop 2 And Refocus', 'Meta+@', function(){moveWindowToDesktopAndRefocus(2);});
registerShortcut('moveWindowToDesktopAndRefocus-3', 'Window to Desktop 3 And Refocus', 'Meta+#', function(){moveWindowToDesktopAndRefocus(3);});
registerShortcut('moveWindowToDesktopAndRefocus-4', 'Window to Desktop 4 And Refocus', 'Meta+$', function(){moveWindowToDesktopAndRefocus(4);});
