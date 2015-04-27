---
title: Building a Simple TreeView
page_title: Building a Simple TreeView | RadTreeView for ASP.NET AJAX Documentation
description: Building a Simple TreeView
slug: treeview/getting-started/building-a-simple-treeview
tags: building,a,simple,treeview
published: True
position: 0
---

# Building a Simple TreeView



## 

The following tutorial will demonstrate how to create a simple treeview using the designer and shows how to:

* Create root level nodes.

* Create child nodes.

* Apply a pre-defined style to the treeview.

* Display checkboxes next to nodes.


>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted08.png)

1. In a new AJAX Enabled Web Application, drop a RadTreeView to the default form.

1. Open the [Smart Tag]({%slug treeview/design-time/smart-tag%}) and set the **Skin** to **Vista** from the drop down list. Then select the **Build RadTreeView** link. *This step will display the RadTreeView Item Builder Dialog.*
>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted09.png)

1. In the RadTreeView Item Builder dialog click the Add Root Node button to add three nodes.
>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted10.png)

1. Click the first node and set the **Text** property to "Condos". Set the **Checkable** property to False.

1. Click the second node and set the **Text** property to "Townhomes". Set the **Checkable** property to False.

1. Click the third node and set the **Text** property to "Houses". Set the **Checkable** property to False.
>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted11.png)

1. While the third node, "Houses", is still selected, click the Add Child Item button twice.
>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted12.png)

1. Select the first child item and set the **Text** property to "3 Bedroom, 2.5 Baths".

1. Select the second child item and set the **Text** property to "5 Bedroom, 3 Baths".
>caption 

![RadTreeView Getting Started](images/treeview_gettingstarted13.png)

1. Click **OK** to close the RadTreeView Item Builder dialog.

1. In the Properties Window, set the RadTreeView **CheckBoxes** property to **true**.

1. Press **F5** to run the application.
