---
title: Set full RadGrid height depending on row count
description: Set full RadGrid height depending on row count. Check it now!
type: how-to
page_title: Set full RadGrid height depending on row count
slug: grid-set-full-radgrid-height-depending-on-row-count
res_type: kb
---

## Description

When scrolling is enabled, the scroll area of the grid has a fixed scroll height of 300px. This causes a blank space to appear if the item  count is too low.

## Solution
  
If you want the grid to have its height automatically adjusted to its records, you can set an empty value to the following property:  

````
<Scrolling ScrollHeight="" />
````

You can also set this property programmaticaly to `Unit.Empty`:

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadGrid1.ClientSettings.Scrolling.ScrollHeight = Unit.Empty;
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If Not IsPostBack Then
        RadGrid1.ClientSettings.Scrolling.ScrollHeight = Unit.Empty
    End If
End Sub
````

Alternatively, if you want to set a percentage height to the grid, you can follow the steps provided here:  
[http://www.telerik.com/support/code-library/setting-radgrid's-height-in-percents](https://www.telerik.com/support/code-library/setting-radgrid's-height-in-percents)

