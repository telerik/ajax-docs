---
title: Custom Memberships and Roles Manager as a User Control
description: The article shares information about Custom Memberships and Roles Manager as a User Control
type: how-to
page_title: Custom Memberships and Roles Manager as a User Control
slug: common-custom-memberships-and-roles-manager-as-a-user-control
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

In many projects integrating Memberships & Roles, having a user control for managing users and roles streamlines administration. This project offers just that, with added functionality for handling user profile data, including Firstname, Lastname, Company name, and last login date.

The user control, named "MembershipManager," hosts a RadGrid within a MultiView control. A RadTabStrip facilitates toggling between the User Manager and Role Manager views.

The RadGrid retains filtering and sorting capabilities across all columns, with a default sorting by last login date for quick access to recent activities.

Additionally, the RadGrid incorporates a RadComboBox for efficient management of role memberships. It intelligently prevents attempts to add/edit users into roles they are already members of, displaying only roles the user is not associated with.

## Solution

The project ships with a SQL Server 2005 Express database containing pre-populated users for testing. For convenience, custom login, create user, change password, and retrieve password pages are included in the ~/security folder to manage user accounts easily.

To ensure seamless functionality of the create user wizard, the SMTP information in the web.config file requires editing.

If encountering issues with the included database files, they can be safely deleted. Upon running the project, a new database will be auto-generated. Users can then be created using the provided pages in the ~/security folder.

- [DOWNLOAD Sample](files/common-custom-memberships-and-roles-manager-as-a-user-control.zip) 
