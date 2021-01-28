---
title: Setting Focus
page_title: Setting Focus - RadMaskedTextBox
description: Check our Web Forms article about Setting Focus.
slug: radmaskedtextbox/getting-started/setting-focus
tags: setting,focus
published: True
position: 7
---

# Setting Focus



You can put the focus on a specific **RadInput** control dynamically, or you can specify a **RadInput** control that should get the focus by default. You can set the default focus for the form as a whole, or you can set the default focus on a control that is a child of a Panel control.

To set a focus in the **RadInput** control you can use one of the following methods.

## Setting focus in ASP.NET

ASP.NET provides two different solutions if you need to set focus dynamically:

* You can call a control's **Focus** method:



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


* You can use the **Page.SetFocus** method with control's ID as a parameter:



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


Both approaches do the same thing. It is your choice which method you prefer.

## Setting focus using RadAjaxPanel/RadAjaxManager

**RadAjaxPanel/RadAjaxManager** has a **FocusControl** method that lets you set focus to desired controls. You can use the **RadAjaxPanel.FocusControl/RadAjaxManager.FocusControl** methods to set focus to a control after the Ajax request is complete:



````C#
RadAjaxPanel1.FocusControl(RadInput1.ClientID);
RadAjaxManager1.FocusControl(RadInput1.ClientID); 
````
````VB.NET
RadAjaxPanel1.FocusControl(RadInput1.ClientID)
RadAjaxManager1.FocusControl(RadInput1.ClientID)
````


## Setting focus using the ScriptManager

The **SetFocus** method of the **ScriptManager** works like the **SetFocus** method for the **Page** class. Both methods make the control with the specified ID the active control on the Web page. The **SetFocus** method of the **ScriptManager** is for setting focus during asynchronous postbacks. During postbacks and when the page is first rendered, the **SetFocus** method calls the **SetFocus** method of the **Page** class.



````C#
ScriptManager1.SetFocus(RadInput1.ClientID); 
````
````VB.NET
ScriptManager1.SetFocus(RadInput1.ClientID)
````


## Setting focus in client-side code

The client-side objects for all the **RadInput** controls have a **focus** method that lets you set focus to the control. The following example uses this method to set focus to a **RadMaskedTextBox** control when the page is loaded, by calling its focus method from the BODY **onload** event:

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
		<telerik:RadMaskedTextBox RenderMode="Lightweight" ID="RadInput1" runat="server">
		</telerik:RadMaskedTextBox>
	</div>
	</form>
</body>
````


