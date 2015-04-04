---
title: Sorting Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: listview/fuctionality/sorting/overview
tags: overview
published: True
position: 0
---

# Sorting Overview



## 

RadListView possesses sorting capabilities that are similar to these, offered by __RadGrid__, so the developers who are familiar with Telerik controls will get used to __RadListView__easily.

Implementing sorting is very easy - you should add a __SortExpression__ object to the __SortExpressions__ collection as demonstrated on the following example.



````C#
	protected void Button1_Click(object sender, EventArgs e){
	    RadListViewSortExpression expression = new RadListViewSortExpression();
	    RadListView1.SortExpressions.Clear();
	    expression.FieldName = "myFieldName";
	    expression.SortOrder = RadListViewSortOrder.Descending;
	    RadListView1.SortExpressions.AddSortExpression(expression);
	    RadListView1.Rebind();
	}			
````
````VB.NET
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
	        Dim expression As New RadListViewSortExpression()
	        RadListView1.SortExpressions.Clear()
	        expression.FieldName = "myFieldName"
	        expression.SortOrder = RadListViewSortOrder.Descending
	        RadListView1.SortExpressions.AddSortExpression(expression)
	        RadListView1.Rebind()
	    End Sub
````


Sorting by multiple fields as well as the natural sorting could be enabled by setting the corresponding properties - AllowMultiFieldSorting and AllowNaturalSort.

To facilitate the users that need a string representation of the sorting expression, we exposed the GetSortString method:



````C#
	   Label1.Text = RadListView1.SortExpressions.GetSortString();			
````
````VB.NET
	        Label1.Text = RadListView1.SortExpressions.GetSortString()
````


>note When binding __RadListView__ to __ObjectDataSource__ control you should set the __OverrideDataSourceControlSorting__ property to __true__ 
>

