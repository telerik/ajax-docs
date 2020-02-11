---
title: Declarative Definition
page_title: Declarative Definition | RadGrid for ASP.NET AJAX Documentation
description: Declarative Definition
slug: grid/create-radgrid/declarative-definition
previous_url: controls/grid/defining-structure/declarative-definition
tags: declarative,definition
published: True
position: 2
---

# Declarative Definition



## 

When defining **RadGrid** declaratively, the structure of the objects in the ASPX form mirrors the structure of the tables in the **RadGrid** control. Inside the **RadGrid** declaration, the [MasterTableView declaration]({%slug grid/structure/radgrid-and-mastertableview-difference%}) is nested. This corresponds to a **GridTableView** object for the top-level table in the grid. If the grid has a hierarchical structure, a **DetailTables** node is added to hold the detail tables for any table view that has children. Inside the **DetailTables** node, add the declarations for the **GridTableView** objects that represent each detail table.

The following example shows the declaration of a three-tier hierarchical grid:


#### Scenario - RadGrid Hierarchy with 3 levels

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" Skin="Bootstrap" RenderMode="Lightweight"
    OnDetailTableDataBind="RadGrid1_DetailTableDataBind"
    OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView Name="Customers" DataKeyNames="CustomerID" Caption="Customers Table">
        <DetailTables>
            <telerik:GridTableView Name="Orders" DataKeyNames="OrderID" Caption="Orders Table">
                <DetailTables>
                    <telerik:GridTableView Name="OrderDetails" DataKeyNames="ProductID" Caption="Order Details Table">
                    </telerik:GridTableView>
                </DetailTables>
            </telerik:GridTableView>
        </DetailTables>
    </MasterTableView>
</telerik:RadGrid>
````

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    if (!e.IsFromDetailTable)
        (sender as RadGrid).DataSource = Enumerable.Range(1, 3).Select(x => new DbRecord()
        {
            ID = x,
            Description = string.Format("Table {0}, Item {1}", (sender as RadGrid).MasterTableView.Name, x)
        });
}
protected void RadGrid1_DetailTableDataBind(object sender, GridDetailTableDataBindEventArgs e)
{
    e.DetailTableView.DataSource = Enumerable.Range(1, 3).Select(x => new DbRecord()
    {
        ID = x,
        Description = string.Format("Table {0}, Item {1}", e.DetailTableView.Name, x)
    });
}
public class DbRecord
{
    public int ID { get; set; }
    public string Description { get; set; }
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(ByVal sender As Object, ByVal e As GridNeedDataSourceEventArgs)
    If Not e.IsFromDetailTable Then (TryCast(sender, RadGrid)).DataSource = Enumerable.Range(1, 3).[Select](Function(x) New DbRecord() With {
        Key .ID = x,
        Key .Description = String.Format("Table {0}, Item {1}", (TryCast(sender, RadGrid)).MasterTableView.Name, x)
    })
End Sub

Protected Sub RadGrid1_DetailTableDataBind(ByVal sender As Object, ByVal e As GridDetailTableDataBindEventArgs)
    e.DetailTableView.DataSource = Enumerable.Range(1, 3).[Select](Function(x) New DbRecord() With {
        Key .ID = x,
        Key .Description = String.Format("Table {0}, Item {1}", e.DetailTableView.Name, x)
    })
End Sub

Public Class DbRecord
    Public Property ID As Integer
    Public Property Description As String
End Class
````



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" DataSourceID="AccessDataSource1">
  <MasterTableView DataKeyNames="CustomerID" DataSourceID="AccessDataSource1">
    <DetailTables>
      <telerik:GridTableView runat="server" DataKeyNames="OrderID" DataSourceID="AccessDataSource2">
        <ParentTableRelation>
          <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
        </ParentTableRelation>
        <DetailTables>
          <telerik:GridTableView runat="server" DataSourceID="AccessDataSource3">
            <ParentTableRelation>
              <telerik:GridRelationFields DetailKeyField="OrderID" MasterKeyField="OrderID" />
            </ParentTableRelation>
          </telerik:GridTableView>
        </DetailTables>
      </telerik:GridTableView>
    </DetailTables>
  </MasterTableView></telerik:RadGrid>
<asp:AccessDataSource ID="AccessDataSource1" runat="server" DataFile="~/App_Data/Nwind.mdb"
  SelectCommand="SELECT * FROM [Customers]"></asp:AccessDataSource>
<asp:AccessDataSource ID="AccessDataSource2" runat="server" DataFile="~/App_Data/Nwind.mdb"
  SelectCommand="SELECT * FROM [Orders] WHERE ([CustomerID] = ?)">
  <SelectParameters>
    <asp:Parameter Name="CustomerID" Type="String" />
  </SelectParameters>
</asp:AccessDataSource>
<asp:AccessDataSource ID="AccessDataSource3" runat="server" DataFile="~/App_Data/Nwind.mdb"
  SelectCommand="SELECT * FROM [Order Details] WHERE ([OrderID] = ?)">
  <SelectParameters>
    <asp:Parameter Name="OrderID" Type="Int32" />
  </SelectParameters>
</asp:AccessDataSource>
````


