---
title: Known Issues
page_title: Known Issues | RadProgressBar for ASP.NET AJAX Documentation
description: Known Issues in RadProgressBar
slug: progressbar/known-issues
tags: known,issues,progressbar,radprogressbar
published: True
position: 80
---

# Known Issues

This article lists known issues and limitations of the RadProgressBar control.

## Duplicate Component Registration After AJAX Request With asp:ScriptManager

Error: `Error: Sys.InvalidOperationException: Two components with the same id 'RadProgressBar1' can't be added to the application.`.

Workaround: Use `<telerik:RadScriptManager>` instead of `<asp:ScriptManager>`

```ASP.NET
<%--<asp:ScriptManager ID="Scriptmanager1" runat="server" />--%> <-- issue
<telerik:RadScriptManager runat="server" ID="RadScriptManager1"></telerik:RadScriptManager> <-- workaround
<asp:UpdatePanel ID="Updatepanel1" runat="server">
	<ContentTemplate>
		<asp:Button ID="Button1" Text="AJAX" runat="server" />
		<telerik:RadProgressBar runat="server" ID="RadProgressBar1" />
	</ContentTemplate>
</asp:UpdatePanel>
````

Bug fix status: [https://feedback.telerik.com/Project/108/Feedback/Details/212449](https://feedback.telerik.com/Project/108/Feedback/Details/212449).
