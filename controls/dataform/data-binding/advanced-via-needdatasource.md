---
title: Advanced via NeedDataSource
page_title: Advanced via NeedDataSource | RadDataForm for ASP.NET AJAX 
description: Advanced via NeedDataSource
slug: dataform/data-binding/advanced-via-needdatasource
tags: advanced,via,needdatasource
published: True
position: 1
---

# Advanced via NeedDataSource



## 

The key to the advanced data binding of a **RadDataForm** control is handling the **NeedDataSource** event.**RadDataForm** fires the **NeedDataSource** event each time it needs to be bound to a data source. If, at the timeof the event, the **DataSource** property is not set to a valid data source object, the control will not behave correctly.

This event fires in the following cases:

* Right after **OnLoad**, Telerik RadDataForm checks the viewstate for stored control-related information.If such information is missing (when the page loads for the first time), the **NeedDataSource** event is fired. This alsomeans that if the **EnableViewState** property of the controlhas been set to **false**, the controlwill bind **each time the page** loads (not only the first time).

* Right after **Edit/Update/Delete/Insert** commands finish execution. You can cancel these operations handling the **ItemCommand** event and assigning **false** value to the **Canceled** property of the **e** event argument.

* In some other custom cases - for instance, when the **Rebind()** method is called explicitly.

The event arguments for the **NeedDataSource** event include the **RebindReason** property, which indicatesthe reason why the event is occurring. It's also worth mentioning that **RadDataForm** does not fire the **NeedDataSource** event unless the control is visible(**Visible** = **True**).

>caution You must not use the **DataBind()** method along with **NeedDataSource** event handler. Instead, you mayuse the **Rebind()** method to refresh the control's records, but never for initial binding or changing the **DataSource** of the **RadDataForm** . In addition, the **Rebind()** method should not be called during the **NeedDataSource** event.
>




````C#
protected void RadDataForm1_NeedDataSource(object sender, RadDataFormNeedDataSourceEventArgs e)
{
    String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
    SqlConnection conn = new SqlConnection(ConnString);
    SqlDataAdapter adapter = new SqlDataAdapter();
    adapter.SelectCommand = new SqlCommand("SELECT CustomerID, CompanyName, ContactName, ContactTitle, Address FROM Customers", conn);

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

    RadDataForm1.DataSource = myDataTable;
}
````
````VB
Protected Sub RadDataForm1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.RadDataFormNeedDataSourceEventArgs) Handles RadDataForm1.NeedDataSource
    Dim ConnString As String = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
    Dim conn As SqlConnection = New SqlConnection(ConnString)
    Dim adapter As SqlDataAdapter = New SqlDataAdapter
    adapter.SelectCommand = New SqlCommand("SELECT CustomerID, CompanyName, ContactName, ContactTitle, Address FROM Customers", conn)
    Dim myDataTable As New DataTable
    conn.Open()
    Try
        adapter.Fill(myDataTable)
    Finally
        conn.Close()
    End Try
    RadDataForm1.DataSource = myDataTable
End Sub	
````


The **NeedDataSource** event was introduced for binding convenience and its advantage is that you have the flexibility of generating your data source dynamically in the code-behind, but you are freed from handling the logic of when and how data binding should take place.

Alternatively, you can use various data source controls such as SqlDataSource, ObjectDataSource, XmlDataSource, etc. to populate Telerik **RadDataForm** with data using its **DataSourceID** property. You may check the links below for further details.

# See Also

 * [Overview]({%slug dataform/overview%})

 * [Declarative Data Source]({%slug dataform/data-binding/declarative-data-source%})

 * [Live Demo](http://demos.telerik.com/aspnet-ajax/DataForm/Data-Binding/Server-side-Binding/DefaultCS.aspx)
