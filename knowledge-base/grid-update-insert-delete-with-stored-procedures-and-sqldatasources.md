---
title: Update/Insert/Delete with stored procedures and SqlDataSource
description: Update/Insert/Delete with stored procedures and SqlDataSource. Check it now!
type: how-to
page_title: Update/Insert/Delete with stored procedures and SqlDataSource. | RadGrid
slug: grid-update-insert-delete-with-stored-procedures-and-sqldatasources
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Grid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This demo represents how to perform automatic operations (update/insert/delete) with SqlDataSource control and stored procedures.

## Solution

In order to perform said operations, you'll need to: 

- enable the [automatic operations](https://demos.telerik.com/aspnet-ajax/grid/examples/data-editing/automatic-crud-operations/defaultvb.aspx) for the control
- configure from design-time the update/insert/delete parameters of the SqlDataSource control
- define the stored procedures in the underlying database passing the proper set of arguments to them

````SQL
/* SelectEmployees */ 

CREATE PROCEDURE SelectEmployees   

AS 

SELECT [EmployeeID], [LastName], [FirstName], [Title], [HireDate], [Address] FROM [Employees]  
GO  

/* UpdateEmployee  */

CREATE PROCEDURE UpdateEmployee   
(@LastName char(20), @FirstName char(15), @Title char (15),   
@HireDate datetime, @Address char(40), @EmployeeID int)  

AS 

UPDATE [Employees] SET [LastName] = @LastName, [FirstName] = @FirstName, [Title] = @Title, [HireDate] = @HireDate, [Address] = @Address WHERE [EmployeeID] = @EmployeeID  
GO  

/* InsertEmployee */  

CREATE PROCEDURE InsertEmployee   
(@LastName char(20), @FirstName char(15), @Title char (15),  
@HireDate datetime, @Address char(40))   

AS

INSERT INTO [Employees] ([LastName], [FirstName], [Title], [HireDate], [Address]) VALUES (@LastName, @FirstName, @Title, @HireDate, @Address)  
GO  

/* DeleteEmployee  */

CREATE PROCEDURE DeleteEmployee  
@EmployeeID int 

AS 

DELETE FROM [Employees] WHERE [EmployeeID] = @EmployeeID  
GO 
````

Note that you may need to modify the connection string (NorthwindConnectionString) in the web.config file of the web site to point to the Northwind SQL database. The database is present under the **App_Data** subfolder.

[DOWNLOAD the sample](files/grid-update-insert-delete-with-stored-procedures-and-sqldatasources.zip)
