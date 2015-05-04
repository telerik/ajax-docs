---
title: OnClientLoad
page_title: OnClientLoad | RadPanelBar for ASP.NET AJAX Documentation
description: OnClientLoad
slug: panelbar/client-side-programming/onclientload
tags: onclientload
published: True
position: 12
---

# OnClientLoad



## 

The **OnClientLoad** client-side event occurs when the panel bar is first loaded and fully initialized on the client.

The event handler receives a single parameter: a reference to the client-side panel bar object.

You can use this event to perform your own initialization to the panel bar when it is loaded, or to save a reference to the panel bar in a global variable for reference from within your client-side code.

The following example illustrates the use of the **OnClientLoad** event handler for saving a reference to the client-side object:

````ASPNET
<script type="text/javascript">
    var panelBar1;
    function storePanelBarClientObject(sender) {
        panelBar1 = sender;
    }
    function UtilizePanelBarClientObject() {
        alert(panelBar1.get_id());
    }
</script>
<telerik:radpanelbar id="RadPanelBar1" runat="server" onclientload="storePanelBarClientObject">    
<Items> 
    ...    
</Items>
</telerik:radpanelbar>
<input id="Button1" type="button" onclick="UtilizePanelBarClientObject()" value="button" />
````





>note The technique illustrated here can be used when the panel bar is nested within another control, but the **RadPanelBar** must be rendered only once. For example, you can use this approach if **RadPanelBar** is nested in a tool bar template button. However, if **RadPanelBar** is nested in a grid with more than one row, the method fails since there will be multiple instances of the rendered panel bar.
>


# See Also

 * [RadPanelBar Object]({%slug panelbar/client-side-programming/radpanelbar-object%})
