---
title: Select an image or a folder when ImageManager is first shown
description: A RadFileExplorer control is used in the RadEditor ImageManager dialog and the provided solution shows how to set its InitialPath property.
type: how-to
page_title: Select an image or a folder when ImageManager is first shown
slug: editor-select-an-image-or-a-folder-when-imagemanager-is-first-shown
res_type: kb
---

## HOW TO
This article shows how to select an image (or a folder) when ImageManager is first shown.

## DESCRIPTION
A RadFileExplorer control is used in the ImageManager dialog and the provided solution shows how to set its InitialPath property.


## SOLUTION
The desired path should be send by using a QueryString field to the ImageManager's dialog:

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        // Build the URL
        string initialPath = RadEditor1.DialogHandlerUrl + "?initialPath=" + this.Request.ApplicationPath + "/ROOT/SekectedImage";
        RadEditor1.DialogHandlerUrl = initialPath;
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As  System.EventArgs) Handles Me.Load
    If Not IsPostBack Then
        ' Build the URL
        Dim initialPath As String = RadEditor1.DialogHandlerUrl + "?initialPath=" + Me.Request.ApplicationPath + "/ROOT/SekectedImage/CACTU.jpg"
        RadEditor1.DialogHandlerUrl = initialPath
    End If
  
End Sub
````

RadEditor's ExternalDialogPath property should be set in order to use the customized dialog:

````ASP.NET
<div class="tFormatCodeBlock <span class='RadEWrongWord' id='RadESpellError_26'>supportThreadCodeBlock</span>" style="border: 1px solid #7f9db9; overflow-y: auto;">
<telerik:RadEditor ID="RadEditor1" runat="server" Height="300px" Width="450px" ExternalDialogsPath="EditorDialogs/">
    <ImageManager ViewPaths="~/ROOT" />
</telerik:RadEditor>
````

This approach is used in order to get reference to the RadFileExplorer control.
Set the passed QueryString value to the InitialPath property of the RadFileExplorer control:

````C#
protected void Page_Load(object sender, System.EventArgs args)
{
    Telerik.Web.UI.RadFileExplorer RadFileExplorer1 = (Telerik.Web.UI.RadFileExplorer)this.FindRadControl(this.Page);
    string initialPath = Request.QueryString["initialPath"];
    if (initialPath != null)
    {
        if (RadFileExplorer1.InitialPath == string.Empty)
            RadFileExplorer1.InitialPath = initialPath;
    }
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
    Dim RadFileExplorer1 As Telerik.Web.UI.RadFileExplorer = TryCast(Me.FindRadControl(Me.Page), Telerik.Web.UI.RadFileExplorer)
    Dim initialPath As String = Request.QueryString("initialPath")
    If Not String.IsNullOrEmpty(initialPath) Then
        If RadFileExplorer1.InitialPath.Equals(String.Empty) Then
            RadFileExplorer1.InitialPath = initialPath
        End If
    End If
End Sub
````

