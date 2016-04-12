---
title: Cross-Page PostBacks
page_title: Cross-Page PostBacks | RadComboBox for ASP.NET AJAX Documentation
description: Cross-Page PostBacks
slug: combobox/functionality/cross-page-postbacks
tags: cross-page,postbacks
published: True
position: 6
---

# Cross-Page PostBacks



## 

You can have your RadComboBox cause postbacks to a different web page from the one that it resides. To achieve this behavior, simply set the **PostBackUrl** property to the page that should handle the postback.

````ASPNET
<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" runat="server" PostBackUrl="CrossPageCs.aspx"></telerik:RadComboBox>
````



Once in the second page, you can access the RadComboBox control on the previous page using the **Page.PreviousPage** property.



````C#
	
protected void Page_Load(object sender, EventArgs e)
{
	if (Page.PreviousPage == null) 
	{ 
		Response.Redirect("Default.aspx"); 
	}

	RadComboBox comboBox = (RadComboBox)Page.PreviousPage.FindControl("RadComboBox1");
	Label1.Text = comboBox.SelectedItem.Text;
}
	
````
````VB.NET
		
Private Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

	If Page.PreviousPage Is Nothing Then
		Response.Redirect("Default.aspx")
	End If
	Dim comboBox As RadComboBox = CType(Page.PreviousPage.FindControl("RadComboBox1"), RadComboBox)
	Label1.Text = comboBox.SelectedItem.Text

End Sub

````


For a live example, see [Cross Page Postback](http://demos.telerik.com/aspnet-ajax/ComboBox/Examples/Functionality/CrossPagePostBack/DefaultCS.aspx).
