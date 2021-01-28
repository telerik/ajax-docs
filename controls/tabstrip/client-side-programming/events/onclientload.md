---
title: OnClientLoad
page_title: OnClientLoad - RadTabStrip
description: Check our Web Forms article about OnClientLoad.
slug: tabstrip/client-side-programming/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad

## 

The **OnClientLoad** client-side event occurs when the tab strip is first loaded and fully initialized on the client.

The event handler receives a single parameter: a reference to the client-side tab strip object.

You can use this event to perform your own initialization to the tab strip when it is loaded, or to save a reference to the tab strip in a global variable for reference from within your client-side code.

The following example illustrates the use of the **OnClientLoad** event handler for saving a reference to the client-side object:

````ASPNET	
<script type="text/javascript">
var tabStrip1;
function OnClientLoad(sender)
{
 tabStrip1 = sender;
}
</script>
<telerik:RadTabStrip RenderMode="Lightweight" ID="RadTabStrip1" runat="server" OnClientLoad="OnClientLoad" ... /> 				
````

>note The technique illustrated here can be used when the tab strip is nested within another control, but the **RadTabStrip** must be rendered only once. For example, you can use this approach if **RadTabStrip** is nested in a tool bar template button. However, if **RadTabStrip** is nested in a grid with more than one row, the method fails since there will be multiple instances of the rendered tab strip.
>

