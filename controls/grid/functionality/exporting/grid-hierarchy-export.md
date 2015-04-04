---
title: Grid Hierarchy Export
page_title: Grid Hierarchy Export | UI for ASP.NET AJAX Documentation
description: Grid Hierarchy Export
slug: grid/functionality/exporting/grid-hierarchy-export
tags: grid,hierarchy,export
published: True
position: 2
---

# Grid Hierarchy Export



This article covers the export feature of hierarchical __RadGrid__ for the different export types. It is important to note that not all format support exporting hierarchical structures. All but the CSV and the Excel BIFF formats support hierarchy.

By default when you set IgnorePaging to true and then export a parent table in hierarchical grid, the expanded items will collapse.

Until Q3 2013, you had to retain the expanded state manually when the control rebinds. Since Q3 2013 version, we introduced a new property named __RetainExpandStateOnRebind__. When you set enable it, the expanded items’ state will persist automatically.

>note The following[code-library](http://www.telerik.com/community/code-library/aspnet-ajax/grid/export-hierarchical-grid.aspx)example demonstrates how to persist the expanded state manually.
>


>note ExcelML format requires that the __HierarchyLoadMode__ property be set to either *Client* or *ServerBind* . When you are using this export format, all items in the hierarchy will expand by default regardless of the state of the __RetainExpandStateOnRebind__ property.
>


The mentioned below code snippet demonstrates a possible approach to persist the expanded state manually.

>tabbedCode

````C#
	    private bool isExport = false;
	
	    protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
	    { 
	        //save the expanded/selected state in the session
	        if (e.CommandName == RadGrid.ExpandCollapseCommandName)
	        {
	            //Is the item about to be expanded or collapsed
	            if (!e.Item.Expanded)
	            {
	                //Save its unique index among all the items in the hierarchy
	                this.ExpandedStates[e.Item.ItemIndexHierarchical] = true;
	            }
	            else //collapsed
	            {
	                this.ExpandedStates.Remove(e.Item.ItemIndexHierarchical);
	                this.ClearExpandedChildren(e.Item.ItemIndexHierarchical);
	            }
	        }
	    }
	
	    private Hashtable _ordersExpandedState;
	
	    //Save/load expanded states Hash from the session
	    //this can also be implemented in the ViewState
	    private Hashtable ExpandedStates
	    {
	        get
	        {
	            if (this._ordersExpandedState == null)
	            {
	                _ordersExpandedState = this.Session["_ordersExpandedState"] as Hashtable;
	                if (_ordersExpandedState == null)
	                {
	                    _ordersExpandedState = new Hashtable();
	                    this.Session["_ordersExpandedState"] = _ordersExpandedState;
	                }
	            }
	
	            return this._ordersExpandedState;
	        }
	    }
	
	    //Clear the state for all expanded children if a parent item is collapsed
	    private void ClearExpandedChildren(string parentHierarchicalIndex)
	    {
	        string[] indexes = new string[this.ExpandedStates.Keys.Count];
	        this.ExpandedStates.Keys.CopyTo(indexes, 0);
	        foreach (string index in indexes)
	        {
	            //all indexes of child items
	            if (index.StartsWith(parentHierarchicalIndex + "_") ||
	                index.StartsWith(parentHierarchicalIndex + ":"))
	            {
	                this.ExpandedStates.Remove(index);
	            }
	        }
	    }
	
````
````VB.NET
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
	        'save the expanded/selected state in the session
	        If e.CommandName = RadGrid.ExpandCollapseCommandName Then
	            'Is the item about to be expanded or collapsed
	            If Not e.Item.Expanded Then
	                'Save its unique index among all the items in the hierarchy
	                Me.ExpandedStates(e.Item.ItemIndexHierarchical) = True
	            Else
	                'collapsed
	                Me.ExpandedStates.Remove(e.Item.ItemIndexHierarchical)
	                Me.ClearExpandedChildren(e.Item.ItemIndexHierarchical)
	            End If
	        End If
	
	    End Sub
	    Private _ordersExpandedState As Hashtable
	
	    'Save/load expanded states Hash from the session
	    'this can also be implemented in the ViewState
	    Private ReadOnly Property ExpandedStates() As Hashtable
	        Get
	            If Me._ordersExpandedState Is Nothing Then
	                _ordersExpandedState = TryCast(Me.Session("_ordersExpandedState"), Hashtable)
	                If _ordersExpandedState Is Nothing Then
	                    _ordersExpandedState = New Hashtable()
	                    Me.Session("_ordersExpandedState") = _ordersExpandedState
	                End If
	            End If
	
	            Return Me._ordersExpandedState
	        End Get
	    End Property
	
	    'Clear the state for all expanded children if a parent item is collapsed
	    Private Sub ClearExpandedChildren(ByVal parentHierarchicalIndex As String)
	        Dim indexes As String() = New String(Me.ExpandedStates.Keys.Count - 1) {}
	        Me.ExpandedStates.Keys.CopyTo(indexes, 0)
	        For Each index As String In indexes
	            'all indexes of child items
	            If index.StartsWith(parentHierarchicalIndex + "_") OrElse index.StartsWith(parentHierarchicalIndex + ":") Then
	                Me.ExpandedStates.Remove(index)
	            End If
	        Next
	    End Sub
	
````
>end

## 
