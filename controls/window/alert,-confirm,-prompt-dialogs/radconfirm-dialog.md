---
title: RadConfirm Dialog
page_title: RadConfirm Dialog | RadWindow for ASP.NET AJAX Documentation
description: RadConfirm Dialog
slug: window/alert,-confirm,-prompt-dialogs/radconfirm-dialog
tags: radconfirm,dialog
published: True
position: 2
---

# RadConfirm Dialog



The **RadConfirm** dialog presents a message and displays "OK" and "Cancel" buttons for the user. As with the other RadWindow dialogs, the message is not limited to text: you can supply a string of HTML for richer formatting.

Unlike its regular browser counterpart, this version of the confirm dialog is non-blocking, so the rest of the page continues processing even before the dialog closes. Because the dialog is non-blocking it's designed to respond via a callback.

>important In order to use this dialog you need to have a **RadWindowManager** on the page.

At a minimum, the **RadConfirm** function takes two arguments, and HTML string with the message, and the name of a callback function that deals with the results. The callback takes a single parameter, whose value is **True** or **False**, depending on whether the user clicks "OK" or "Cancel". Additionally you can provide parameters to set the width, height, title and image URL.

>important The **RadConfirm** returns the client result as an argument in its **Callback function** only, as opposed to the standard browser confirm() function - the radconfirm() function returns a reference to the RadWindow dialog that is created and not the result.
>
>To see when and how you can replace the standard `confirm` method with `radconfirm`, examine the [Confirm Dialog Integration](http://demos.telerik.com/aspnet-ajax/window/examples/confirmserverclicks/defaultcs.aspx) live demo.


## Calling RadConfirm via JavaScript

The minimum required to show the **RadConfirm** is a message and the callback function:

````ASP.NET
<telerik:RadWindowManager ID="RadWindowManager1" runat="server">
</telerik:RadWindowManager>
<script type="text/javascript">
	function confirmCallBackFn(arg)
	{
		radalert("Confirm returned the following result: " + arg);
	}
</script>
<button onclick="radconfirm('Are you sure?', confirmCallBackFn); return false;">
	show radconfirm</button>
````

The full syntax of the radconfirm() function is as follows:

````JavaScript
var oConfirm = radconfirm(text, callBackFn, oWidth, oHeight, callerObj, oTitle, imgUrl);
````

where you can set optional width, height, title and image URL for the RadConfirm dialog.

This method also returns a reference to the RadAlert object (which is essentially a RadWindow), so you can use the [RadWindow's client-side API]({%slug window/client-side-programming/radwindow-object%}) on it to further change it (titlebar icon, behaviors, etc.)

## Calling RadConfirm from the code-behind

Since Q1 2011 the **RadWindowManager** offers a built-in server-side method to call the **RadConfirm**:

````C#
RadWindowManager1.RadConfirm("Are you sure?", "confirmCallBackFn", 300, 100, null, "My Confirm", "myConfirmImage.png");
````
````VB
RadWindowManager1.RadConfirm("Are you sure?", "confirmCallBackFn", 300, 100, Nothing, "My Confirm", "myConfirmImage.png")	  
```` 

>tip Strings passed into this method must be properly formatted and escaped for HTML and JavaScript. Please see the related article [Calling the Predefined Dialogs from the Server Methods]({%slug window/troubleshooting/calling-the-predefined-dialogs-from-the-server-methods%}).

>important The **callback function** is a client-side JavaScript function which is executed when the dialog is closed.

>tip The **Caller object** parameter should have a null (Nothing) value, as it exists only for backwards compatibility.

>tip If you change the default image the new one you provide should be 32px by 32px for best results. The string you pass to change the image URL can be:
>
* an absolute URL, or a relative URL that can be resolved on the client (i.e. "~/" is *not* allowed). This will set the image the URL points to
* an empty string - this will remove the default image and leave the space empty
* null - the behavior is the same as if no argument is provided - i.e. the default image is kept


The appearance of the confirm dialog is controlled by two things: the **Skin** property of the **RadWindowManager**, and the values you pass in as arguments to **RadConfirm**. The arguments can include the HTML string you pass in as a message, the width, the height, and the Title string. The **Skin** property controls not only the appearance of the popup's title bar, but also the layout of the dialog: its icon, button style, and so on. This dialog layout and appearance is controlled by the confirm dialog template associated with the Skin. For details on how to customize the template, see [Templates]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%}).

## See Also

 * [Calling the Predefined Dialogs from the Server Methods]({%slug window/troubleshooting/calling-the-predefined-dialogs-from-the-server-methods%})
