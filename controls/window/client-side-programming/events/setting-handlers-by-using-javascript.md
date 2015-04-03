---
title: Setting Handlers by Using JavaScript
page_title: Setting Handlers by Using JavaScript | UI for ASP.NET AJAX Documentation
description: Setting Handlers by Using JavaScript
slug: window/client-side-programming/events/setting-handlers-by-using-javascript
tags: setting,handlers,by,using,javascript
published: True
position: 1
---

# Setting Handlers by Using JavaScript



## 

You can add or remove client-side event handlers from the __RadWindow__ control through its client-side API:


| Name | Description |
| ------ | ------ |
| __add_activate__ |Adds a function that will be called when a RadWindow is activated. The name of this function can also be declared in the __OnClientActivate__ property.|
| __add_autoSizeEnd__ |Adds a function that will be called when a RadWindow has finished resizing when the AutoSize functionality has taken effect. The name of this function can also be declared in the __OnClientAutoSizeEnd__ property.|
| __add_beforeClose__ |Adds a function that will be called before RadWindow is closed. You can cancel the closing of RadWindow there by using __set_cancel(true)__ . The name of this function can also be declared in the __OnClientBeforeClose__ property.|
| __add_beforeShow__ |Adds a function that will be called before RadWindow is shown. You can cancel the closing of RadWindow there by using __set_cancel(true)__ . The name of this function can also be declared in the __OnClientBeforeShow__ property.|
| __add_close__ |Adds a function that will be called when a RadWindow is closed. The name of this function can also be declared in the __OnClientClose__ property.|
| __add_command__ |TAdds a function that will be called when the commands Pin, Reload, Minimize and Maximize are executed (when the user presses a titlebar button). The name of this function can also be declared in the __OnClientCommand__ property.|
| __add_dragEnd__ |Adds a function that will be called when the user has finished dragging a RadWindow. The name of this function can also be declared in the __OnClientDragEnd__ property|
| __add_dragStart__ |Adds a function that will be called when the user starts dragging a RadWindow. The name of this function can also be declared in the __OnClientDragStart__ property.|
| __add_pageLoad__ |Adds a function that will be called when a RadWindow's content page is fully loaded. The name of this function can also be declared in the __OnClientPageLoad__ property.|
| __add_resize__ |Adds a function that will be called when the RadWindow is being resized. The name of this function can also be set in the __OnClientResize__ property.|
| __add_resizeEnd__ |Adds a function that will be called when the RadWindow is resized. The name of this function can also be set in the __OnClientResizeEnd__ property.|
| __add_resizeStart__ |Adds a function that will be called when the RadWindow resizing is started. The name of this function can also be set in the __OnClientResizeStart__ property.|
| __add_show__ |Adds a function that will be called when a RadWindow is shown. The name of this function can also be set in the __OnClientShow__ property.|
| __remove_activate__ |Removes a function declared with the __add_activate__ function.|
| __remove_autoSizeEnd__ |Removes a function declared with the __add_autoSizeEnd__ function.|
| __remove_beforeClose__ |Removes a function declared with the __add_beforeclose__ function.|
| __remove_beforeShow__ |Removes a function declared with the __add_beforeShow__ function.|
| __remove_close__ |Removes a function declared with the __add_close__ function|
| __remove_command__ |Removes a function declared with the __add_command__ function|
| __remove_dragEnd__ |Removes a function declared with the __add_dragEnd__ function.|
| __remove_dragStart__ |Removes a function declared with the __add_dragStart__ function.|
| __remove_pageLoad__ |Removes a function declared with the __add_pageLoad__ function.|
| __remove_resize__ |Removes a function declared with the __add_resize__ function.|
| __remove_resizeEnd__ |Removes a function declared with the __add_resizeEnd__ function.|
| __remove_resizeStart__ |Removes a function declared with the __add_resizeStart__ function.|
| __remove_show__ |Removes a function declared with the __add_show__ function.|

>note Calling an __add_<event>__ method multiple times will *add* the function multiple times for execution. This means that if you do not dispose the RadWindow instance event handlers can be added multiple times which is not always desired. Often add_close() is called when a RadWindow is shown. To avoid such behavior you should either call remove_close() in the OnClientClose event hander that was just attached, or use a global flag to check if the handler is already added, or use the DestroyOnClose functionality to dispose the instance when it is closed.
>


You can set client events for __RadWindow__ on the client via JavaScript by using the corresponding methods. The example below is based on the [Client Side Events demo](http://demos.telerik.com/aspnet-ajax/Window/Examples/ClientSideEvents/DefaultCS.aspx) and shows how to set client event-handlers.

````JavaScript
	    <form id="form1" runat="server">
	    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
	    </telerik:RadScriptManager>
	    <script type="text/javascript">
	        function openAndSet()
	        {
	            var oWnd = $find("<%= RadWindow1.ClientID %>");
	            oWnd.show();
	            //set a function to be called when RadWindow's command is executed
	            oWnd.add_command(OnClientCommand);
	            //set a function to be called when RadWindow's resizing is finished
	            oWnd.add_resizeEnd(OnClientResizeEnd);
	            //set a function to be called when RadWindow is being resized
	            oWnd.add_resizeStart(OnClientResizeStart);
	            //set a function that to called when RadWindow's dragging starts
	            oWnd.add_dragStart(OnClientDragStart);
	            //set a function to be called when RadWindow's dragging ends
	            oWnd.add_dragEnd(OnClientDragEnd);
	            //set a function to be called when the content page in the RadWindow is loaded
	            oWnd.add_pageLoad(OnClientPageLoad);
	            //set a function to be called when RadWindow is activated
	            oWnd.add_activate(OnClientActivate);
	            //set a function to be called before the RadWIndow is closed
	            oWnd.add_beforeClose(OnClientBeforeClose);
	            //set a function to be called when RadWindow is closed
	            oWnd.add_close(OnClientClose);
	            //set a function to be called when RadWindow is shown
	            oWnd.add_show(OnClientShow);
	            //set a function to be called when the RadWindow is autosized
	            oWnd.add_autoSizeEnd(OnClientAutoSizeEnd);
	        }
	
	        function OnClientCommand(sender, eventArgs)
	        {
	            logEvent("<strong>OnClientCommand</strong>: Command is " + eventArgs.get_commandName());
	        }
	        
	        function OnClientResizeEnd(sender, eventArgs)
	        {
	            logEvent("<strong>OnClientResizeEnd</strong>: RadWindow is resize ended");
	        }
	
	        function OnClientResizeStart(sender, eventArgs)
	        {
	            logEvent("<strong>OnClientResizeEnd</strong>: RadWindow is resize started");
	        }
	
	        function OnClientDragStart(sender, eventArgs)
	        {
	            logEvent("<strong>OnClientDragStart</strong>: RadWindow drag started");
	        }
	
	        function OnClientDragEnd(sender, eventArgs)
	        {
	            logEvent("<strong>OnClientDragEnd</strong>: RadWindow drag ended");
	        }
	
	        function OnClientPageLoad(sender, eventArgs)
	        {
	            logEvent("<strong>OnClientPageLoad</strong>: RadWindow completed loading the page");
	        }
	
	        function OnClientActivate(sender, eventArgs)
	        {
	            LogEvent("<strong>OnClientActivate</strong>: RadWindow is activated.");
	        }
	
	        function OnClientBeforeClose(sender, eventArgs)
	        {
	            logEvent("<strong>OnClientBeforeClose</strong>: RadWindow is closing.");
	        }
	
	        function OnClientClose(sender, eventArgs)
	        {
	            logEvent("<strong>OnClientClose</strong>: RadWindow is closed");
	        }
	
	        function OnClientshow(sender, eventArgs)
	        {
	            logEvent("<strong>OnClientShow</strong>: RadWindow is shown.");
	        }
	
	        function OnClientBeforeShow(sender, eventArgs)
	        {
	            logEvent("<strong>OnClientBeforeShow</strong>: RadWindow is showing.");
	        }
	
	        function OnClientAutoSizeEnd(sender, eventArgs)
	        {
	            logEvent("<strong>OnClientAutoSizeEnd</strong>: RadWindow is autosized.");
	        }
	        /**************************************************
	        Helper
	        *************************************************/
	        function LogEvent(eventString)
	        {
	            var d = new Date();
	            var dateStr = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	            document.getElementById("eventConsole").innerHTML = "[" + dateStr + "] " + eventString + "<br/>" + document.getElementById("eventConsole").innerHTML;
	        }
	    </script>
	    <telerik:RadWindow ID="RadWindow1" runat="server" NavigateUrl="Dialog.aspx">
	    </telerik:RadWindow>
	    <button onclick="openAndSet(); return false">
	        Open RadWindow and set events</button>
	    <br />
	    <div id="eventConsole" class="module" style="margin-top: 4px; height: 300px; overflow: auto;
	        width: 500px;">
	    </div>
````





# See Also

 * [Overview]({%slug window/client-side-programming/events/overview%})
