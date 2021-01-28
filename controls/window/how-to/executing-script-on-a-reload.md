---
title: Executing Script on a Reload
page_title: Executing Script on a Reload - RadWindow
description: Check our Web Forms article about Executing Script on a Reload.
slug: window/how-to/executing-script-on-a-reload
tags: executing,script,on,a,reload
published: True
position: 6
---

# Executing Script on a Reload

There are times when you want to perform a postback from a **RadWindow** object, and then when the window reloads, execute some client-side script. For example, when a window opens a Wizard that performs some action and then does a postback to the server, you may want to close the window automatically without requiring the user to explicitly close it. Another case is when the **RadWindow** performs some action via a postback which has an effect on the main page, and you want to force a reload of the main page so that the effect on the main page occurs immediately.

1. To execute the client-side script on a reload, first add the JavaScript to the dialog page:

	**JavaScript**

		//GetRadWindow obtains a reference to the hosting RadWindow"
		function GetRadWindow()
		{
			var oWindow = null;
			if (window.radWindow)
				oWindow = window.radWindow;
			else if (window.frameElement.radWindow)
				oWindow = window.frameElement.radWindow;
			return oWindow;
		}
		function CloseOnReload()
		{
			GetRadWindow().close();
		}
		function RefreshParentPage()
		{
			GetRadWindow().BrowserWindow.location.href = GetRadWindow().BrowserWindow.location.href;
		}

1. Add controls to trigger the postback:

	**ASP.NET**
	    
		<asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Do something and close" />
	    <asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="Change the main page" />

1. In the handlers that perform the server-side actions, you can use page's RegisterStartupScript collection to add a script that should be executed when the page is reloaded:



	**C#**
	    
		private void Button1_Click(object sender, System.EventArgs e)
	    {
	        // perform the server-side actions here and then...
	        ClientScript.RegisterStartupScript(Page.GetType(), "closeWindow", "<script type='text/javascript'>CloseOnReload()</script>");
	    }
	    private void Button2_Click(object sender, System.EventArgs e)
	    {
	        // perform the server-side actions here and then...
	        ClientScript.RegisterStartupScript(Page.GetType(), "closeWindow", "<script type='text/javascript'>RefreshParentPage()</script>");
	    }
		
	**VB**
	
	    Private Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	        ClientScript.RegisterStartupScript(Page.GetType(), "closeWindow", "<script type='text/javascript'>CloseOnReload()</script>")
	    End Sub
	    Private Sub Button2_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	        ClientScript.RegisterStartupScript(Page.GetType(), "closeWindow", "<script type='text/javascript'>RefreshParentPage()</script>")
	    End Sub


>caution In general, outputting a JavaScript code from the code-behind is a general task that is not related to the RadWindow control - there are numerous resources on the Net that show how to do that. For example you can use the asp:scriptmanager's control RegisterStartupScript server method, or the ResponseScripts collection of RadAjaxManager. More information on the subject is also available in the following blog post: [Executing JavaScript function from server-side code](https://www.telerik.com/blogs/executing-javascript-function-from-server-side-code).
