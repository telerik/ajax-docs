---
title: Client-Side Events Basics
page_title: Client-Side Events Basics | RadImageEditor for ASP.NET AJAX Documentation
description: Client-Side Events Basics
slug: imageeditor/client-side-programming/events/client-side-events-basics
tags: client-side,events,basics
published: True
position: 0
---

# Client-Side Events Basics



## 

**RadImageEditor** provides a rich set of client-side events which allow easy and flexible use in a wide range of application scenarios. Many of the events are cancelable giving you the possibility to cancel any operation performed on the image:

* [OnClientLoad]({%slug imageeditor/client-side-programming/events/onclientload%}) - raised when the control is initialized.

* [OnClientCommandExecuting]({%slug imageeditor/client-side-programming/events/onclientcommandexecuting%}) - raised when the user fires a command of the control. The event can be canceled.

* [OnClientCommandExecuted]({%slug imageeditor/client-side-programming/events/onclientcommandexecuted%}) - raised after the user fires a command of the control. The event is subsequent to the [OnClientCommandExecuting]({%slug imageeditor/client-side-programming/events/onclientcommandexecuting%}) event.

* [OnClientDialogLoaded]({%slug imageeditor/client-side-programming/events/onclientdialogloaded%}) - raised when a tool widget dialog is loaded from the server.

* [OnClientImageChanging]({%slug imageeditor/client-side-programming/events/onclientimagechanging%}) - raised when the user initiates an action on the image. The event can be canceled.

* [OnClientImageLoad]({%slug imageeditor/client-side-programming/events/onclientimageload%}) - raised when the image in the editor loads in the browser.

* [OnClientImageChanged]({%slug imageeditor/client-side-programming/events/onclientimagechanged%}) - raised after the image has changed. The event is fired after [OnClientImageChanging]({%slug imageeditor/client-side-programming/events/onclientimagechanging%}) event.

* [OnClientResizeStart]({%slug imageeditor/client-side-programming/events/onclientresizestart%}) - raised when the user starts resizing the control.

* [OnClientResizeEnd]({%slug imageeditor/client-side-programming/events/onclientresizeend%}) - raised when the user has finished resizing the control.

* [OnClientSaving]({%slug imageeditor/client-side-programming/events/onclientsaving%}) - raised when the user starts saving the changes on the image. The event can be canceled.

* [OnClientSaved]({%slug imageeditor/client-side-programming/events/onclientsaved%}) - raised after the user has saved the image.

* [OnClientToolsDialogClosed]({%slug imageeditor/client-side-programming/events/onclienttoolsdialogclosed%}) - raised when the tool's dialog is closed (if opened).

* [OnClientShortCutHit]({%slug imageeditor/client-side-programming/events/onclientshortcuthit%}) - raised when a given Keyboard ShortCut of the RadImageEditor was hit. The event can be cancelled.

To use these events, simply write a javascript function that can be called when the event occurs. Then assign the name of the javascript function as the value of the the corresponding property.

````ASPNET
	    <telerik:RadImageEditor runat="server" ID="RadImageEditor1" OnClientLoad="OnClientLoad"></telerik:RadImageEditor>
	    <script type="text/javascript">
	        function OnClientLoad(sender, eventArgs)
	        {
	            alert("OnClientLoad event fired by RadImageEditor with ID: " + sender.get_id());
	        }
	    </script>
````



You can also assign event handlers in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````ASPNET
	    function addEvents()
	    {
	        var radImageEditor1 = $find("<%= RadImageEditor1.ClientID%>");
	        radImageEditor1.add_commandExecuting(function1);
	        radImageEditor1.add_commandExecuting(function2);
	    }
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````ASPNET
	    function removeEvents()
	    {
	        var radImageEditor1 = $find("<%= RadImageEditor1.ClientID%>");
	        radImageEditor1.remove_commandExecuting(function1);
	    }
````



Here is a list with the available methods to attach or detach event handlers:


| Name | Description |
| ------ | ------ |
| **add_load** |Adds a handler to the OnClientLoad event|
| **remove_load** |Removes a handler from the OnClientLoad event|
| **add_commandExecuting** |Adds a handler to the OnClientCommandExecuting event|
| **remove_commandExecuting** |Removes a handler from the OnClientCommandExecuting event|
| **add_commandExecuted** |Adds a handler to the OnClientCommandExecuted event|
| **remove_commandExecuted** |Removes a handler from the OnClientCommandExecuted event|
| **add_imageChanging** |Adds a handler to the OnClientImageChanging event|
| **remove_imageChanging** |Removes a handler from the OnClientImageChanging event|
| **add_imageChanged** |Adds a handler to the OnClientImageChanged event|
| **remove_imageChanged** |Removes a handler from the OnClientImageChanged event|
| **add_resizeStart** |Adds a handler to the OnClientResizeStart event|
| **remove_resizeStart** |Removes a handler from the OnClientResizeStart event|
| **add_resizeEnd** |Adds a handler to the OnClientResizeEnd event|
| **remove_resizeEnd** |Removes a handler from the OnClientResizeEnd event|
| **add_saving** |Adds a handler to the OnClientSaving event|
| **add_shortCutHit** |Adds a handler to the shortCutHit event|
| **remove_saving** |Removes a handler from the OnClientSaving event|
| **remove_shortCutHit** |Removes a handler from the shortCutHit event|
| **add_saved** |Adds a handler to the OnClientSaved event|
| **remove_saved** |Removes a handler from the OnClientSaved event|
| **add_toolsDialogClosed** |Adds a handler to the OnClientToolsDialogClosed event|
| **remove_toolsDialogClosed** |Removes a handler from the OnClientToolsDialogClosed event|

# See Also

 * [Client-Side API]({%slug imageeditor/client-side-programming/overview%})
