---
title: Enforce Roles
page_title: Enforce Roles | RadEditor for ASP.NET AJAX Documentation
description: Enforce Roles
slug: editor/functionality/dialogs/examples/enforce-roles
tags: enforce,roles
published: True
position: 8
---

# Enforce Roles

RadEditor for ASP.NET AJAX provides you with a flexible mechanism for enforcing user roles, which makes it suitable even for large enterprise-wide applications with multiple users and roles. By dynamically setting the **ViewPaths**, **UploadPaths**, **DeletePaths** or the respective properties for Flash, Media, Templates and Documents, you can strictly control user access to resources, in accordance with their roles or profiles.

The table below shows a sample scenario with 4 users and the respective property values that can facilitate those rights.

|  **User** (Role) |  **Insert**  |  **Delete**  |  **Upload**  |  **Properties**  |
| ------ | ------ | ------ | ------ | ------ |
| **Mike** (Administrator)|~//* the tilde ~ symbol represents the root of your web application */|~/|~/| **ViewPaths** ="~/" **DeletePaths** ="~/" **UploadPaths** ="~/"|
| **John** (Marketing)|~/Common~/Marketing~/Marketing/John|~/Marketing/John|~/Marketing~/Marketing/John| **ViewPaths** ="~/Common,~/Marketing" **DeletePaths** ="~/Marketing/John" **UploadPaths** ="~/Marketing"|
| **Steve** (Sales)|~/Common~/Sales/Steve|~/Sales/Steve|~/Sales/Steve| **ViewPaths** ="~/Common,~/Sales/Steve" **DeletePaths** ="~/Sales/Steve" **UploadPaths** ="~/Sales/Steve"|
| **Diana** (HR)|~/HR||| **ViewPaths** ="~/HR" **DeletePaths** ="" **UploadPaths** =""|

The example below demonstrates a basic user role scenario for setting the Image manager properties and folders access. For example in our scenario we have three users: Mike (Administrator) - he has full access to all files in all folders, John who has access to view, upload and delete files in the Common and Marketing folders and all other users have access to the resources subfolder only.

````C#
string userRole = "Mike"; //Administrator
protected void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack)
	{
		switch (userRole)
		{
			case "Mike": /*Administrator*/
				RadEditor1.ImageManager.ViewPaths = new string[] { "~/" };
				RadEditor1.ImageManager.UploadPaths = new string[] { "~/" };
				RadEditor1.ImageManager.DeletePaths = new string[] { "~/" };
				break;
			case "John": /*John*/
				RadEditor1.ImageManager.ViewPaths = new string[] { "~/Common" };
				RadEditor1.ImageManager.UploadPaths = new string[] { "~/Common" };
				RadEditor1.ImageManager.DeletePaths = new string[] { "~/Common", "~/Marketing" };
				break;
			default: /*all users*/
				RadEditor1.ImageManager.ViewPaths = new string[] { "~/Common/Resources" };
				RadEditor1.ImageManager.UploadPaths = new string[] { "~/Common/Resources" };
				RadEditor1.ImageManager.DeletePaths = new string[] { "~/Common/Resources", "~/Marketing/Resources" };
				break;
		}
	}
} 
````
````VB
Private userRole As String = "Mike"
'Administrator
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	If Not IsPostBack Then
		Select Case userRole
			Case "Mike"
				'Administrator
				RadEditor1.ImageManager.ViewPaths = New String() {"~/"}
				RadEditor1.ImageManager.UploadPaths = New String() {"~/"}
				RadEditor1.ImageManager.DeletePaths = New String() {"~/"}
				Exit Select
			Case "John"
				'John
				RadEditor1.ImageManager.ViewPaths = New String() {"~/Common"}
				RadEditor1.ImageManager.UploadPaths = New String() {"~/Common"}
				RadEditor1.ImageManager.DeletePaths = New String() {"~/Common", "~/Marketing"}
				Exit Select
			Case Else
				'all users
				RadEditor1.ImageManager.ViewPaths = New String() {"~/Common/Resourcers"}
				RadEditor1.ImageManager.UploadPaths = New String() {"~/Common/Resourcers"}
				RadEditor1.ImageManager.DeletePaths = New String() {"~/Common/Resourcers", "~/Marketing/Resourcers"}
				Exit Select
		End Select
	End If
End Sub
````

>note The ViewPaths, UploadPaths and DeletePaths properties should point to a folder that is: 
* a subdirectory of your web application
* a directory placed in the root of IIS - you can set this folder by using the / forward slash symbol, e.g. **ViewPaths** = " **/Files** ";
* a virtual directory of your web application that has a physical path pointing outside of your web application.
>
>You should also grant full **ASPNET** (WinXP) / **NETWORK SERVICE** (Win 2003 and Vista) account permissions to the Files Folders. 


## See Also

 * [Create and Configure Virtual Directories in IIS](http://msdn2.microsoft.com/en-us/library/zwk103ab.aspx)
