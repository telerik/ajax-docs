---
title: RadPrompt Dialog
page_title: RadPrompt Dialog | UI for ASP.NET AJAX Documentation
description: RadPrompt Dialog
slug: window/alert,-confirm,-prompt-dialogs/radprompt-dialog
tags: radprompt,dialog
published: True
position: 3
---

# RadPrompt Dialog



>important In order to use this dialog you need to have a __RadWindowManager__ on the page.
>


## 

The __RadPrompt__ dialog presents a message, an area for the user to type input, and displays "OK" and "Cancel" buttons. As with the other RadWindow dialogs, the message is not limited to text: you can supply a string of HTML for richer formatting.

At a minimum, the __RadPrompt__ function takes two arguments, and HTML string with the message, and the name of a callback function that deals with the results. The argument can be read in the callback function. If the user has pressed Cancel or has closed the dialog by clicking the [X] button, the returned argument will be *null*.

Optionally, you can add additional arguments to supply the dialog with a width, height, title, default text.

## Calling RadPrompt via JavaScript

The minimum required to show a __RadPrompt__ is the content string and a callback function:

````ASPNET
	    <script type="text/javascript">
	        function promptCallBackFn(arg)
	        {
	            alert("Prompt returned the following result: " + arg);
	        }
	    </script>
	    <button onclick="radprompt('What is the answer to Life, the Universe and Everything?', promptCallBackFn); return false;">
	        show PROMPT BOX</button>
````



The full syntax of the radprompt() function is:

````JavaScript
	    var oPrompt = radprompt(text, callBackFn, oWidth, oHeight, callerObj, oTitle, defaultValue);
````



where you can set optional width, height, title default value for the __RadPrompt__ dialog.

This method also returns a reference to the RadAlert object (which is essentially a RadWindow), so you can use the [RadWindow's client-side API]({%slug window/client-side-programming/radwindow-object%}) on it to further change it (titlebar icon, behaviors, etc.)

## Calling RadPrompt from the code-behind

Since Q1 2011 the __RadWindowManager__ offers a built-in server-side method to call the __RadPrompt__:

>tabbedCode

````C#
	    RadWindowManager1.RadPrompt("What is the answer to Life, the Universe and Everything?", "promptCallBackFn", 350, 100, null, "Deep Thought", "42");
````



````VB.NET
	    RadWindowManager1.RadPrompt("What is the answer to Life, the Universe and Everything?", "promptCallBackFn", 350, 100, Nothing, "Deep Thought", "42")
	    #End Region
	
	End Class


>end

## 

>important The __callback function__ is a client-side JavaScript function which is executed when the dialog is closed.
>


>note The __Caller object__ parameter should have a null (Nothing) value, as it exists only for backwards compatibility.
>


The appearance of the prompt dialog is controlled by two things: the __Skin__ property of the __RadWindowManager__, and the values you pass in as arguments to __RadPrompt__. The arguments can include the HTML string you pass in as a message, the width, the height, the title and the default value. The __Skin__ property controls not only the appearance of the popup's title bar, but also the layout of the dialog: its icon, button style, and so on. This dialog layout and appearance is controlled by the prompt dialog template associated with the Skin. For details on how to customize the template, see [Templates]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%}).
