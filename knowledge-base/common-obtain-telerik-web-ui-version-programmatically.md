---
title: How to Obtain Telerik.Web.UI Version Number Programmatically?
description: Check out how to obtain the version number of Telerik.Web.UI.dll on the server-side
type: how-to
page_title: How to Obtain Telerik.Web.UI Version Number Programmatically?
slug: common-obtain-telerik-web-ui-version-programmatically
position: 
tags: 
ticketid: 1556794
res_type: kb
---

## How to

Obtain the version number of the currently referenced Telerik.Web.UI dll or another assembly referenced in your project.

## Description

Sample ASPX page

````ASPX
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <telerik:RadScriptManager ID="RadScriptManager1" runat="server"></telerik:RadScriptManager>
           <asp:Label id="ProductVersion1" runat="server" />
    </form>
</body>
</html>
````

Code-behind logic

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        // Get the file version.
        System.Diagnostics.FileVersionInfo myFileVersionInfo = System.Diagnostics.FileVersionInfo.GetVersionInfo(Server.MapPath("~/Bin/Telerik.Web.UI.dll"));

        // Print the file name and version number.
        ProductVersion1.Text = "File: " + myFileVersionInfo.FileDescription + '\n' +
                            "Version number: " + myFileVersionInfo.FileVersion;
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If Not IsPostBack Then
        Dim myFileVersionInfo As System.Diagnostics.FileVersionInfo = System.Diagnostics.FileVersionInfo.GetVersionInfo(Server.MapPath("~/Bin/Telerik.Web.UI.dll"))
        ProductVersion1.Text = "File: " & myFileVersionInfo.FileDescription & vbLf & "Version number: " & myFileVersionInfo.FileVersion
    End If
End Sub
````

The result:

![sample image](images/common-obtain-telerik-web-ui-version-programmatically.png)

 