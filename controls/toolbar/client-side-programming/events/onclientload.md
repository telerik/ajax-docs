---
title: OnClientLoad
page_title: OnClientLoad | RadToolBar for ASP.NET AJAX Documentation
description: OnClientLoad
slug: toolbar/client-side-programming/onclientload
tags: onclientload
published: True
position: 1
previous_url: controls/toolbar/client-side-programming/onclientload
---

# OnClientLoad

## 

The **OnClientLoad** client-side event occurs when the toolbar is first loaded and fully initialized on the client.

The event handler receives a single parameter: a reference to the client-side toolbar object.

You can use this event to perform your own initialization to the toolbar when it is loaded, or to save a reference to the toolbar in a global variable for reference from within your client-side code.

The following example illustrates the use of the **OnClientLoad** event handler for saving a reference to the client-side object:

````ASPNET	
<script type="text/javascript">
    var toolBar1;
    function storeToolBarClientObject(sender) {
        toolBar1 = sender;
    }
    function utilizeToolBarClientObject() {
        alert(toolBar1.get_id());
    }
 </script>

<telerik:RadToolBar RenderMode="Lightweight" ID="RadToolBar1" runat="server" Orientation="Horizontal" 
	OnClientLoad="storeToolBarClientObject">
    <CollapseAnimation Duration="200" Type="OutQuint" />
    <Items>
        <telerik:RadToolBarButton Text="button1" runat="server">
        </telerik:RadToolBarButton>
        <telerik:RadToolBarDropDown Text="dropdown" runat="server">
            <Buttons>
                <telerik:RadToolBarButton Text="Button2" runat="server">
                </telerik:RadToolBarButton>
            </Buttons>
        </telerik:RadToolBarDropDown>
    </Items>
</telerik:RadToolBar>
````

>note The technique illustrated here can be used when the toolbar is nested within another control, but the RadToolBar must be rendered only once. If RadToolBar is nested in a grid with more than one row, the method fails since there will be multiple instances of the rendered toolbar.
>

