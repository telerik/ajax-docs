---
title: Population/Data Editing with XmlDataSource Control
page_title: Population/Data Editing with XmlDataSource Control | RadGrid for ASP.NET AJAX Documentation
description: Population/Data Editing with XmlDataSource Control
slug: grid/data-binding/understanding-data-binding/server-side-binding/various-data-sources/population-data-editing-with-xmldatasource-control
tags: population/data,editing,with,xmldatasource,control
published: True
position: 5
previous_url: controls/grid/data-binding/understanding-data-binding/server-side-binding/various-data-sources/population/data-editing-with-xmldatasource-control
---

# Population/Data Editing with XmlDataSource Control



## 

**RadGrid** can use the **XmlDataSource** control to generate its content from **XML** and perform data editing operations. Note that [automatic update, insert, and delete operations]({%slug grid/data-editing/automatic-datasource-operations%}), which work with other data source controls such as **AccessDataSource**, **SqlDataSource**, and **ObjectDataSource**, do not work when using **XmlDataSource**. If you want to enable editing, you must write custom code to modify data in the XML source file.

The following restrictions apply to editing XML data when using **XmlDataSource** control:

* The XML data must be loaded from an XML file specified with the **DataFile** property of the **XmlDataSource** control, and not from an xml string specified in the **Data** property.

* No XSLT transformation can be specified in the **Transform** or **TransformFile** properties of the **XmlDataSource** control.

* The **Save** method does not handle concurrent save operations on unique requests. If more than one user is editing an XML file using the **XmlDataSource** control, there is no guarantee that all users are operating with the same data and that one user will not overwrite changes from another user. It is also possible for a save operation to fail because another user is writing to the XML file and has an exclusive lock on the file.



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" Skin="Web20" Width="95%" DataSourceID="XmlDataSource1"
  OnInsertCommand="RadGrid1_InsertCommand" OnUpdateCommand="RadGrid1_UpdateCommand"
  OnDeleteCommand="RadGrid1_DeleteCommand">
  <MasterTableView AutoGenerateColumns="false" DataKeyNames="CustomerID" CommandItemDisplay="Top">
    <Columns>
      <telerik:GridEditCommandColumn />
      <telerik:GridBoundColumn UniqueName="CompanyName" DataField="CompanyName" HeaderText="CompanyName">
      </telerik:GridBoundColumn>
      <telerik:GridBoundColumn UniqueName="ContactName" DataField="ContactName" HeaderText="ContactName">
      </telerik:GridBoundColumn>
      <telerik:GridButtonColumn CommandName="Delete" Text="Delete" UniqueName="DeleteColumn">
      </telerik:GridButtonColumn>
    </Columns>
  </MasterTableView></telerik:RadGrid>
<asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/App_Data/Xml/XmlDataSourceExampleTemp.xml">
</asp:XmlDataSource>
````
````C#	
protected void RadGrid1_UpdateCommand(object source, GridCommandEventArgs e)
{
    GridEditFormItem gridEditFormItem = (GridEditFormItem)e.Item;
    Hashtable ht = new Hashtable();
    gridEditFormItem.ExtractValues(ht);
    String customerID = e.Item.OwnerTableView.DataKeyValues[e.Item.ItemIndex]["CustomerID"].ToString();
    XmlNode node = XmlDataSource1.GetXmlDocument().SelectSingleNode(String.Format("Customers/Customer[@CustomerID='{0}']", customerID));
    node.Attributes["CompanyName"].Value = ConvertNullToEmpty(ht["CompanyName"]);
    node.Attributes["ContactName"].Value = ConvertNullToEmpty(ht["ContactName"]);
    try
    {
        XmlDataSource1.Save();
    }
    catch (Exception ex)
    {
        lblMsg.Text = ex.Message;
    }
}
protected void RadGrid1_InsertCommand(object source, GridCommandEventArgs e)
{
    GridEditFormItem gridEditFormItem = (GridEditFormItem)e.Item;
    Hashtable ht = new Hashtable();
    gridEditFormItem.ExtractValues(ht);
    int maxCustomerId = 0;
    foreach (XmlNode selectedNode in XmlDataSource1.GetXmlDocument().SelectNodes("Customers/Customer"))
    {
        int customerId = int.Parse("0" + selectedNode.Attributes["CustomerID"].Value);
        if (customerId > maxCustomerId)
            maxCustomerId = customerId;
    }
    ht.Add("CustomerID", maxCustomerId + 1);
    XmlNode node = XmlDataSource1.GetXmlDocument().CreateElement("Customer");
    foreach (DictionaryEntry entry in ht)
    {
        XmlAttribute attribute = XmlDataSource1.GetXmlDocument().CreateAttribute(entry.Key.ToString());
        attribute.Value = ConvertNullToEmpty(entry.Value);
        node.Attributes.Append(attribute);
    }
    XmlDataSource1.GetXmlDocument().SelectSingleNode("Customers").AppendChild(node);
    try
    {
        XmlDataSource1.Save();
    }
    catch (Exception ex)
    {
        lblMsg.Text = ex.Message;
    }
}
protected void RadGrid1_DeleteCommand(object source, GridCommandEventArgs e)
{
    GridDataItem gridDataItem = (GridDataItem)e.Item;
    Hashtable ht = new Hashtable();
    gridDataItem.ExtractValues(ht);
    String customerID = e.Item.OwnerTableView.DataKeyValues[e.Item.ItemIndex]["CustomerID"].ToString();
    XmlNode node = XmlDataSource1.GetXmlDocument().SelectSingleNode(String.Format("Customers/Customer[@CustomerID='{0}']", customerID));
    XmlNode parent = node.ParentNode;
    parent.RemoveChild(node);
    try
    {
        XmlDataSource1.Save();
    }
    catch (Exception ex)
    {
        lblMsg.Text = ex.Message;
    }
}
private String ConvertNullToEmpty(Object obj)
{
    if (obj == null)
    {
        return String.Empty;
    }
    else
    {
        return obj.ToString();
    }
}

````
````VB
Protected Sub RadGrid1_InsertCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.InsertCommand
    Dim gridEditFormItem As GridEditFormItem
    gridEditFormItem = e.Item
    Dim ht As Hashtable = New Hashtable()
    gridEditFormItem.ExtractValues(ht)
    Dim maxCustomerId As Integer = 0
    For Each selectedNode As XmlNode In _
      XmlDataSource1.GetXmlDocument().SelectNodes("Customers/Customer")
        Dim customerId As Integer = _
          Integer.Parse("0" + selectedNode.Attributes("CustomerID").Value)
        If customerId > maxCustomerId Then
            maxCustomerId = customerId
        End If
    Next
    ht.Add("CustomerID", maxCustomerId + 1)
    Dim node As XmlNode
    node = XmlDataSource1.GetXmlDocument().CreateElement("Customer")
    Dim entry As DictionaryEntry
    For Each entry In ht
        Dim attribute As XmlAttribute
        attribute = XmlDataSource1.GetXmlDocument().CreateAttribute(entry.Key.ToString())
        attribute.Value = ConvertNullToEmpty(entry.Value)
        node.Attributes.Append(attribute)
    Next entry
    XmlDataSource1.GetXmlDocument().SelectSingleNode("Customers").AppendChild(node)
    Try
        XmlDataSource1.Save()
    Catch ex As Exception
        lblMsg.Text = ex.Message
    End Try
End Sub
Protected Sub RadGrid1_UpdateCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.UpdateCommand
    Dim gridEditFormItem As GridEditFormItem
    gridEditFormItem = e.Item
    Dim ht As Hashtable
    ht = New Hashtable()
    gridEditFormItem.ExtractValues(ht)
    Dim customerID As String
    customerID = _
      e.Item.OwnerTableView.DataKeyValues(e.Item.ItemIndex)("CustomerID").ToString()
    Dim node As XmlNode
    node = XmlDataSource1.GetXmlDocument().SelectSingleNode(String.Format("Customers/Customer[@CustomerID='{0}']", customerID))
    node.Attributes("CompanyName").Value = ConvertNullToEmpty(ht("CompanyName"))
    node.Attributes("ContactName").Value = ConvertNullToEmpty(ht("ContactName"))
    Try
        XmlDataSource1.Save()
    Catch ex As Exception
        lblMsg.Text = ex.Message
    End Try
End Sub
Protected Sub RadGrid1_DeleteCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.DeleteCommand
    Dim gridDataItem As GridDataItem
    gridDataItem = e.Item
    Dim ht As Hashtable
    ht = New Hashtable()
    gridDataItem.ExtractValues(ht)
    Dim customerID As String
    customerID = e.Item.OwnerTableView.DataKeyValues(e.Item.ItemIndex)("CustomerID").ToString()
    Dim node As XmlNode
    node = XmlDataSource1.GetXmlDocument().SelectSingleNode(String.Format("Customers/Customer[@CustomerID='{0}']", customerID))
    Dim parent As XmlNode
    parent = node.ParentNode
    parent.RemoveChild(node)
    Try
        XmlDataSource1.Save()
    Catch ex As Exception
        lblMsg.Text = ex.Message
    End Try
End Sub
Private Function ConvertNullToEmpty(ByVal obj As Object) As String
    If (obj Is Nothing) Then
        Return String.Empty
    Else
        Return obj.ToString()
    End If
End Function
````


For a live example of a **RadGrid** that supports editing when bound to **XmlDataSource**, see [Editing XML using XmlDataSource](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/XmlDataSource/DefaultCS.aspx).
