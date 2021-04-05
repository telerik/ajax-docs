---
title: Apply RestrictionZoneID to RadEditor dialogs
description: Learn how to apply RestrictionZoneID to RadEditor dialogs.
type: how-to
page_title: Apply RestrictionZoneID to RadEditor dialogs
slug: editor-specify-restriction-zone-to-radeditor-dialogs
res_type: kb
---

## Description
By default, RadEditor dialogs can be dragger with the mouse outside of the visiable part of the page area. This could be prevented by setting the RestrictionZoneID property of RadWindow. The solution below provides guidance how to do that.

## Solution
1. Create a theme and skin file in it. In the skin file put the following RadWindow declaration and directive:
````ASP.NET
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<telerik:RadWindow KeepInScreenBounds="true" RestrictionZoneID="stopWindow" runat="server"></telerik:RadWindow>
````
2. Set the theme property in the Page directive of the aspx page with the editor:
````ASP.NET
<%@ Page Language="C#" AutoEventWireup="true" Theme="SkinFileName" CodeFile="Default.aspx.cs" Inherits="_Default" %>
````
3. Set the id attribute with a value of "restictionzoneid" to the page HTML tag, e.g.
````ASP.NET
<html id="stopWindow">
````
4. Put the following style tag in the head of the page to make the height of the html tag to be 100%:
````ASP.NET
   <style type="text/css"> 
    html
    {
        height: 100%;
    }
    </style>
````
