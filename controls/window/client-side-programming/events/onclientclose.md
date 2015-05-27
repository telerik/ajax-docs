---
title: OnClientClose
page_title: OnClientClose | RadWindow for ASP.NET AJAX Documentation
description: OnClientClose
slug: window/client-side-programming/events/onclientclose
tags: onclientclose
published: True
position: 6
---

# OnClientClose

The **OnClientClose** event fires when the **RadWindow** closes. You can use the event to pass data from the dialog page.It is subsequent to the [OnClientBeforeClose]({%slug window/client-side-programming/events/onclientbeforeclose%}) event.The close operation can be initiated from the user by clicking or tapping on the manual close button (X) in the top right-hand side corner of the title bar, or by the developer via calling the `close(optionalArguments)` [client-side method]({%slug window/client-side-programming/radwindow-object%}) of the control(e.g., through a custom Close button in the content (**Example 2**)).

You can use this event to [return data from the dialog page](http://demos.telerik.com/aspnet-ajax/window/examples/dialogreturnvalue/defaultcs.aspx)	and to [create parent-child relationships with other RadWindow instances](http://www.telerik.com/support/code-library/creating-parent-child-relationships-between-radwindows-and-passing-data-between-them).

The event handler receives the following arguments:

1. The [RadWindow]({%slug window/client-side-programming/radwindow-object%}) object that fired the event.

1. An event arguments object that exposes the following methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_argument||object|This is the argument passed to the `close()` method of the RadWindow by the developer.|

To see how to get a reference to the **RadWindow** [client-side object]({%slug window/client-side-programming/radwindow-object%}),	examine the [Client-side Basics]({%slug window/client-side-programming/overview%}) help article.

>caption Example 1: Getting data passed from the dialog page (Example 2).

````ASP.NET
<asp:Button ID="Button2" Text="show the dialog" runat="server" />
<telerik:RadWindow runat="server" ID="RadWindow1" OnClientClose="OnClientCloseHandler" NavigateUrl="dialog-page.aspx" VisibleOnPageLoad="true"></telerik:RadWindow>
<script type="text/javascript">
	function OnClientCloseHandler(sender, args) {
		var data = args.get_argument();
		if (data) {
			alert(data);
		}
	}
</script>
````

>caption Example 2: Passing data that can be consumed by the parent page (Example 1).

````JavaScript
<asp:Button ID="Button3" Text="clpse the dialog" OnClientClick="closeAndPassData(); return false;" runat="server" />
<script type="text/javascript">
	function closeAndPassData() {
		var data = "some information"; //this can be a complex object obtained according to the project logic
		var wnd = GetRadWindow();
		if (wnd) {
			wnd.close(data);
		}
	}

	function GetRadWindow() {
		var oWindow = null;
		if (window.radWindow) oWindow = window.radWindow;
		else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
		return oWindow;
	}
</script>
````

## See Also

 * [Return Data from the Dialog Page](http://demos.telerik.com/aspnet-ajax/window/examples/dialogreturnvalue/defaultcs.aspx)

 * [Creating Parent-child Relationships with Other RadWindow Instances](http://www.telerik.com/support/code-library/creating-parent-child-relationships-between-radwindows-and-passing-data-between-them)

 * [Overview]({%slug window/client-side-programming/overview%})

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})
