---
title: Using Scripts via Server-side Content property
description: See how to enable Script tags in the content, set via the Server-side Content property of the RadEditor control.
type: how-to
page_title: Using Scripts via Server-side Content property
slug: editor-using-scripts-via-server-side-content-property
res_type: kb
---

## How-to
Enable Script tags in the content, set via the Server-side Content property of the RadEditor control

## Solution
You should disable the RemoveScripts and the EncodeScripts built-in content filters on the Page_Load event and then set the desired Script in the content.

````ASPX
<telerik:RadEditor runat="server" ID="RadEditor1">
</telerik:RadEditor>
````

````C#
    protected void Page_Load(object sender, EventArgs e)
    {
        RadEditor1.DisableFilter(EditorFilters.RemoveScripts);
        RadEditor1.DisableFilter(EditorFilters.EncodeScripts);
 
        string initialContent = @"
<script type=""text/javascript"">
       alert(1);
</script>";
 
        RadEditor1.Content = initialContent;
    }
````

````VB
    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
        RadEditor1.DisableFilter(EditorFilters.RemoveScripts)
        RadEditor1.DisableFilter(EditorFilters.EncodeScripts)
 
        Dim initialContent As String =
"<script type=""text/javascript"">" +
       "alert(1);" +
"</script>"
 
        RadEditor1.Content = initialContent
    End Sub
````
