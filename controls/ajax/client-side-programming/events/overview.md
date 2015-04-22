---
title: Events Overview
page_title: Overview | RadAjax for ASP.NET AJAX Documentation
description: Overview
slug: ajax/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## Client-side events for RadAjaxManager/RadAjaxPanel

**RadAjaxManager** and **RadAjaxPanel** both descend from **RadAjaxControl**.**RadAjaxControl** introduces the **AjaxClientEvents** property that contains the following events:


| Name | Description |
| ------ | ------ |
|[OnRequestStart]({%slug ajax/client-side-programming/events/onrequeststart%})|Fired when a request to the server is started.|
|[OnResponseEnd]({%slug ajax/client-side-programming/events/onresponseend%})|Fired when a response from the server is processed.|

To use these events, simply write a JavaScript function that can be called when the event occurs(**Example 1**). Then assignthe name of the JavaScript function as the value of the the corresponding property.

Example 1: Displays a message when request starts and ends.

````ASPNET
	    <script type="text/javascript">
	        function requestStart(sender, eventArgs) {
	            alert('Request start');
	        }
	        function responseEnd(sender, eventArgs) {
	            alert('Response complete');
	        }
	    </script>
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	        <ClientEvents OnRequestStart="requestStart" OnResponseEnd="responseEnd" />
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="Button1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="TextBox1"></telerik:AjaxUpdatedControl>
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	    </telerik:RadAjaxManager>
````



## 

**RadAjaxLoadingPanel** contains the following client events:


| Name | Description |
| ------ | ------ |
|[OnClientShowing]({%slug ajax/client-side-programming/events/onclientshowing%})|Fired before the loading panel is shown.|
|[OnClientHiding]({%slug ajax/client-side-programming/events/onclienthiding%})|Fired before the loading panel hides.|

To use these events, simply write a JavaScript function that can be called when the event occurs(**Example 2**).You then assign the name of the JavaScript function as the value of the the corresponding property.

Example 2: Cancel the default behavior when shows and hides the RadAjaxLoadingPanel and apply a custom behavior for both actions.

````ASPNET
	    <script type="text/javascript">
	        function MyClientShowing(sender, eventArgs) {
	            eventArgs.get_loadingElement().style.border = "2px solid red";
	            eventArgs.set_cancelNativeDisplay(true);
	            $telerik.$(eventArgs.get_loadingElement()).show("slow");
	        }
	        function MyClientHiding(sender, eventArgs) {
	            eventArgs.get_loadingElement().style.border = "2px solid blue";
	            eventArgs.set_cancelNativeDisplay(true);
	            $telerik.$(eventArgs.get_loadingElement()).hide("slow");
	        }
	    </script>
	    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" BackColor="yellow"
	        OnClientShowing="MyClientShowing" OnClientHiding="MyClientHiding" />
````



# See Also

 * [Overview]({%slug ajax/radajaxpanel/overview%})

 * [Overview]({%slug ajax/radajaxmanager/overview%})

 * [Overview]({%slug ajax/client-side-programming/overview%})

 * [RadAjaxManager Object]({%slug ajax/client-side-programming/radajaxmanager-object%})

 * [Demo: RadAjaxManager Client-side API](http://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)
