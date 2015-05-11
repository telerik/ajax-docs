---
title: Overview
page_title: Grouping Overview | RadListView for ASP.NET AJAX Documentation
description: Overview
slug: listview/fuctionality/grouping/overview
tags: overview
published: True
position: 0
---

# Grouping Overview



## 

**RadListView** supports ListView-like grouping for its items. You can easily achieve displaying of data in groups with RadListView by setting the properties listed:

* **GroupItemCount**

* **GroupPlaceHolderID**

* **ItemPlaceHolderID**

In addition you need to define the following Templates:

* **LayoutTemplate**

* **GroupTemplate**

* **GroupSeparatorTemplate**

* **EmptyItemTemplate**



The **GroupItemCount** property should be set to the number of items you want to display in each group. The **GroupPlaceHolderID** is the ID of the control which is used to hold all groups of the RadListView control. And the **ItemPlaceHolderID** is the ID of the control holding each RadListView item.

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





For a live demo illustrating grouped RadListView samples, follow the link below:

[RadListView Grouping](http://demos.telerik.com/aspnet-ajax/listview/examples/grouping/defaultcs.aspx)
