---
title: Client-Side
page_title: Client-Side | RadTreeView for ASP.NET AJAX Documentation
description: Client-Side
slug: treeview/checkboxes/client-side
tags: client-side
published: True
position: 2
---

# Client-Side



## Events

* **OnClientNodeChecking:**This event event fires prior to selecting a checkbox in RadTreeView.The function has a single parameter, the instance of the checked Node. This event can be used to prevent the Node from being checked.

* **OnClientNodeChecked:**This event is fired immediately after **OnClientNodeChecking** event, the only difference is that the checked status of the Node is changed to reflect the new value and the action **cannot** be cancelled.

## Methods

* **get_checked()**: This function returns **True**if the Node is checked and False if the Node is not checked.

* **get_parent()**: Returns the parent Node of a child Node.

* **set_checked(true/false):** Checks or un-checks a given Node.

* **get_checkElement():** Returns the HTML element that corresponds to the checkbox of the Node.

For more information, see [Client-Side Programming]({%slug treeview/client-side-programming/overview%}).

# See Also

 * [Overview]({%slug treeview/client-side-programming/events/overview%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
