---
title: Differences from RadDock
page_title: Differences from RadDock | RadWindow for ASP.NET AJAX Documentation
description: Differences from RadDock
slug: window/getting-started/differences-from-raddock
tags: differences,from,raddock
published: True
position: 10
---

# Differences from RadDock

The Telerik **RadWindow** component is similar to the **RadDock** component. Both create floating regions on your page that the user can move around, collapse, pin, etc. Both let you specify the command buttons that appear on the title bar, and let you assign client event handlers to respond to user actions. Both have an appearance that you can customize with skins.

However, there are some significant differences between **RadWindow** and **RadDock**:

* **RadWindow** provides support for [using the window as a dialog]({%slug window/how-to/using-radwindow-as-a-dialog%}), including the ability to give the window a modal state, to pass parameters to the window, and to respond to results using a callback function.

* **RadWindow** windows are easy to [open from another HTML element]({%slug window/getting-started/showing-and-positioning%}), and can [act as the target of a link]({%slug window/how-to/using-the-target-attribute%}).

* **RadDock** windows can be docked to docking regions on the page, where they still display their content. **RadWindow**does not support this same behavior. Instead, it allows for minimization into [minimize zones]({%slug window/getting-started/minimize-zone%}).

* **RadWindow** supports an **OnClientPageLoad** event when the content in the window loads. Because **RadDock** does not load external content, it has no analogous event.

* **RadWindow** lets you [open windows from other windows]({%slug window/how-to/opening-a-radwindow-from-within-a-radwindow%}) and [access functions defined in various windows]({%slug window/how-to/calling-functions-in-windows%}).

## See Also

 * [Overview]({%slug window/overview%})

 * [Properties that Affect Window Behavior]({%slug window/getting-started/properties-that-affect-window-behavior%})
