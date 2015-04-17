---
title: OnClientDropDownOpening
page_title: OnClientDropDownOpening | UI for ASP.NET AJAX Documentation
description: OnClientDropDownOpening
slug: dropdowntree/client-side-programming/events/onclientdropdownopening
tags: onclientdropdownopening
published: True
position: 2
---

# OnClientDropDownOpening



## 

The **OnClientDropDownOpening** client-side event that is fired before the dropdown of RadDropDownTree is opened.

The event handler receives two parameters:

1. The instance of the RadDropDownTree client-side object.

1. An Event argument parameter.

The event can be cancelled - simply set **args.set_cancel** to **true** -**args.set_cancel(true);** from the event handler and the RadDropDownTree dropdown will not be opened.

## Scroll into view to a selected node

In **OnClientDropDownOpening** client-side event of RadDropDownTree we can scroll to the selected entry by using **scrollIntoView()** function of the node as in the code below:

````ASPNET
	                    function OnClientDropDownOpening(sender, args) {
	                        var tree = sender.get_embeddedTree(),
	                            node = tree.get_selectedNode();
	                        if (node) {
	                            node.scrollIntoView();
	                        }
	                    }
````


