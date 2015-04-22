---
title: Known Reasons for Error Messages
page_title: Known Reasons for Error Messages | RadGrid for ASP.NET AJAX Documentation
description: Known Reasons for Error Messages
slug: grid/troubleshooting/known-reasons-for-error-messages
tags: known,reasons,for,error,messages
published: True
position: 1
---

# Known Reasons for Error Messages



## Error message "Cannot find any bindable properties"

This error usually occurs when the DataSource for the grid is null/not assigned or if you do not handled properly the NeedDataSource event. If you implement hierarchical grid structure you may receive this server error if the DataSources for the detail tables in the grid body are nulls or there are problems with the handling of the DetailTableDataBind event (used for detail table binding).

Note that if you want to set empty sources for the MasterTableView/DetailTables in the grid in some occasions you can use the following syntax:



````C#
	            <GridInstance>.DataSource = new Object[0];  
````
````VB.NET
	     
							<GridInstance>.DataSource = new Object(){}
				
````


or



````C#
	<DetailTableInstance>.DataSource = new Object[0];          
````
````VB.NET
	     
							<DetailTableInstance>.DataSource = new Object(){}
				
````


## Error message"Unexpected ajax response was received from the server"

This may be caused by one of the following reasons:

* **Server.Transfer**

* **Incorrect loading of an "Ajaxified" user control**

* **Custom http handler.**

The message is quite descriptive. Below are several resources in regards with this matter:

[Dynamic loading of user controls]({%slug grid/defining-structure/loading-user-control-with-telerik-radgrid-at-runtime%})

[Dynamic loading of user controls with ajax controls](http://www.telerik.com/help/aspnet-ajax/ajax-load-user-controls.html)

## Error message "Telerik.Web.UI.GridInsertionObject does not contain a property with the name <some_name>" Or 'DropDownList' has a SelectedValue which is invalid because it does not exist in the list of items

The reason for this error is that your grid instance can not bind a value for the newly inserted item through the **Eval**()/**Bind**() syntax you hard-coded (as you may have seen from the stack trace of the error).

This problem can be fixed in the following ways:

* Preset the default value of the control(s) when binding to a grid item on the **RadGrid.InitInsertCommandName** command. For auto-generated edit forms, you should prepare a Hashtable (or other dictionary) with the predefined values for your insert form controls and pass it as parameter to the **InsertItem** method:



````C#
	protected void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	{
	    if (e.CommandName == RadGrid.InitInsertCommandName)
	        {
	            //Add new" button clicked
	            e.Canceled = true;
	            //Prepare an IDictionary with the predefined values
	            System.Collections.Specialized.ListDictionary newValues = new
	            System.Collections.Specialized.ListDictionary();
	            newValues[ "<ColumnDataField>"] = "<predefined_value>";
	            //Insert the item and rebind
	            e.Item.OwnerTableView.InsertItem(newValues);
	        }
	}          
````
````VB.NET
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If e.CommandName = RadGrid.InitInsertCommandName Then '"Add new" button clicked
	            e.Canceled = True
	            'Prepare an IDictionary with the predefined values
	     Dim newValues As System.Collections.Specialized.ListDictionary = New
	            System.Collections.Specialized.ListDictionary()
	            newValues("<ColumnDataField>") = "<predefined_value>"
	            'Insert the item and rebind
	            e.Item.OwnerTableView.InsertItem(newValues)
	        End If
	    End Sub
````


* Do not set declaratively (using **Eval()/Bind()** expression) the value for your control(s) in the html code of the page/user control

More info about how to set predefined values for different auto-generated column editors you can find at the end of [ this topic]({%slug grid/data-editing/insert-records/inserting-values-using-inplace-and-editforms-modes%})

For custom edit forms (**WebUserControl/FormTemplate**) you can refer to the  last paragraph  in [this help topic]({%slug grid/data-editing/insert-records/inserting-values-using-usercontrol/formtemplate%}).

## Error message "These columns don't currently have unique values"

There are two possible reasons for this error message to appear:

* There are items in your database with values which differ by spaces. For example:

````XML
	//arbitrary column string values
	billy dean
	heath j aldrich[SPACE]
	heath j aldrich
	heath j aldrich
	HEATH ALDRICH
	HEATH ALDRICH
````

When you strip the space from the item/or add space at the end of the string for the other two fields with the same name, the problem should disappear.It seems that the relation created by the DataSource control and the grid on grouping are not unique when the difference between these field values is merely a space.Currently we are researching this matter thoroughly and will do everything possible to fix it in one of the next versions of the grid.

* Another possible reason for this problem (which appears intermittently) could be that you have cells in a grid column with the same text but with different captions. We suggest you to set the **RadGridInstance.GroupSettings.CaseSensitive** option of the grid to **false**.

* You use **FieldAliases** for the grouping expressions. Removing the **FieldAlias** from the respective group expression(s) should prevent the exception generation.Please note, however, that with such a modification, the relations when you group by the respective column may return different results when you drag items with equal text and different captions. Actually the source of the issue is related to the Microsoft Data Components (DataTable, DataSet, etc.) and we will try to find an accurate solution for one of the upcoming versions of Telerik RadGrid.

## Error message "The data source '<dataSourceName>' does not support sorting with IEnumerable data. Automatic sorting is only supported with DataView, DataTable, and DataSet"

Sorting of generic lists returned from SelectMethod of ObjectDataSource control cannot be handled by any web grid (including the MS GridView). You should implement the sorting at object data source level.

This online resource elaborates on the subject:

[http://www.vinull.com/Post/2007/04/17/aspnet-sorting-a-gridview-with-custom-o.aspx#comments](http://www.vinull.com/Post/2007/04/17/aspnet-sorting-a-gridview-with-custom-o.aspx#comments)

Other possible solution is to bind this collection inside the [NeedDataSource handler](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/NeedDataSource/DefaultCS.aspx) - in this case RadGrid will able to sort the data without any problems.

The third option is to set the **OverrideDataSourceControlSorting**property of the MasterTableView/GridTableView to **true** (the default value is false). With this setting you will force the grid to override DataSourceControl's default sorting and use the RadGrid native sorting instead. Hence the solution is applicable in case of ObjectDataSource with IEnumerable data (or other custom data source controls) without implemented sorting as depicted in point 1.

## Error message "Internet Explorer cannot download 'file' from 'server'.Internet Explorer was not able to open this Internet site. The requested site is either unavailable or cannot be found. Please try again later." when exporting from an SSL page in IE

To prevent this error add the following lines just before the grid is exported:

* RadGrid1.Page.Response.ClearHeaders();

* RadGrid1.Page.Response.Cache.SetCacheability(HttpCacheability.Private);
