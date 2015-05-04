---
title: OnClientItemPopulating
page_title: OnClientItemPopulating | RadMenu for ASP.NET AJAX Documentation
description: OnClientItemPopulating
slug: menu/client-side-programming/events/onclientitempopulating
tags: onclientitempopulating
published: True
position: 13
---

# OnClientItemPopulating

## 

The **OnClientItemPopulating** client-side event occurs when the menu is about to call a Web service to populate the child items of an item with **ExpandMode** set to "WebService".

The event handler receives two parameters:

1. The instance of the menu firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the **RadMenuItem** whose child items are about be populated from the Web service.

* **set_cancel** lets you prevent the call to the Web service.

* **get_cancel** returns a boolean value indicating whether the call to the Web service was canceled.

* **get_context** returns a reference to an IDictionary object that can be used to pass context information to the Web service.

* **get_domEvent** returns a reference to the DOM event.

You can use this event to conditionally cancel the call to fetch items or to pass context information to the Web service before the call:

````ASPNET
<script type="text/javascript">
    function itemPopulating(sender, eventArgs) {
        var item = eventArgs.get_item();
        var context = eventArgs.get_context();
        context["CategoryID"] = item.get_value();
    }
</script>

<telerik:RadMenu ID="RadMenu1" runat="server" Skin="Default" OnClientItemPopulating="itemPopulating">
    <WebServiceSettings Path="ProductCategories.asmx" Method="GetMenuCategories" />
    <LoadingStatusTemplate>
        <asp:Image runat="server" ID="LoadingImage" ImageUrl="~/Ajax/Img/loading7.gif" ToolTip="Loading..."
            Width="81px" Height="21px" />
    </LoadingStatusTemplate>
    <Items>
        <telerik:RadMenuItem Text="Products" Value="1" ExpandMode="WebService">
        </telerik:RadMenuItem>
        <telerik:RadMenuItem Text="Purchase" Value="132" ExpandMode="WebService">
        </telerik:RadMenuItem>
        <telerik:RadMenuItem Text="Support" Value="141" ExpandMode="WebService">
        </telerik:RadMenuItem>
        <telerik:RadMenuItem Text="Community" Value="155" ExpandMode="WebService">
        </telerik:RadMenuItem>
        <telerik:RadMenuItem Text="Corporate" Value="164" ExpandMode="WebService">
        </telerik:RadMenuItem>
    </Items>
</telerik:RadMenu>
````

# See Also

 * [Web Service Binding]({%slug menu/data-binding/web-service-binding%})

 * [OnClientItemPopulated]({%slug menu/client-side-programming/events/onclientitempopulated%})

 * [OnClientItemPopulationFailed]({%slug menu/client-side-programming/events/onclientitempopulationfailed%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})
