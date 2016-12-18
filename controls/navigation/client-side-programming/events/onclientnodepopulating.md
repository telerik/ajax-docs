---
title: OnClientNodePopulating
page_title: OnClientNodePopulating | RadNavigation for ASP.NET AJAX Documentation
description: OnClientNodePopulating
slug: navigation/client-side-programming/events/onclientnodepopulating
tags: onclientnodepopulating
published: True
position: 11
---

# OnClientNodePopulating


The **OnClientNodePopulating** client-side event occurs just before child nodes are loaded from a Client DataSource. The event can be canceled.

The event handler receives parameters:

1. The **RadNavigation** instance that fired the event.

1. Event arguments with functions:

* **get_constructor()** retrieves the **RadNavigation** instance that fired the event.

* **get_cancel()** returns a boolean value indicating whether the call to the Client DataSource was canceled.

* **set_cancel()** - call this function to specify whether the event should be canceled (true) or not (false).

* **get_owner()** retrieves an object that is automatically passed to the Client DataSource. 


# See Also

 * [OnClientNodePopulated]({%slug navigation/client-side-programming/events/onclientnodepopulated%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [OnClientNodePopulationFailed]({%slug treeview/client-side-programming/events/onclientnodepopulationfailed%})

