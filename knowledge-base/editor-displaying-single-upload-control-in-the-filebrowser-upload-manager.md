---
title: Displaying single upload control in the FileBrowser Upload manager
description: Displaying single upload control in the FileBrowser Upload manager of RadEditor. Check it now!
type: how-to
page_title: Displaying single upload control in the FileBrowser Upload manager
slug: editor-displaying-single-upload-control-in-the-filebrowser-upload-manager
res_type: kb
---

   
## HOW-TO
 Display single upload control in the FileBrowser Upload manager of RadEditor
   
## DESCRIPTION
 By default the Upload manager in the RadEditor's FileBrowser dialogs contains three RadUpload controls in it. If you want to customize the Upload dialog and show a single Upload control then follow the instructions below.  
   
## SOLUTION
1() Register [the external dialog files](http://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx) of RadEditor:  
- Copy the EditorDialogs installation folder to the root of the web project  
- Set the ExternalDialogsPath= "~/EditorDialogs/";  property, e.g.  

````ASP.NET
<telerik:radeditor runat="server" ExternalDialogsPath="~/EditorDialogs" ID="RadEditor1"> 
	<ImageManager ViewPaths="~/" UploadPaths="~/" /> 
</telerik:radeditor> 
````

2)  Create a UserControl in the root of your web application for example named UserControl.ascx and put the following code in it:  
   
 
````ASP.NET

<%@ Control Language="C#" AutoEventWireup="true" CodeFile="UserControl.ascx.cs" Inherits="UserControl" %> 
<script runat="server" type="text/C#">  
 
    protected void Page_Load(object sender, System.EventArgs args)  
    {  
        Telerik.Web.UI.RadFileExplorer rfe = (Telerik.Web.UI.RadFileExplorer)this.FindRadControl(this.Page);  
        if (rfe != null)  
        { 
            rfe.Upload.MaxFileInputsCount = 1; 
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
 
   
3) Register the custom control in the \EditorDialogs\FileBrowser.ascx external dialog control:  
 
````ASPX
<%@ Register TagPrefix="custom" TagName="customControl" Src="~/UserControl.ascx"  %>   
<custom:customControl ID="customControl1" runat="server" /> 
````
 


  