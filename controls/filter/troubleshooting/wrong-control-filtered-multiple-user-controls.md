---
title: Wrong Control is Filtered with Multiple Instances
page_title: Wrong Control is Filtered with Multiple Instances | RadFilter for ASP.NET AJAX Documentation
description: Wrong control may be filtered when more than one instance of their user control is present. See how to resolve/
slug: filter/troubleshooting/wrong-control-filtered-multiple-user-controls
tags: filter,multiple,instances,wrong,control,filtered
published: True
position: 0
---

# Wrong Control is Filtered with Multiple Instances are Present on the Page


When the RadFilter and the control it filters are on a user control and you have more than one instance of the same user control on the page, the wrong control may be filtered.

This can happen if the filter is in a different `INamingContainer` from the grid it filters.

What happens in such a case is the following:

1. RadFilter looks for its target in the current NamingContainer.
1. The target is not found, so the entire page control hierarchy must be traversed.
1. RadFilter invokes a recursive `FindControl()` from the `Page` or `MasterPage`.
1. The first instance of the user control on the page meets the criteria and all filters from all instances work with the first instance.

To **fix** this use the **UniqueID** of the target:

````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!Page.IsPostBack)
	{
		RadFilter1.FilterContainerID = RadGrid1.UniqueID;
	}
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	If Not Page.IsPostBack Then
		RadFilter1.FilterContainerID = RadGrid1.UniqueID
	End If
End Sub
````

## See Also

* [RadGrid Filtering with RadFilter]({%slug filter/how-to/radgrid-filtering-with-radfilter%})