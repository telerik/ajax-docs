---
title: Grouping Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: listview/fuctionality/grouping/overview
tags: overview
published: True
position: 0
---

# Grouping Overview



## 

__RadListView__ supports ListView-like grouping for its items. You can easily achieve displaying of data in groups with RadListView by setting the properties listed:

* __GroupItemCount__

* __GroupPlaceHolderID__

* __ItemPlaceHolderID__

In addition you need to define the following Templates:

* __LayoutTemplate__

* __GroupTemplate__

* __GroupSeparatorTemplate__

* __EmptyItemTemplate__



The __GroupItemCount__ property should be set to the number of items you want to display in each group. The __GroupPlaceHolderID__ is the ID of the control which is used to hold all groups of the RadListView control. And the __ItemPlaceHolderID__ is the ID of the control holding each RadListView item.

````ASPNET
	    <telerik:RadListView ID="RadListView1" DataSourceID="SqlDataSource1" runat="server"
	        ItemPlaceholderID="EmployeesContainer" GroupPlaceholderID="GroupsEmployeesContainer"
	        GroupItemCount="4">
	    </telerik:RadListView>
````





When item grouping is enabled for RadListView, the __LayoutTemplate__ defines how the groups should be displayed in the RadListView. Note that here is the place of the group placeholder control.

````ASPNET
	        <LayoutTemplate>
	            <asp:PlaceHolder ID="GroupsEmployeesContainer" runat="server" />
	        </LayoutTemplate>
````





Create the group structure and look by defining the __GroupTemplate__. Note that here is the place for the item placeholder control.

````ASPNET
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





Additionally, you can declare the __GroupSeparatorTemplate__ which is to be shown between the RadListView groups. It can be used to emphasize the division of the groups.

````ASPNET
	        <GroupSeparatorTemplate>
	            <hr />
	        </GroupSeparatorTemplate>
````





The __EmptyItemTemplate__ defines a layout for the non-existing items of a group. It is displayed in case the group has less items than the GroupItemCount in the empty places left.

````ASPNET
	        <EmptyItemTemplate>
	            <div style="float: left; width: 160px; height: 120px">
	                <img src="Img/EmtpyItemImage.jpg" width="120px" height="150px" alt="No Employee to display"
	                    title="No Employee to display" />
	            </div>
	        </EmptyItemTemplate>
````





For a live demo illustrating grouped RadListView samples, follow the link below:

[RadListView Grouping](http://demos.telerik.com/aspnet-ajax/listview/examples/grouping/defaultcs.aspx)
