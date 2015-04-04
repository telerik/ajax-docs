---
title: Defining Structure in Code-Behind
page_title: Defining Structure in Code-Behind | UI for ASP.NET AJAX Documentation
description: Defining Structure in Code-Behind
slug: pagelayout/server-side-programming/defining-structure-in-code-behind
tags: defining,structure,in,code-behind
published: True
position: 0
---

# Defining Structure in Code-Behind



The following article demonstrates how to define the structure of the __RadPageLayout__ from code-behind.

## 

You can define the structure of __RadPageLayout__ and add the content dynamically in server-side code. In order to achieve this, you should create an instance of the control along with the desired structure (Rows, Columns and Content) and add it to the page.

## Example

The example below demonstrates how to create the __RadPageLayout__ object, along with the needed content holders.

__Figure 1__ demonstrates the layout of the example.

>tabbedCode

````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadPageLayout pageLayout = new RadPageLayout();
	        pageLayout.GridType = GridType.Fluid;
	        pageLayout.CssClass = "borderCssClass";
	        LayoutRow row = new LayoutRow();
	
	        LayoutColumn layoutColumn = new LayoutColumn();
	        Label label1 = new Label();
	        label1.Text = "Main Content Here";
	        layoutColumn.Span = 8;
	        layoutColumn.Controls.Add(label1);
	        row.Columns.Add(layoutColumn);
	
	        CompositeLayoutColumn compositeColumn = new CompositeLayoutColumn();
	        compositeColumn.Span = 4;
	
	        LayoutRow row1 = new LayoutRow();
	        Label label2 = new Label();
	        label2.Text = "additional content 1";
	        row1.Content.Controls.Add(label2);
	
	        LayoutRow row2 = new LayoutRow();
	        Label label3 = new Label();
	        label3.Text = "additional content 2";
	        row2.Content.Controls.Add(label3);
	
	        compositeColumn.Rows.Add(row1);
	        compositeColumn.Rows.Add(row2);
	        row.Columns.Add(compositeColumn);
	
	        pageLayout.Rows.Add(row);
	        form1.Controls.Add(pageLayout);
	    }
````
````VB
	    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	        Dim pageLayout As New RadPageLayout()
	        pageLayout.GridType = GridType.Fluid
	        pageLayout.CssClass = "borderCssClass"
	        Dim row As New LayoutRow()
	
	        Dim layoutColumn As New LayoutColumn()
	        Dim label1 As New Label()
	        label1.Text = "Main Content Here"
	        layoutColumn.Span = 8
	        layoutColumn.Controls.Add(label1)
	        row.Columns.Add(layoutColumn)
	
	        Dim compositeColumn As New CompositeLayoutColumn()
	        compositeColumn.Span = 4
	
	        Dim row1 As New LayoutRow()
	        Dim label2 As New Label()
	        label2.Text = "additional content 1"
	        row1.Content.Controls.Add(label2)
	
	        Dim row2 As New LayoutRow()
	        Dim label3 As New Label()
	        label3.Text = "additional content 2"
	        row2.Content.Controls.Add(label3)
	
	        compositeColumn.Rows.Add(row1)
	        compositeColumn.Rows.Add(row2)
	        row.Columns.Add(compositeColumn)
	
	        pageLayout.Rows.Add(row)
	        form1.Controls.Add(pageLayout)
	    End Sub
````
>end

````ASPNET
	<head runat="server">
	    <title></title>    
	    <style type="text/css">
	        .borderCssClass div {
	            border: 1px solid red;
	        }
	    </style>
	  </head>
````


>caption Figure 1. RadPageLayout control

![page-layout-structure](images/page-layout-structure.png)
