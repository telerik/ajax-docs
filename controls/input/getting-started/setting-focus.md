---
title: Setting Focus
page_title: Setting Focus | UI for ASP.NET AJAX Documentation
description: Setting Focus
slug: input/getting-started/setting-focus
tags: setting,focus
published: True
position: 7
---

# Setting Focus



You can put the focus on a specific __RadInput__ control dynamically, or you can specify a __RadInput__ control that should get the focus by default. You can set the default focus for the form as a whole, or you can set the default focus on a control that is a child of a Panel control.

To set a focus in the __RadInput__ control you can use one of the following methods.

## Setting focus in ASP.NET

ASP.NET provides two different solutions if you need to set focus dynamically:

* You can call a control's __Focus__ method:

>tabbedCode

````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadInput1.Focus();
	    }
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        RadInput1.Focus()
	    End Sub
````
>end

* You can use the __Page.SetFocus__ method with control's ID as a parameter:

>tabbedCode

````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        Page.SetFocus(RadInput1.ClientID);
	    }
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        Page.SetFocus(RadInput1.ClientID)
	    End Sub
````
>end

Both approaches do the same thing. It is your choice which method you prefer.

## Setting focus using RadAjaxPanel/RadAjaxManager

__RadAjaxPanel/RadAjaxManager__ has a __FocusControl__ method that lets you set focus to desired controls. You can use the __RadAjaxPanel.FocusControl/RadAjaxManager.FocusControl__ methods to set focus to a control after the Ajax request is complete:

>tabbedCode

````C#
	        RadAjaxPanel1.FocusControl(RadInput1.ClientID);
	        RadAjaxManager1.FocusControl(RadInput1.ClientID); 
````
````VB.NET
	        RadAjaxPanel1.FocusControl(RadInput1.ClientID)
	        RadAjaxManager1.FocusControl(RadInput1.ClientID)
````
>end

## Setting focus using the ScriptManager

The __SetFocus__ method of the __ScriptManager__ works like the __SetFocus__ method for the __Page__ class. Both methods make the control with the specified ID the active control on the Web page. The __SetFocus__ method of the __ScriptManager__ is for setting focus during asynchronous postbacks. During postbacks and when the page is first rendered, the __SetFocus__ method calls the __SetFocus__ method of the __Page__ class.

>tabbedCode

````C#
	        ScriptManager1.SetFocus(RadInput1.ClientID); 
````
````VB.NET
	        ScriptManager1.SetFocus(RadInput1.ClientID)
````
>end

## Setting focus in client-side code

The client-side objects for all the __RadInput__ controls have a __focus__ method that lets you set focus to the control. The following example uses this method to set focus to a __RadTextBox__ control when the page is loaded, by calling its focus method from the BODY __onload__ event:

````ASPNET
	    <head runat="server">
	        <title>Untitled Page</title>
	    </head>
	    <body onload="setFocusToRadInput();">
	        <form id="form1" runat="server">
	        <asp:ScriptManager ID="ScriptManager1" runat="server" />
	        <div>
	            <script type="text/javascript">
	                function setFocusToRadInput()
	                {
	                    var radInput = $find("<%= RadInput1.ClientID %>"); 
	                    radInput.focus();
	                }  
	            </script>
	            <telerik:RadTextBox ID="RadInput1" runat="server">
	            </telerik:RadTextBox>
	        </div>
	        </form>
	    </body>
````


