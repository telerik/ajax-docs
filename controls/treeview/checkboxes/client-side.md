---
title: Client-Side
page_title: Client-Side | UI for ASP.NET AJAX Documentation
description: Client-Side
slug: treeview/checkboxes/client-side
tags: client-side
published: True
position: 2
---

# Client-Side



## Events

* __OnClientNodeChecking:__This event event fires prior to selecting a checkbox in RadTreeView.The function has a single parameter, the instance of the checked Node. This event can be used to prevent the Node from being checked.

* __OnClientNodeChecked:__This event is fired immediately after __OnClientNodeChecking__ event, the only difference is that the checked status of the Node is changed to reflect the new value and the action __cannot__ be cancelled.

## Methods

* __get_checked()__: This function returns __True__if the Node is checked and False if the Node is not checked.

* __get_parent()__: Returns the parent Node of a child Node.

* __set_checked(true/false):__ Checks or un-checks a given Node.

* __get_checkElement():__ Returns the HTML element that corresponds to the checkbox of the Node.

For more information, see [Client-Side Programming]({%slug treeview/client-side-programming/overview%}).

# See Also

 * [Overview]({%slug treeview/client-side-programming/events/overview%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
