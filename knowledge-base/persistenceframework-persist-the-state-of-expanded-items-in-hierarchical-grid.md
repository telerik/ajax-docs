---
title: Persist the state of expanded items in Hierarchical Grid
description: Persisting the state of expanded items in Hierarchical Grid using the Telerik WebForms PersistenceFramework by Storing those as Custom Settings.
type: how-to
page_title: Persist the state of expanded items in Hierarchical Grid | RadPersistenceFramework
slug: persistenceframework-persist-the-state-of-expanded-items-in-hierarchical-grid
tags: persistenceframework,persist,grid,detailtables
ticketid: 1579342,1630243
res_type: kb
category: knowledge-base
---

## Environment

| Product      | RadPersistenceFramework for ASP.NET AJAX |
|--------------|-----------------------------------------|

## Description

I want to persist the layout of a RadGrid with detail tables using the RadPersistenceManager. The layout is being persisted for the main grid, but not for the hierarchy/detail tables.

## Solution

The **RadPersistenceFramework** does not support persistence out of the box for hierarchy and detail tables (see [Supported Controls]({%slug persistenceframework/getting-started/supported-controls%})). However, you can manually save and restore the state of these tables by using [Custom Settings]({%slug persistenceframework/functionality/store-custom-settings%}).

Here's an example of how to save and restore the expanded state of rows for all tables in the Grid Hierarchy:

**1.** Add RadPersistenceManager control to your page with the following settings:
- Specify a key for the `StorageProviderKey` property
- Attach the [`OnSaveSettings`]({%slug persistenceframework/server-side-programming/events/savesettings%}) event.
- Attach the [`OnLoadSettings`]({%slug persistenceframework/server-side-programming/events/loadsettings%}) event.
- Add the Grid to the PersistenceSettings.

````ASP.NET
<telerik:RadPersistenceManager ID="RadPersistenceManager1" runat="server" 
    StorageProviderKey="MyStorageKey"
    OnSaveSettings="RadPersistenceManager1_SaveSettings" 
    OnLoadSettings="RadPersistenceManager1_LoadSettings">
    <PersistenceSettings>
        <telerik:PersistenceSetting ControlID="RadGrid1" />
    </PersistenceSettings>
</telerik:RadPersistenceManager>
````

**2.** Create a method that will collect the index of expanded items in the Hierarchical Grid recursively and saves those in the Grid's ControlState as Custom Settings.

````C#
private void SaveExpandedStateRecursive(GridTableView tableView, RadControlState customSettings)
{
    List<int> expandedIndexes = new List<int>();

    foreach (GridDataItem item in tableView.Items)
    {
        if (item.Expanded)
        {
            expandedIndexes.Add(item.ItemIndex);

            GridNestedViewItem nestedViewItem = item.ChildItem;

            foreach (GridTableView detailTable in nestedViewItem.NestedTableViews)
            {
                SaveExpandedStateRecursive(detailTable, customSettings);
            }
        }
    }

    string settingsName = string.Format("{0}_{1}_ExpandedItems", tableView.Name, tableView.ID);

    customSettings.ControlSettings.Add(new ControlSetting() { Name = settingsName, Value = expandedIndexes });
}
````
````VB
Private Sub SaveExpandedStateRecursive(ByVal tableView As GridTableView, ByVal customSettings As RadControlState)
    Dim expandedIndexes As List(Of Integer) = New List(Of Integer)()

    For Each item As GridDataItem In tableView.Items

        If item.Expanded Then
            expandedIndexes.Add(item.ItemIndex)
            Dim nestedViewItem As GridNestedViewItem = item.ChildItem

            For Each detailTable As GridTableView In nestedViewItem.NestedTableViews
                SaveExpandedStateRecursive(detailTable, customSettings)
            Next
        End If
    Next

    Dim settingsName As String = String.Format("{0}_{1}_ExpandedItems", tableView.Name, tableView.ID)

    customSettings.ControlSettings.Add(New ControlSetting() With {
        .Name = settingsName,
        .Value = expandedIndexes
    })
End Sub
````

**3.** Create a method that will restore the expanded state from the Custom Settings for all items recursively in the Hierarchical Grid.

````C#
private void RestoreExpandedStateRecursive(GridTableView tableView, RadControlState customSettings)
{
    string settingsName = string.Format("{0}_{1}_ExpandedItems", tableView.Name, tableView.ID);

    ControlSetting tableSettings = customSettings.ControlSettings.Where(s => s.Name == settingsName).FirstOrDefault();
    List<int> expandedIndexes = (List<int>) tableSettings.Value;

    foreach (int itemIndex in expandedIndexes)
    {
        GridDataItem itemToExpand = tableView.Items[itemIndex];

        itemToExpand.Expanded = true;

        GridNestedViewItem nestedViewItem = itemToExpand.ChildItem;

        if (nestedViewItem != null)
        {
            foreach (GridTableView detailTable in nestedViewItem.NestedTableViews)
            {
                RestoreExpandedStateRecursive(detailTable, customSettings);
            }
        }
    }
}
````
````VB
Private Sub RestoreExpandedStateRecursive(ByVal tableView As GridTableView, ByVal customSettings As RadControlState)
    Dim settingsName As String = String.Format("{0}_{1}_ExpandedItems", tableView.Name, tableView.ID)
    Dim tableSettings As ControlSetting = customSettings.ControlSettings.Where(Function(s) s.Name = settingsName).FirstOrDefault()
    Dim expandedIndexes As List(Of Integer) = CType(tableSettings.Value, List(Of Integer))

    For Each itemIndex As Integer In expandedIndexes
        Dim itemToExpand As GridDataItem = tableView.Items(itemIndex)
        itemToExpand.Expanded = True
        Dim nestedViewItem As GridNestedViewItem = itemToExpand.ChildItem

        If nestedViewItem IsNot Nothing Then

            For Each detailTable As GridTableView In nestedViewItem.NestedTableViews
                RestoreExpandedStateRecursive(detailTable, customSettings)
            Next
        End If
    Next
End Sub
````

**4.** Implement the necessary code to handle the save and restore events of the Persistence Framework.

````C#
protected void RadPersistenceManager1_SaveSettings(object sender, PersistenceManagerSaveAllStateEventArgs e)
{
    RadControlState gridSetting = e.Settings.FindByUniqueId(RadGrid1.UniqueID);

    if (gridSetting != null)
    {
        SaveExpandedStateRecursive(RadGrid1.MasterTableView, gridSetting);
    }
}

protected void RadPersistenceManager1_LoadSettings(object sender, PersistenceManagerLoadAllStateEventArgs e)
{
    RadControlState gridSetting = e.Settings.FindByUniqueId(RadGrid1.UniqueID);

    if (gridSetting != null)
    {
        RestoreExpandedStateRecursive(RadGrid1.MasterTableView, gridSetting);
    }
}
````
````VB
Protected Sub RadPersistenceManager1_SaveSettings(ByVal sender As Object, ByVal e As PersistenceManagerSaveAllStateEventArgs)
    Dim gridSetting As RadControlState = e.Settings.FindByUniqueId(RadGrid1.UniqueID)

    If gridSetting IsNot Nothing Then
        SaveExpandedStateRecursive(RadGrid1.MasterTableView, gridSetting)
    End If
End Sub

Protected Sub RadPersistenceManager1_LoadSettings(ByVal sender As Object, ByVal e As PersistenceManagerLoadAllStateEventArgs)
    Dim gridSetting As RadControlState = e.Settings.FindByUniqueId(RadGrid1.UniqueID)

    If gridSetting IsNot Nothing Then
        RestoreExpandedStateRecursive(RadGrid1.MasterTableView, gridSetting)
    End If
End Sub
````

**5.** Finally, to save and restore those settings call the `SaveState()` and `LoadState()` methods of the **PersistenceManager** respectively.

````C#
protected void btnSave_Click(object sender, EventArgs e)
{
    RadPersistenceManager1.SaveState();
}

protected void btnRestore_Click(object sender, EventArgs e)
{
    RadPersistenceManager1.LoadState();
    RadGrid1.Rebind();
}
````
````VB
Protected Sub btnSave_Click(ByVal sender As Object, ByVal e As EventArgs)
    RadPersistenceManager1.SaveState()
End Sub

Protected Sub btnRestore_Click(ByVal sender As Object, ByVal e As EventArgs)
    RadPersistenceManager1.LoadState()
    RadGrid1.Rebind()
End Sub
````

## Notes

- Using this approach you can implement a feature that could store/restore any settings of the DetailTables and not only the expanded items.
- To make the save and restore state automatic, you can call the `SaveState()` and `LoadState()` methods in any event that triggers automatically. For instance, the [Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events) trigger every time the page loads, even on PostBacks.

 