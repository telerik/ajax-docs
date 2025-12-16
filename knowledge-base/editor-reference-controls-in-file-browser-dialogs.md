---
title: Access the controls in the FileBrowser dialogs of RadEditor
description: Learn how to get reference to the FileExplorer, the Grid and AsyncUpload inside the Image Manager, Document Manager and other File Browser dialogs of RadEditor for ASP.NET AJAX
type: how-to
page_title: Access the controls in the FileBrowser dialogs of RadEditor
slug: editor-reference-controls-in-file-browser-dialogs
position: 
tags: 
ticketid: 1581470
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
See how to get a reference to the FileExplorer, the Grid, and AsyncUpload inside the Image Manager, Document Manager, or another File Browser dialogs of RadEditor 

## Solution
1. Register [the external dialog files](http://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx) of RadEditor 
2. Copy the EditorDialogs installation folder to the root of the web project  
3. Set the ExternalDialogsPath="~/EditorDialogs/" property ro point to the EditorDialogs folder, e.g.  
	````ASP.NET
	<telerik:radeditor runat="server" ExternalDialogsPath="~/EditorDialogs" ID="RadEditor1"> 
		<ImageManager ViewPaths="~/" UploadPaths="~/" /> 
	</telerik:radeditor> 
	````

4.  Create a UserControl in the root of your web application for example named UserControl.ascx and define the FindRadControl function which iterates through the Controls collection and looks for RadFileExplorer and its sub-controls:  

````ASP.NET
	<%@ Control Language="C#" AutoEventWireup="true" CodeFile="UserControl.ascx.cs" Inherits="UserControl" %> 
	<script runat="server" type="text/C#">  
		protected void Page_Load(object sender, System.EventArgs args)  
		{  
			Telerik.Web.UI.RadFileExplorer rfe = (Telerik.Web.UI.RadFileExplorer)this.FindRadControl(this.Page);  //gives a reference to RadFileExplorer
			if (rfe != null)  
			{ 
				rfe.AsyncUpload.TabIndex = 2; //returns a reference to RadAsyncUpload
				rfe.Grid.TabIndex = 0; //returns a reference to RadGrid
				rfe.TreeView.EnableAriaSupport = true; //returns a reference to RadTreeView
			}  
		}
		private Control FindRadControl(Control parent)  
		{  
			foreach (Control c in parent.Controls)  
			{ 
				
				if (c is Telerik.Web.UI.RadFileExplorer) return c;  
				if (c.Controls.Count > 0)  
				{  
					Control sub = FindRadControl(c);  
					if (sub != null) return sub;  
				}  
			}  
			return null;  
		}  
	</script>
````

5. Register the custom control in the \EditorDialogs\FileBrowser.ascx external dialog control:  

````
	<%@ Register TagPrefix="custom" TagName="customControl" Src="~/UserControl.ascx"  %>   
	<custom:customControl ID="customControl1" runat="server" /> 
````

## See Also
*  [Displaying single upload control in the FileBrowser Upload manager]({%slug editor-displaying-single-upload-control-in-the-filebrowser-upload-manager%})
*  [Register the external dialog files of RadEditor](http://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx)
*  [Add custom columns](https://demos.telerik.com/aspnet-ajax/fileexplorer/examples/applicationscenarios/customgridcolumns/defaultcs.aspx)
   

     