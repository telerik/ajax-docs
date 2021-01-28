---
title: Using AJAX in SharePoint WebParts
page_title: Using AJAX in SharePoint WebParts
description: Check our Web Forms article about Using AJAX in SharePoint WebParts.
slug: sharepoint/troubleshooting/sharepoint-ajax-updates
previous_url: controls/ajaxmanager/troubleshooting/dynamically-adding-radajaxmanager-to-sharepoint-web-parts
tags: sharepoint,ajax
published: True
position: 0
---

# Using Telerik AJAX in SharePoint WebParts



When using Ajax in SharePoint WebParts we recommend to add **RadAjaxManager** programmatically. 

This should be done in the `OnInit` event of the Web Part

You should then add the ajax settings in `CreateChildControls`.

Here is a short example of what the code-behind can look in this case:

>caption How to use RadAjax in SharePoint Web Parts

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



## Troubleshooting

Avoid using two different methods of AJAX-enabling content. For example, if you use the approach above, do not use **RadAjaxPanel** or **asp:UpdatePanel** for the same content.

**RadAjaxPanel** cannot be guaranteed to work as expected under SharePoint.

Make sure there are no JavaScript errors or invalid markup on the page. Either of these issues tends to break AJAX requests.

If you get the following error:

>The control collection cannot be modified during DataBind, Init, Load, PreRender or Unload phases

you can try these options:

* Move the SharePoint Web Part Manager from the header to the body, or after the script manager. Here is an example of what you should look for:

	**Markup**

		<SharePoint:AjaxDelta id="DeltaSPWebPartManager" runat="server">
            <WebPartPages:SPWebPartManager runat="server">
            </WebPartPages:SPWebPartManager>
        </SharePoint:AjaxDelta>


* Use only **asp:UpdatePanel** and **asp:UpdateProgress** controls to AJAX-enable the content, without using RadAjax.


