---
title: Using AJAX in SharePoint WebParts
page_title: Using AJAX in SharePoint WebParts | UI for ASP.NET AJAX Documentation
description: Using AJAX in SharePoint WebParts
slug: sharepoint/troubleshooting/sharepoint-ajax-updates
tags: sharepoint,ajax
published: True
position: 0
---

# Using AJAX in SharePoint WebParts



When using Ajax in SharePoint WebParts we recommend to add **RadAjaxManager** programmatically. This should be done in the **OnInit** event of the Web Part and then add the ajax settings in **CreateChildControls**.

Here is a short example of what the code-behind will look in this case:

````C#
public class WebPart1 : WebPart
{
	RadAjaxManager ajaxmgr;
	protected override void OnInit(EventArgs e)
	{
		base.OnInit(e);
		ajaxmgr = RadAjaxManager.GetCurrent(Page);
		if (ajaxmgr == null)
		{
			ajaxmgr = new RadAjaxManager() { ID = "RadAjaxManager1" };
			Page.Items.Add(typeof(RadAjaxManager), ajaxmgr);
		}

		if (Page.Form != null)
		{
			Page.Form.Controls.AddAt(0, ajaxmgr);
		}
		EnsureChildControls();
	}

	protected override void CreateChildControls()
	{
		//create RadGrid, AjaxManager and any other necessary controls here

		  RadGrid grid = FindControl("RadGrid1") as RadGrid;
		  RadAjaxLoadingPanel loadingPanel =            FindControl("RadAjaxLoadingPanel1") as RadAjaxLoadingPanel;
		//add necessary ajax settings
		if (ajaxmgr != null)
		{
			AjaxSetting ajaxSetting = new AjaxSetting();

			ajaxSetting.AjaxControlID = grid.ID;
			ajaxSetting.UpdatedControls.Add(new AjaxUpdatedControl(grid.ID, loadingPanel.ID));

			ajaxmgr.AjaxSettings.Add(ajaxSetting);
		}
	}
}


````
````VB

Public Class WebPart1
	Inherits WebPart
	Private ajaxmgr As RadAjaxManager
	Protected Overrides Sub OnInit(e As EventArgs)
		MyBase.OnInit(e)
		ajaxmgr = RadAjaxManager.GetCurrent(Page)
		If ajaxmgr Is Nothing Then
			ajaxmgr = New RadAjaxManager() With { _
				Key .ID = "RadAjaxManager1" _
			}
			Page.Items.Add(GetType(RadAjaxManager), ajaxmgr)
		End If

		If Page.Form IsNot Nothing Then
			Page.Form.Controls.AddAt(0, ajaxmgr)
		End If
		EnsureChildControls()
	End Sub

	Protected Overrides Sub CreateChildControls()
		'create RadGrid, AjaxManager and any other necessary controls here

		Dim grid As RadGrid = TryCast(FindControl("RadGrid1"), RadGrid)
		Dim loadingPanel As RadAjaxLoadingPanel = TryCast(FindControl("RadAjaxLoadingPanel1"), RadAjaxLoadingPanel)
		'add necessary ajax settings
		If ajaxmgr IsNot Nothing Then
			Dim ajaxSetting As New AjaxSetting()

			ajaxSetting.AjaxControlID = grid.ID
			ajaxSetting.UpdatedControls.Add(New AjaxUpdatedControl(grid.ID, loadingPanel.ID))

			ajaxmgr.AjaxSettings.Add(ajaxSetting)
		End If
	End Sub
End Class

````


