---
title: Image Lazy Loading
page_title: Image Lazy Loading - RadListBox
description: Check our Web Forms article about Image Lazy Loading.
slug: listbox/functionality/image-lazy-loading
tags: image,lazy,loading,performance
published: True
position: 8
---

# Image Lazy Loading

As of 2026 Q2, the **RadListBox** control supports the **Image Lazy Loading** feature. The following article demonstrates how to use this feature to improve performance when items contain images.

## Overview

When a RadListBox contains many items with images, all images are downloaded on initial page load, regardless of whether the items are visible. This can cause significant latency and degrade user experience, particularly with long lists or items with sub-choices that also have images.

The **EnableImageLazyLoading** property defers image loading until items scroll into the visible viewport. Images are rendered with a `data-src` attribute instead of `src`, and are activated only when they enter the visible area.

## Enabling Image Lazy Loading

1. Set the **EnableImageLazyLoading** property to **true**.

1. Set **Height** to RadListBox. A fixed height is required so that the control has a scrollable viewport.

1. Assign images to items via the **ImageUrl** property.

Here is a basic example:

````ASP.NET
<telerik:RadListBox runat="server" ID="RadListBox1" Height="300px" Width="350px" EnableImageLazyLoading="true" />
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        string[] colors = { "E74C3C", "3498DB", "2ECC71", "9B59B6", "F39C12", "1ABC9C", "E67E22", "34495E", "16A085", "D35400" };

        for (int i = 1; i <= 500; i++)
        {
            RadListBoxItem item = new RadListBoxItem
            {
                Text = "Product " + i,
                ImageUrl = "https://placehold.co/32x32/" + colors[(i - 1) % colors.Length] + "/FFFFFF?text=" + i
            };

            RadListBox1.Items.Add(item);
        }
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If Not IsPostBack Then
        Dim colors() As String = {"E74C3C", "3498DB", "2ECC71", "9B59B6", "F39C12", "1ABC9C", "E67E22", "34495E", "16A085", "D35400"}

        For i As Integer = 1 To 300
            Dim item As New RadListBoxItem()
            item.Text = "Product " & i
            item.ImageUrl = "~/Images/product_" & i & ".png"
            RadListBox1.Items.Add(item)
        Next
    End If
End Sub
````