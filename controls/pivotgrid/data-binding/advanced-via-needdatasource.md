---
title: Advanced via NeedDataSource
page_title: Advanced via NeedDataSource | RadPivotGrid for ASP.NET AJAX Documentation
description: Advanced via NeedDataSource
slug: pivotgrid/data-binding/advanced-via-needdatasource
tags: advanced,via,needdatasource
published: True
position: 1
---

# Advanced via NeedDataSource



## 

The key to the advanced data binding of a **RadPivotGrid** control is handling the**NeedDataSource** event. **RadPivotGrid** fires the **NeedDataSource**event each time it needs to be bound to a data source. If, at the time of the event, the **DataSource** property is not set to a valid data source object, the pivot grid will not behave correctly.

This event fires in the following cases:

* Right after **OnLoad**, Telerik RadTreeList checks the ViewState for stored TreeList-related information. If such information is missing (when the page loads for the first time), the **NeedDataSource** event is fired. This also means that if the**EnableViewState** property of the control has been set to false, the treelist will bind e**ach time the page loads**(not only the first time).

* When a paging operation occurs.

* When a sorting operation occurs.

* After expand/collapse.

* When other operations requiring Rebind occurs.

The advantage of using the **NeedDataSource** event is that you have the flexibility of generating your data source in the code-behind, but are freed from handling the logic of when and how data-binding should take place.It is still your responsibility to properly construct a data source object and assign it to the pivotgrid's **DataSource** property.

>caution  **Important:** You should never call the **Rebind** () method in a **NeedDataSource** event handler.You should never call **DataBind** () as well when	using advanced data-binding through **NeedDataSource** .
>


**RadPivotGrid** does not fire the **NeedDataSource** event unless it is visible(**Visible**=**True**).

In a **NeedDataSource** event handler, you should prepare the data source(list of objects) for RadPivotGrid and assign it to the pivotgrid's **DataSource** property:



````C#
protected void RadPivotGrid1_NeedDataSource(object sender, PivotGridNeedDataSourceEventArgs e)
{
    RadPivotGrid1.DataSource = GetDataTable("SELECT * FROM Transportation");
}

public DataTable GetDataTable(string query)
{
    String ConnString = ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString;
    SqlConnection conn = new SqlConnection(ConnString);
    SqlDataAdapter adapter = new SqlDataAdapter();
    adapter.SelectCommand = new SqlCommand(query, conn);

    DataTable myDataTable = new DataTable();

    conn.Open();
    try
    {
        adapter.Fill(myDataTable);
    }
    finally
    {
        conn.Close();
    }

    return myDataTable;
}
````
````VB.NET
Protected Sub RadPivotGrid1_NeedDataSource(sender As Object, e As PivotGridNeedDataSourceEventArgs)
    RadPivotGrid1.DataSource = GetDataTable("SELECT * FROM Transportation")
End Sub

Public Function GetDataTable(query As String) As DataTable
    Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("TelerikConnectionString").ConnectionString
    Dim conn As New SqlConnection(ConnString)
    Dim adapter As New SqlDataAdapter()
    adapter.SelectCommand = New SqlCommand(query, conn)

    Dim myDataTable As New DataTable()

    conn.Open()
    Try
        adapter.Fill(myDataTable)
    Finally
        conn.Close()
    End Try

    Return myDataTable
End Function
````

