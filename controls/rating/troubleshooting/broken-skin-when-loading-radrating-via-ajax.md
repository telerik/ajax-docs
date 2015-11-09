---
title: Broken Skin When Loading RadRating via AJAX
page_title: Broken Skin When Loading RadRating via AJAX | RadRating for ASP.NET AJAX Documentation
description: Broken Skin When Loading RadRating via AJAX
slug: rating/troubleshooting/broken-skin-when-loading-radrating-via-ajax
tags: broken,skin,when,loading,radrating,via,ajax
published: True
position: 0
---

# Broken Skin When Loading RadRating via AJAX

When the **RadRating** in not initially visible on the page and it is loaded through AJAX, its skin may not be loaded correctly. The following code sample shows such a scenario:

````ASP.NET
<telerik:RadAjaxPanel runat="server" ID="panUpdate">
	<asp:Panel runat="server" Visible="false" ID="Panel1">
		<telerik:RadRating runat="server" ID="RadRating1"></telerik:RadRating>
	</asp:Panel>
	<asp:Button runat="server" ID="btnUpdate" Text="Update" OnClick="btnUpdate_Click" />
</telerik:RadAjaxPanel>
````

````C#
protected void btnUpdate_Click(object sender, EventArgs e)
{
	Panel1.Visible = true;
}			
````
````VB
Protected Sub btnUpdate_Click(sender As Object, e As EventArgs)
	Panel1.Visible = True
End Sub
````

This is a common issue when dynamically loading controls through AJAX requests. The reason for this behavior is that the control relies on its CSS resources to be already loaded on the page during initialization and rendering, whereas they are still loading.

>tip This issue may manifest with other Telerik controls and you should first set their `EnableAjaxSkinRendering` property to `true` because it helps in registering the stylesheets on the page. If it does not help, review the [Appearance Issues when Control is Added During AJAX Request]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/skins-troubleshooting%}#appearance-issues-when-control-is-added-during-ajax-request) section of the documentation.

## See Also

* [Skins Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/skins-troubleshooting%})

