---
title: Rebind Grid with EnableViewState = false
page_title: Rebind Grid with EnableViewState = false | RadGrid for ASP.NET AJAX Documentation
description: Rebind Grid with EnableViewState = false
slug: grid/performance/rebind-grid-with-enableviewstate-=-false
tags: rebind,grid,with,enableviewstate,=,false
published: True
position: 5
---

# Rebind Grid with EnableViewState = false



## 

This topic discusses how to call the **NeedDataSource** event after command execution with viewstate disabled (**EnableViewState = false**)

The example provided below is for Delete command but the same stands for any other command type you invoke and handle in the ItemCommand/UpdateCommand/DeleteCommand/etc. handler of Telerik RadGrid.

Basically, you assign data source for your grid in the **NeedDataSource** handler. In case of disabled viewstate the events will be fired like this:

1. LoadViewState (the grid does not restore its state from the ViewState because of the NoPersistence mode)

1. PageLoad

1. NeedDataSource (this is the moment when grid restores its state)

1. ItemCommand (CommandName = "Delete")

1. DeleteCommand

1. NeedDataSource (refresh the data after an item was deleted)

>note Note that in order to make 4 to happen, the recreation of the grid in 3 should be exactly the same as when the grid is data-bound on the previous postback. To ensure that 6 will be fired, you should have set the DataSource of Telerik RadGrid to null/Nothing in 4 or 5
>


Moreover, if you want to rebind the grid explicitly from postback event of an external control when **EnableViewState**is set to **False**, set the **DataSource** property of the control to **null/Nothing** and invoke the **Rebind**() method afterwards:



````C#
	    protected void MyButton_Click(object sender, EventArgs e)
	    {
	        //perform some actions here
	        RadGrid1.DataSource = null;
	
	        //call the Rebind() method after nullifying the data source
	        RadGrid1.Rebind();
	    }
````
````VB.NET
	    Protected Sub MyButton_Click(ByVal sender As Object, ByVal e As EventArgs) Handles MyButton.Click
	        'perform some actions here
	        RadGrid1.DataSource = Nothing
	        'call the Rebind() method after nullifying the data source 
	        RadGrid1.Rebind()
	    End Sub
````

