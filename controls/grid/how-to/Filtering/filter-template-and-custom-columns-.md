---
title: Filter Template and Custom Columns 
page_title: Filter Template and Custom Columns  | RadGrid for ASP.NET AJAX Documentation
description: Filter Template and Custom Columns 
slug: grid/functionality/filtering/how-to/filter-template-and-custom-columns-
tags: filter,template,and,custom,columns,
published: True
position: 10
---

# Filter Template and Custom Columns 



## 

Filtering is automatically supported for **Template** columns.To allow filtering in template columns, you need only do the following:

* Set the **AllowFilteringByColumn** property of the grid or table view to **True**. This is needed to enable filtering.

* Ensure that the **AllowFiltering** property of the template column is **True** (this is the default value).

* Set the **DataField** property of the template column to the field you want to use for filtering.

````ASP.NET
<telerik:GridTemplateColumn DataField="Country" HeaderText="Country">
    <HeaderStyle Width="30%" />
    <ItemTemplate>
        <img src='Img/<%# Eval("Country") %>.gif' alt="" style="vertical-align: middle; margin-right: 7px;" />
        <%# Eval("Country")%>
    </ItemTemplate>
</telerik:GridTemplateColumn>
````



If you would like to support filtering for GridTemplateColumns programmatically or for your custom columns which extend built-in grid column, you can extend the default **GridColumnName** class (part of the Telerik RadGrid object model) and add a textbox control to it. Thus you will be able to filter the **GridColumnName** values exactly the same way as with other Telerik RadGrid column types.

Here is how this can be done with column which extends GridTemplateColumn:

````ASP.NET
<%@ Register TagPrefix="custom" Namespace="<MyApplicationNamespace>" Assembly="<MyApplicationAssembly>" %>
<telerik:RadGrid ID="RadGrid1" AllowPaging="True" AutoGenerateColumns="False" AllowFilteringByColumn="True"
   runat="server">
   <MasterTableView>
       <Columns>
           <custom:MyCustomFilteringColumn DataField="Country" HeaderText="Country">
               <ItemTemplate><%# Eval("Country") %></ItemTemplate>
           </custom:MyCustomFilteringColumn>            
       </Columns>
   </MasterTableView>
</telerik:RadGrid>
````
````C#
public class MyCustomFilteringColumn : GridTemplateColumn
{
    public string DataField
    {
        get
        {
            object res = this.ViewState["_df"];
            if (res != null)
            {
                return (string)res;
            }

            return String.Empty;
        }
        set
        {
            this.ViewState["_df"] = value;
        }
    }

    protected override void SetupFilterControls(System.Web.UI.WebControls.TableCell cell)
    {
        base.SetupFilterControls(cell);
        cell.Controls.RemoveAt(0);
        cell.Controls.AddAt(0, new TextBox());
    }
    public override GridColumn Clone()
    {
        return base.Clone();
    }

    protected override string GetFilterDataField()
    {
        return this.DataField;
    }

    protected override void SetCurrentFilterValueToControl(TableCell cell)
    {
        base.SetCurrentFilterValueToControl(cell);
        if (this.CurrentFilterValue != "")
        {
            (cell.Controls[0] as TextBox).Text = this.CurrentFilterValue;
        }
    }

    protected override string GetCurrentFilterValueFromControl(TableCell cell)
    {
        return (cell.Controls[0] as TextBox).Text;
    }

    public override bool SupportsFiltering()
    {
        return true;
    }

}
````
````VB
Public Class MyCustomFilteringColumn
    Inherits GridTemplateColumn

    Public Property DataField() As String
        Get
            Dim MyRes As Object = Me.ViewState("_df")
            If (Not MyRes Is Nothing) Then
                Return CType(MyRes, String)
            End If
            Return String.Empty
        End Get
        Set(ByVal Value As String)
            Me.ViewState("_df") = Value
        End Set
    End Property

    Protected Overrides Sub SetupFilterControls(ByVal cell As TableCell)
        MyBase.SetupFilterControls(cell)
        cell.Controls.RemoveAt(0)
        cell.Controls.AddAt(0, New TextBox)
    End Sub

    Public Overrides Function Clone() As GridColumn
        Return MyBase.Clone()
    End Function

    Protected Overrides Function GetFilterDataField() As String
        Return Me.DataField
    End Function

    Protected Overrides Sub SetCurrentFilterValueToControl(ByVal cell As TableCell)
        MyBase.SetCurrentFilterValueToControl(cell)

        If Not Me.CurrentFilterValue Is String.Empty Then
            CType(cell.Controls(0), TextBox).Text = Me.CurrentFilterValue
        End If
    End Sub

    Protected Overrides Function GetCurrentFilterValueFromControl(ByVal cell As TableCell) As String
        Return CType(cell.Controls(0), TextBox).Text
    End Function

    Public Overrides Function SupportsFiltering() As Boolean
        Return True
    End Function
````

