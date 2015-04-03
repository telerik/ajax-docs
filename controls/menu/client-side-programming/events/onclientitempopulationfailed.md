---
title: OnClientItemPopulationFailed
page_title: OnClientItemPopulationFailed | UI for ASP.NET AJAX Documentation
description: OnClientItemPopulationFailed
slug: menu/client-side-programming/events/onclientitempopulationfailed
tags: onclientitempopulationfailed
published: True
position: 15
---

# OnClientItemPopulationFailed



## 

The __OnClientItemPopulationFailed__ client-side event occurs when an attempt to populate a list of child items using a Web service fails.

The event handler receives two parameters:

1. The instance of the menu firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item__ returns a reference to the __RadMenuItem__ whose child items the Web service failed to populate.

* __set_cancel__ lets you prevent the default response to the error, which is a standard alert message displaying an error message describing the failure.

* __get_cancel__ returns a boolean value indicating whether the default alert message was canceled.

* __get_errorMessage__ returns an error message describing the failure.

You can use this event to substitute your own mechanism for responding to errors from the Web service. For example, the following example disables the problem item and substitutes a call to the __radalert__ method so that the error message blends in to the look & feel of the Web site:

````ASPNET
	    <script type="text/javascript">     
	    function populationFailed(sender, eventArgs)  
	    {     
	        radalert(eventArgs.get_errorMessage();    
	        eventArgs.get_item().disable();     
	        eventArgs.set_cancel(true);  
	    }
	    </script>
	
	    <telerik:RadMenu ID="RadMenu1" runat="server" Skin="Vista" OnClientItemPopulationFailed="populationFailed">
	        <WebServiceSettings Path="ProductCategories.asmx" Method="GetMenuCategories" />
	        <LoadingStatusTemplate>
	            <asp:Image runat="server" ID="LoadingImage" ImageUrl="~/Ajax/Img/loading7.gif" ToolTip="Loading..."
	                Width="81px" Height="21px" />
	        </LoadingStatusTemplate>
	        <Items>
	            <telerik:RadMenuItem Text="Products" ExpandMode="WebService">
	            </telerik:RadMenuItem>
	            <telerik:RadMenuItem Text="Purchase" ExpandMode="WebService">
	            </telerik:RadMenuItem>
	            <telerik:RadMenuItem Text="Support" ExpandMode="WebService">
	            </telerik:RadMenuItem>
	            <telerik:RadMenuItem Text="Community" ExpandMode="WebService">
	            </telerik:RadMenuItem>
	            <telerik:RadMenuItem Text="Corporate" ExpandMode="WebService">
	            </telerik:RadMenuItem>
	        </Items>
	    </telerik:RadMenu>
	    <telerik:RadWindowManager ID="RadWindowManager1" runat="server" Skin="Vista">
	    </telerik:RadWindowManager>
````





# See Also

 * [Web Service Binding]({%slug menu/data-binding/web-service-binding%})

 * [OnClientItemPopulating]({%slug menu/client-side-programming/events/onclientitempopulating%})

 * [OnClientItemPopulated]({%slug menu/client-side-programming/events/onclientitempopulated%})

 * [Overview]({%slug menu/client-side-programming/overview%})
