---
title: Cross-Page PostBacks
page_title: Cross-Page PostBacks | UI for ASP.NET AJAX Documentation
description: Cross-Page PostBacks
slug: combobox/functionality/cross-page-postbacks
tags: cross-page,postbacks
published: True
position: 6
---

# Cross-Page PostBacks



## 

You can have your RadComboBox cause postbacks to a different web page from the one that it resides. To achieve this behavior, simply set the __PostBackUrl__ property to the page that should handle the postback.

````ASPNET
	    <telerik:radcombobox id="RadComboBox1" runat="server" postbackurl="CrossPageCs.aspx"></telerik:radcombobox>
````



Once in the second page, you can access the RadComboBox control on the previous page using the __Page.PreviousPage__ property.

>tabbedCode

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


>end

For a live example, see [Cross Page Postback](http://demos.telerik.com/aspnet-ajax/ComboBox/Examples/Functionality/CrossPagePostBack/DefaultCS.aspx).
