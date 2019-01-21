---
title: UI Grouping
page_title: UI Grouping | RadListView for ASP.NET AJAX Documentation
description: Overview
slug: listview/fuctionality/grouping/overview
tags: overview
published: True
position: 0
---

# UI Grouping


**RadListView** supports ListView-like grouping for its items. You can easily achieve displaying of data in groups with RadListView by setting the properties listed:

* **GroupItemCount**—the number of items you want to display in each group.
* **GroupPlaceHolderID**—the ID of the control which is used to hold all groups of the RadListView control.
* **ItemPlaceHolderID**—the ID of the control holding each RadListView item.

In addition you need to define the following Templates:

* **LayoutTemplate**—the general ListView template that holds all groups and their items. You can add layout here (like begining/closing a table, headers, pagers).
* **GroupTemplate**—the template around each set of items defined by `GroupItemCount`.
* **GroupSeparatorTemplate**—the content that separates one UI group from the other.
* **EmptyItemTemplate**—template for an empty item.

>tip For grouping according to a field in the data source, see [Data Grouping in RadListView]({%slug listview/fuctionality/grouping/data-grouping%}).


>caption Example with detailed descriptions

````ASP.NET
<telerik:RadListView ID="RadListView1" DataSourceID="SqlDataSource1" runat="server"
    ItemPlaceholderID="EmployeesContainer" GroupPlaceholderID="GroupsEmployeesContainer"
    GroupItemCount="4">
</telerik:RadListView>
````





When item grouping is enabled for RadListView, the **LayoutTemplate** defines how the groups should be displayed in the RadListView. Note that here is the place of the group placeholder control.

````ASP.NET
	        <LayoutTemplate>
	            <asp:PlaceHolder ID="GroupsEmployeesContainer" runat="server" />
	        </LayoutTemplate>
````





Create the group structure and look by defining the **GroupTemplate**. Note that here is the place for the item placeholder control.

````ASP.NET
	        <GroupTemplate>
	            <fieldset style="float: left; width: 330px;">
	                <legend>Employees group</legend>
	                <table>
	                    <tr>
	                        <td>
	                            <asp:PlaceHolder ID="EmployeesContainer" runat="server" />
	                        </td>
	                    </tr>
	                </table>
	            </fieldset>
	        </GroupTemplate>
````





Additionally, you can declare the **GroupSeparatorTemplate** which is to be shown between the RadListView groups. It can be used to emphasize the division of the groups.

````ASP.NET
	        <GroupSeparatorTemplate>
	            <hr />
	        </GroupSeparatorTemplate>
````





The **EmptyItemTemplate** defines a layout for the non-existing items of a group. It is displayed in case the group has less items than the GroupItemCount in the empty places left.

````ASP.NET
	        <EmptyItemTemplate>
	            <div style="float: left; width: 160px; height: 120px">
	                <img src="Img/EmtpyItemImage.jpg" width="120px" height="150px" alt="No Employee to display"
	                    title="No Employee to display" />
	            </div>
	        </EmptyItemTemplate>
````





## See Also

* [Live Demo: RadListView UI Grouping](http://demos.telerik.com/aspnet-ajax/listview/examples/grouping/defaultcs.aspx)

* [Data Grouping in RadListView]({%slug listview/fuctionality/grouping/data-grouping%})

