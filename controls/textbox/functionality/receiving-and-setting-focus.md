---
title: Setting Focus
page_title: Setting Focus | RadInput for ASP.NET AJAX Documentation
description: Setting Focus
slug: input/functionality/receiving-and-setting-focus
tags: receiving,setting,focus
published: True
position: 7
---
# Receiving Focus



## 

How a **RadTextBox** control behaves when it receives focus can be controlled by setting the **SelectionOnFocus** property. It can be set to any of the following values:

* **Telerik.Web.UI.SelectionOnFocus.CaretToBeginning**: When the **SelectionOnFocus** property is **CaretToBeginning**, the input caret appears at the beginning of the input control's value when it first gets focus. Text the user types is inserted at the beginning of the control's current value.

* **Telerik.Web.UI.SelectionOnFocus.CaretToEnd**: When the **SelectionOnFocus** property is **CaretToEnd**, the input caret appears at the end of the input control's value when it first gets focus. Text the user types is appended to the control's current value.

* **Telerik.Web.UI.SelectionOnFocus.SelectAll**: When the **SelectionOnFocus** property is **SelectAll**, the entire value of the input control is selected when it first gets focus. Text the user types replaces the control's current value.

* **Telerik.Web.UI.SelectionOnFocus.None**: When the **SelectionOnFocus** property is **None** (the default value), the browser determines the caret placement and selection when the control first gets focus.


# Setting Focus



You can put the focus on a specific **RadTextBox** control dynamically, or you can specify a **RadTextBox** control that should get the focus by default. You can set the default focus for the form as a whole, or you can set the default focus on a control that is a child of a Panel control.

To set a focus in the **RadTextBox** control you can use one of the following methods.

## Setting focus in ASP.NET

ASP.NET provides two different solutions if you need to set focus dynamically:

* You can call a control's **Focus** method:



````C#
protected void Page_Load(object sender, EventArgs e)
{
	RadTextBox1.Focus();
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	RadTextBox1.Focus()
End Sub
````


* You can use the **Page.SetFocus** method with control's ID as a parameter:



````C#
protected void Page_Load(object sender, EventArgs e)
{
	Page.SetFocus(RadTextBox1.ClientID);
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	Page.SetFocus(RadTextBox1.ClientID)
End Sub
````


Both approaches do the same thing. It is your choice which method you prefer.

## Setting focus using RadAjaxPanel/RadAjaxManager

**RadAjaxPanel/RadAjaxManager** has a **FocusControl** method that lets you set focus to desired controls. You can use the **RadAjaxPanel.FocusControl/RadAjaxManager.FocusControl** methods to set focus to a control after the Ajax request is complete:



````C#
RadAjaxPanel1.FocusControl(RadTextBox1.ClientID);
RadAjaxManager1.FocusControl(RadTextBox1.ClientID); 
````
````VB.NET
RadAjaxPanel1.FocusControl(RadTextBox1.ClientID)
RadAjaxManager1.FocusControl(RadTextBox1.ClientID)
````


## Setting focus using the ScriptManager

The **SetFocus** method of the **ScriptManager** works like the **SetFocus** method for the **Page** class. Both methods make the control with the specified ID the active control on the Web page. The **SetFocus** method of the **ScriptManager** is for setting focus during asynchronous postbacks. During postbacks and when the page is first rendered, the **SetFocus** method calls the **SetFocus** method of the **Page** class.



````C#
ScriptManager1.SetFocus(RadTextBox1.ClientID); 
````
````VB.NET
ScriptManager1.SetFocus(RadTextBox1.ClientID)
````


## Setting focus in client-side code

The client-side objects for the **RadTextBox** control have a **focus** method that lets you set focus to the control. The following example demonstrates this method:

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


