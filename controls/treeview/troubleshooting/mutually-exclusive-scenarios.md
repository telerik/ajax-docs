---
title: Mutually Exclusive Scenarios
page_title: Mutually Exclusive Scenarios | UI for ASP.NET AJAX Documentation
description: Mutually Exclusive Scenarios
slug: treeview/troubleshooting/mutually-exclusive-scenarios
tags: mutually,exclusive,scenarios
published: True
position: 10
---

# Mutually Exclusive Scenarios



## 

1. __MultipleSelect__ and __NodeClick__ server event.

If you enable multiple select of the treeview the user can use the Ctrl or Shift buttons to select multiple nodes. While holding the Ctrl or Shift keys and selecting nodes the [NodeClick]({%slug treeview/server-side-programming/events/nodeclick%}) server event does not fire. This is by design, otherwise it would fire after the first click on the first node and the user will not be able to select another node. The client-side events [OnClientNodeClicking]({%slug treeview/client-side-programming/events/onclientnodeclicking%}) and [OnClientNodeClicked]({%slug treeview/client-side-programming/events/onclientnodeclicked%}) do fire for every clicked node.



2. __AllowNodeEditing__ and __NodeClick__ server event.

If you enable node editing and also subscribe to the NodeClick event, when you try to edit a node by double clicking - it postbacks and fires the NodeClick event instead of entering the edit mode. This is because the browser fires first the __click()__ and then the __doubleclick()__ events. When the click() event fires - the treeview postbacks and the NodeClick is fired. The treeview does not know that the doubleclick event is fired after that. The solution is to tab to the treeview, use the keyboard to select the needed node and click it once to enter the edit mode.



3. __NodeClick__ and __OnClientDoubleClick__

If you subscribe to the __NodeClick__ server event and the client __OnClientDoubleClick__ the latter will not fire for the reasons described in p.2 : the browser fires first the click() and then the doubleclick() methods. Having subscribed to the NodeClick event will postback after the click() event is received from browser.





# See Also

 * [Expanding Nodes]({%slug treeview/troubleshooting/expanding-nodes%})
