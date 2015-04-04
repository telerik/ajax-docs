---
title: Single Click Button
page_title: Single Click Button | UI for ASP.NET AJAX Documentation
description: Single Click Button
slug: button/functionality/single-click-button
tags: single,click,button
published: True
position: 0
---

# Single Click Button



## 

The single click button (__Figure 1__) is used to avoid multiple postbacks/callbacks to the server. This feature is useful in databaseand/or e-mail send scenarios when the developer should prevent submitting of identical content multiple times to the server.
>caption Figure 1: RadButton with SingeClick functionality before and after click.

![button-single-click](images/button-single-click.png)

The following properties should be used to enable the single click functionality:

* __SingleClick__ - determines whether the __RadButton__ controlwill be immediately disabled after the user clicks it.Set it to __true__ to enable the single click functionality.

* __SingleClickText__ - determines the text displayed inthe __RadButton__ control after the button is being clicked and disabled.

The __Example 1__ below demonstrates how to setup a single click __RadButton__.

__Example 1__: The code that enables the single click functionality in __RadButton__ from __Figure 1__.

>tabbedCode

````ASPNET
			<asp:TextBox ID="txtName" runat="server" />
			<telerik:RadButton ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click"
				SingleClick="true" SingleClickText="Processing...">
			</telerik:RadButton>
			<asp:Label ID="lblGreeting" runat="server" />
````
````C#
		protected void btnSubmit_Click(object sender, EventArgs e)
		{
			if (Page.IsPostBack) System.Threading.Thread.Sleep(3000);
			lblGreeting.Text = String.Format("Hello, {0}!", txtName.Text);
		}
````
````VB
		Protected Sub btnSubmit_Click(sender As Object, e As System.EventArgs) Handles btnSubmit.Click
			If Page.IsPostBack Then
				System.Threading.Thread.Sleep(3000)
			End If
			lblGreeting.Text = String.Format("Hello, {0}!", txtName.Text)
		End Sub
````
>end

The submitted text in processed on the server-side. Note that the method __System.Threading.Thread.Sleep__	is used so that the disabled button can be examined after clicking it.

# See Also

 * [Single Click Button Demo](http://demos.telerik.com/aspnet-ajax/button/examples/singleclick/defaultcs.aspx)
