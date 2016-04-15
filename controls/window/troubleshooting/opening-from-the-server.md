---
title: Opening from the Server
page_title: Opening from the Server | RadWindow for ASP.NET AJAX Documentation
description: Opening from the Server
slug: window/troubleshooting/opening-from-the-server
tags: opening,from,the,server
published: True
position: 0
---

# Opening from the Server

The **RadWindow** is a client-side object – its UI is created when it is first shown and this is the point when the CSS and scripts are loaded as well. This means that it should be used on the client via JavaScript, yet it turns out that it is a very common scenario that the developer wishes to initiate the **RadWindow**’s showing from the code-behind.

>warning The **VisibleOnPageLoad** property should **_not_** be used for this purpose. It is a behavior property which will result in the RadWindow opening every time the page is post back.


Quite often the **VisibleOnPageLoad** property gets set to **true** while the intention is that the RadWindow should only show once. Doing so will result in the RadWindow reopening if a post back is initiated from another element from the page, which is rarely the desired behavior. Also, this approach will not work in case this happens in an AJAX request and the RadWindow is not included in the partial page update.

There are several ways to work around this:

* [Register a JavaScript function from the server-side]({%slug window/troubleshooting/executing-javascript-code-from-server%}) and do **not** use the **VisibleOnPageLoad** property, for example:

	**ASP.NET**

		<telerik:RadWindow RenderMode="Lightweight" runat="server" ID="RadWindow1" NavigateUrl="http://google.com/"></telerik:RadWindow>
		<asp:Button ID="Button4" Text="open the RadWindow from the server" runat="server" OnClick="Button1_Click" />


	**C#**

		protected void Button1_Click(object sender, EventArgs e)
		{
			//business logic goes here
		
			string script = "function f(){$find(\"" + RadWindow1.ClientID + "\").show(); Sys.Application.remove_load(f);}Sys.Application.add_load(f);";
			ScriptManager.RegisterStartupScript(Page, Page.GetType(), "key", script, true);
		}

	**VB**

		Protected Sub Button1_Click(sender As Object, e As System.EventArgs) Handles Button1.Click
			'business logic goes here
		
			Dim script As String = "function f(){$find(""" + RadWindow1.ClientID + """).show(); Sys.Application.remove_load(f);}Sys.Application.add_load(f);"
			ScriptManager.RegisterStartupScript(Page, Page.GetType(), "key", script, True)
		End Sub


* Reset the **VisibleOnPageLoad** property to **false** with code when suitable, depending on the particular scenario

* Set **EnableViewState** to **false** for the RadWindowManager that contains the desired RadWindows
