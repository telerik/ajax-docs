---
title: Telerik.Web.UI.RadContextMenuShownEventArgs
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadContextMenuShownEventArgs : Sys.EventArgs 

## Methods

###  get_targetElement

returns a reference to the DOM element that was right-clicked to show the context menu. If the menu appeared in response to a call to the show or showAt method rather than a right-click on one of its targets, get_targetElement returns null.

#### Parameters

#### Returns

`Element` 

###  get_domEvent

returns a reference to the DOM event that caused the opening.

#### Parameters

#### Returns

`Sys.UI.DomEvent`