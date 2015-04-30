---
title: Error Handling Automatic Operations
page_title: Error Handling Automatic Operations | RadGrid for ASP.NET AJAX Documentation
description: Error Handling Automatic Operations
slug: grid/troubleshooting/error-handling-automatic-operations
tags: error,handling,automatic,operations
published: True
position: 3
---

# Error Handling Automatic Operations



## 

RadGrid can fire three events after an automatic action occurred:

* **ItemUpdated**

* **ItemInserted**

* **ItemDeleted**



````C#
	    protected void RadGrid1_ItemUpdated(object source, Telerik.Web.UI.GridUpdatedEventArgs e)
	    {
	        if (e.Exception != null)
	        {
	            e.KeepInEditMode = true;
	            e.ExceptionHandled = true;
	            DisplayMessage("Product " + e.Item["ProductID"].Text + " cannot be updated. Reason: " + e.Exception.Message);
	        }
	        else
	        {
	            DisplayMessage("Product " + e.Item["ProductID"].Text + " updated");
	        }
	    }
	    protected void RadGrid1_ItemInserted(object source, GridInsertedEventArgs e)
	    {
	        if (e.Exception != null)
	        {
	            e.ExceptionHandled = true;
	            e.KeepInInsertMode = true;
	            DisplayMessage("Product cannot be inserted. Reason: " + e.Exception.Message);
	        }
	        else
	        {
	            DisplayMessage("Product inserted");
	        }
	    }
	    protected void RadGrid1_ItemDeleted(object source, GridDeletedEventArgs e)
	    {
	        if (e.Exception != null)
	        {
	            e.ExceptionHandled = true;
	            DisplayMessage("Product " + e.Item["ProductID"].Text + " cannot be deleted. Reason: " + e.Exception.Message);
	        }
	        else
	        {
	            DisplayMessage("Product " + e.Item["ProductID"].Text + " deleted");
	        }
	    }
	
	    private void DisplayMessage(string text)
	    {
	        RadGrid1.Controls.Add(new LiteralControl(text));
	    }
````
````VB
	    Protected Sub RadGrid1_ItemUpdated(ByVal source As Object, ByVal e As Telerik.Web.UI.GridUpdatedEventArgs) Handles RadGrid1.ItemUpdated
	        If Not (e.Exception Is Nothing) Then
	            e.KeepInEditMode = True
	            e.ExceptionHandled = True
	            DisplayMessage("Product " & e.Item("ProductID").Text & " cannot be updated. Reason: " & e.Exception.Message)
	        Else
	            DisplayMessage("Product " & e.Item("ProductID").Text & " updated")
	        End If
	    End Sub 'RadGrid1_ItemUpdated
	
	    Protected Sub RadGrid1_ItemInserted(ByVal source As Object, ByVal e As GridInsertedEventArgs) Handles RadGrid1.ItemInserted
	        If Not (e.Exception Is Nothing) Then
	            e.ExceptionHandled = True
	            e.KeepInInsertMode = True
	            DisplayMessage("Product cannot be inserted. Reason: " & e.Exception.Message)
	        Else
	            DisplayMessage("Product inserted")
	        End If
	    End Sub 'RadGrid1_ItemInserted
	
	    Protected Sub RadGrid1_ItemDeleted(ByVal source As Object, ByVal e As GridDeletedEventArgs) Handles RadGrid1.ItemDeleted
	        If Not (e.Exception Is Nothing) Then
	            e.ExceptionHandled = True
	            DisplayMessage("Product " + e.Item("ProductID").Text + " cannot be deleted. Reason: " + e.Exception.Message)
	        Else
	            DisplayMessage("Product " + e.Item("ProductID").Text + " deleted")
	        End If
	    End Sub 'RadGrid1_ItemDeleted
	
	    Private Sub DisplayMessage(ByVal text As String)
	        RadGrid1.Controls.Add(New LiteralControl([text]))
	    End Sub 'DisplayMessage
````


The default behavior of Telerik RadGrid is tolet the **DataSource** control rise an exceptionwhen error occurs when inserting/updating/deleting. To prevent this exception you should handle the corresponding event and in case (e.Exception != null) or (Not e.Exception Is Nothing) you should set e.ExceptionHandled to true and display error message.



````C#
	    protected void RadGrid1_ItemDeleted(object source, GridDeletedEventArgs e)
	    {
	          if (e.Exception != null)
	          {
	             e.ExceptionHandled = true;
	             DisplayMessage("Product " + e.Item["ProductID"].Text + " cannot be deleted. Reason: " + e.Exception.Message);
	          }
	          ....
	    }
````
````VB
	    Protected Sub RadGrid1_ItemDeleted(ByVal source As Object, ByVal e As GridDeletedEventArgs) Handles RadGrid1.ItemDeleted
	        If Not (e.Exception Is Nothing) Then
	            e.ExceptionHandled = True
	            DisplayMessage("Product " + e.Item("ProductID").Text + " cannot be deleted. Reason: " + e.Exception.Message)
	        End If
	   ................
	
	    End Sub
````

