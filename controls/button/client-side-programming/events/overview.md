---
title: Events Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: button/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## RadButton Client-side events

The RadButton exposes several client-side events which allow easy and flexible use in a wide range of application scenarios:

* __OnClientLoad (load)__ - raised when the control is initialized.

* __[OnClientClicking (clicking)]({%slug button/client-side-programming/events/onclientclicking%})__ - raised when the user clicks the button. The event can be canceled.

* __[OnClientClicked (clicked)]({%slug button/client-side-programming/events/onclientclicked%})__ - raised when the button is clicked. The event is subsequent to the __OnClientClicking__ event.

* __[OnClientMouseOver (mouseOver)]({%slug button/client-side-programming/events/onclientmouseover%})__ - raised when the mouse hovers over the control.

* __[OnClientMouseOut (mouseOut)]({%slug button/client-side-programming/events/onclientmouseout%})__ - raised when the mouse leaves the control.

* __[OnClientCheckedChanging (checkedChanging)]({%slug button/client-side-programming/events/onclientcheckedchanging%})__ - raised when the __Checked__ property of the RadButton control is about to be changed. The event can be canceled.

* __[OnClientCheckedChanged (checkedChanged)]({%slug button/client-side-programming/events/onclientcheckedchanged%})__ - raised after the __Checked__ property of the RadButton control is changed.

* __[OnClientToggleStateChanging (toggleStateChanging)]({%slug button/client-side-programming/events/onclienttogglestatechanging%})__ - raised the __SelectedToggleStateIndex__ property of the RadButton control is about to be changed. The event can be canceled.

* __[OnClientToggleStateChanged (toggleStateChanged)]({%slug button/client-side-programming/events/onclienttogglestatechanged%})__ - raised after the __SelectedToggleStateIndex__ property of the RadButton control is changed.

The event handler method for any of the events can be set on the server and on the client.

__Server-side__

To handle the desired event, the user must set the respective property to the name of the JavaScript function handling the event or to anonymous JavaScript function. Here is an example:

1. Passing named (non-anonymous) JavaScript function

````ASPNET
		<script type="text/javascript">
		    function Click(sender, args)
		    {
		        alert("RadButton was clicked.");
		    }
		</script>
	    <telerik:RadButton ID="RadButton1" runat="server" OnClientClicked="Click">
	    </telerik:RadButton>
````



>tabbedCode

````C#
	        RadButton1.OnClientClicked = "Click";  //passing the name of the JS function
````
````VB
	        RadButton1.OnClientClicked = "Click"  'passing the name of the JS function
````
>end

1. Passing anonymous JavaScript function

````ASPNET
	    <script type="text/javascript">
	        function Click(button, args, arg1, arg2)
	        {
	            alert("arg1:" + arg1 + " arg2:" + arg2);
	        }
	    </script>
	    <telerik:RadButton ID="RadButton1" runat="server" OnClientClicked="function(sender,args){Click(sender, args, 'Value1', 'Value2');}">
	    </telerik:RadButton>
````



>tabbedCode

````C#
	        RadButton1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"; //passing the name of the JS function
````
````VB
	        RadButton1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"  'passing the name of the JS function
````
>end

__Client-side__

To handle the desired event, the user should use the respective __add_<eventName>(handlerFunction)__ to attach the desired handler (i.e. __add_clicked__ for the clicked event), where the parameter *handlerFunction* should be of type __function__. To remove a handler that has been added previously, the respective __remove_<eventName>(handlerFunction)__ should be used.

Here is an example showing how to add handler on the client:

1. Adding named (non-anonymous) JavaScript function

````ASPNET
	    <script type="text/javascript">
	        function Click(button, args)
	        {
	            alert("Button was clicked");
	        }
	        function addHandler()
	        {
	            var button = $find("<%=RadButton1.ClientID %>");
	            button.add_clicked(Click);
	        }
	    </script>
````



1. Adding anonymous JavaScript function

````ASPNET
	    <script type="text/javascript">
	        function Click(button, args, arg1)
	        {
	            alert("Button was clicked. arg1: " + arg1);
	        }
	        function addHandler()
	        {
	            var button = $find("<%=RadButton1.ClientID %>");
	            button.add_clicked(function (button, args) { Click(button, args, "Value1") });
	        }
	    </script>
````


