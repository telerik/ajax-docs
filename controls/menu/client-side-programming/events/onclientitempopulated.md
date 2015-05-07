---
title: OnClientItemPopulated
page_title: OnClientItemPopulated | RadMenu for ASP.NET AJAX Documentation
description: OnClientItemPopulated
slug: menu/client-side-programming/events/onclientitempopulated
tags: onclientitempopulated
published: True
position: 14
---

# OnClientItemPopulated



## 

The **OnClientItemPopulated** client-side event occurs when an item in the menu has just had its child items populated from a Web service.

The event handler receives two parameters:

1. The instance of the menu firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the **RadMenuItem** that just had its list of child items filled by a Web Service.

* **get_domEvent** returns a reference to the DOM event.

You can use this event to tweak the child items that have just been added:

````JavaScript
<script type="text/javascript">
    function itemPopulated(sender, eventArgs) {
        var items = eventArgs.get_item().get_items();
        for (var i = 0; i < items.get_count(); i++) {
            var item = items.getItem(i);
            if (item.get_value() == "SummerLine") {
                item.disable();
            }
            else if (item.get_value() == "PremiumLine") {
                item.hide();
            }
        }
</script>
````

````ASPNET
<telerik:RadMenu ID="RadMenu1" runat="server" Skin="Default" OnClientItemPopulated="itemPopulated">
    <WebServiceSettings Path="ProductOfferings.asmx" Method="GetProductsByCategory" />
    <LoadingStatusTemplate>
        <asp:Image runat="server" ID="LoadingImage" ImageUrl="~/Ajax/Img/loading7.gif" ToolTip="Loading..."
            Width="81px" Height="21px" />
    </LoadingStatusTemplate>
    <Items>
        <telerik:RadMenuItem Text="Games" ExpandMode="WebService">
        </telerik:RadMenuItem>
        <telerik:RadMenuItem Text="Tools" ExpandMode="WebService">
        </telerik:RadMenuItem>
        <telerik:RadMenuItem Text="Business" ExpandMode="WebService">
        </telerik:RadMenuItem>
    </Items>
</telerik:RadMenu>
````

# See Also

 * [Web Service Binding]({%slug menu/data-binding/web-service-binding%})

 * [OnClientItemPopulating]({%slug menu/client-side-programming/events/onclientitempopulating%})

 * [OnClientItemPopulationFailed]({%slug menu/client-side-programming/events/onclientitempopulationfailed%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})
