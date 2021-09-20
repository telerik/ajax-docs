---
title: Filter Template
page_title: Filter Template - RadGrid
description: Check our Web Forms article about Filter Template.
slug: grid/functionality/filtering/filter-template
tags: filter,template
published: True
position: 3
---

# Filter Template

Together with its general filtering capabilities, RadGrid offers a very interesting and powerful addition to the grid control that allows you to override create your own Filter Controls and override the built-in ones. This is the **Filter Template**, which can be added to a **GridBoundColumn** or **GridTemplateColumn**

## Usage

To create your own Template for filtering, define the **FilterTemplate** element in the **GridBoundColumn** or **GridTemplateColumn** as follows:


````ASP.NET
<telerik:GridBoundColumn DataField="CompanyName" HeaderText="TemplateCompanyName">
  <FilterTemplate>
    <%-- Add your own controls over here --%>
  </FilterTemplate>
</telerik:GridBoundColumn>

<telerik:GridTemplateColumn DataField="CompanyName" HeaderText="TemplateCompanyName">
  <FilterTemplate>
    <%-- Add your own controls over here --%>
  </FilterTemplate>
</telerik:GridTemplateColumn>
````

You can nest any control in the filter template, which allows for a great deal of customization. Once you have setup the layout of the filter template, the next part of the logic would be to handle the filtering for the grid. Below are two possible approaches which demonstrate how to do this. 

The first approach utilizes an EntityDataSource, available under the 3.5 version of the ASP.NET framework. We can use a RadCombobox to select the available items on which to filter, and nest it in the filter template of a template column, which would look something like:

````ASP.NET(C#)
<telerik:GridTemplateColumn DataField="Country" HeaderText="Country" UniqueName="Country">
    <FilterTemplate>
        <telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" DataSourceID="EntityDataSource2" DataTextField="Country"
            DataValueField="Country" Height="200px" AppendDataBoundItems="true"
            SelectedValue='<%# ((GridItem)Container).OwnerTableView.GetColumn("Country").CurrentFilterValue %>'
            runat="server" OnClientSelectedIndexChanged="SelectedIndexChanged">
            <Items>
                <telerik:RadComboBoxItem />
            </Items>
        </telerik:RadComboBox>
        <telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
            <script type="text/javascript">
                function SelectedIndexChanged(sender, args) {
                    var tableView = $find("<%# ((GridItem)Container).OwnerTableView.ClientID %>");
                    tableView.filter("Country", args.get_item().get_value(), "EqualTo");
                }
            </script>
        </telerik:RadScriptBlock>
    </FilterTemplate>
    <ItemTemplate>
        <%# Eval("Country") %>
    </ItemTemplate>
</telerik:GridTemplateColumn>
````
````ASP.NET(VB)
<telerik:GridTemplateColumn DataField="Country" HeaderText="Country" UniqueName="Country">
    <FilterTemplate>
        <telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" DataSourceID="EntityDataSource2"
            DataTextField="Country"
            DataValueField="Country" Height="200px" AppendDataBoundItems="true"
            SelectedValue='<%# TryCast(Container, GridItem).OwnerTableView.GetColumn("Country").CurrentFilterValue %>'
            runat="server" OnClientSelectedIndexChanged="SelectedIndexChanged">
            <Items>
                <telerik:RadComboBoxItem />
            </Items>
        </telerik:RadComboBox>
        <telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
            <script type="text/javascript">
                function SelectedIndexChanged(sender, args) {
                    var tableView = $find("<%# TryCast(Container, GridItem).OwnerTableView.ClientID %>");
                    tableView.filter("Country", args.get_item().get_value(), "EqualTo");
                }
            </script>
        </telerik:RadScriptBlock>
    </FilterTemplate>
    <ItemTemplate>
        <%# Eval("Country")%>
    </ItemTemplate>
</telerik:GridTemplateColumn>
````

As shown in the code, the RadComboBox control is bound to an EntityDataSource. When the user selects an item in the combo, the SelectedIndexChanged client side handler is raised. There, we get a reference to the masterTable client side object, and use its filter method, which in par with the EntityDataSource provides an almost codeless approach. The EntityDataSource for the combo object is declared as shown below:

````ASP.NET
<asp:EntityDataSource ID="EntityDataSource2" runat="server" ConnectionString="name=NorthwindEntities"
  DefaultContainerName="NorthwindEntities" EntitySetName="Customers" Select="distinct it.[Country]">
</asp:EntityDataSource>
````

The complete example is available as part of the following [New feature: ASP.NET AJAX grid filter template](https://www.telerik.com/blogs/new-feature-asp-net-ajax-grid-filter-template) Blog post. 

You may also review the online demo demonstrating this feature at [Filter Templates](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/filtering/filter-templates/defaultcs.aspx).


Another approach, which is possible with the filter template, for example if you are not using an EntityDatasource, is to use server side code to set the filter expression for the grid control manually. Let us assume that we have a GridBoundColumn, bound to a data source field called "CategoryName". Instead of using the default filter menu, we want to utilize a RadComboBox which should enable the end user to select an item from the combo, and have the grid display the relevant items. In this case, the aspx declaration of the column would look something like:

````ASP.NET
<telerik:GridBoundColumn DataField="CategoryName" HeaderText="CategoryName" SortExpression="CategoryName"
    UniqueName="CategoryName">
    <FilterTemplate>
        <telerik:RadComboBox RenderMode="Lightweight" runat="server" ID="FilterCombo" DataSourceID="AccessDataSource1"
            DataValueField="CategoryName" DataTextField="CategoryName" AutoPostBack="true"
            OnSelectedIndexChanged="FilterCombo_SelectedIndexChanged">
        </telerik:RadComboBox>
    </FilterTemplate>
</telerik:GridBoundColumn>
````

From the server side perspective, once an item in the combo is selected, and the SelectedIndexChanged event is raised, we can get the new value, and set the filter expression of the control accordingly. This will look like this:


````C#
protected void FilterCombo_SelectedIndexChanged(object o, RadComboBoxSelectedIndexChangedEventArgs e)
{
    string filterExpression;
    filterExpression = $"(Convert.ToString(it[\"CategoryName\"]) = \"{e.Value}\")";
    RadGrid1.MasterTableView.FilterExpression = filterExpression;
    RadGrid1.MasterTableView.Rebind();
}
````
````VB	
Protected Sub FilterCombo_SelectedIndexChanged(ByVal o As Object, ByVal e As RadComboBoxSelectedIndexChangedEventArgs)
    Dim filterExpression As String
    filterExpression = "([CategoryName] = '" & e.Value & "')"
    RadGrid1.MasterTableView.FilterExpression = filterExpression
    RadGrid1.MasterTableView.Rebind()
End Sub
````

>note With the .NET 3.5 build of RadGrid for ASP.NET AJAX and LINQ filter expressions enabled (`EnableLinqExpressions="true"`), the filter expressions set for the grid either internally by its filtering mechanism or manually in code *should conform to the LINQ expression syntax* instead of the old *T-SQL syntax*. Only thus they will be evaluated properly by the control. To use the old SQL queries syntax, you will need to set **EnableLinqExpressions** to **false**.

## FilterTemplate for Data Specific Columns

In case of data specific columns such as **GridNumericColumn**, **GridDateTimeColumn**, the Grid's internal designed to search for data specific controls upon filtering. For example in case of a **GridNumericColumn** the Grid is looking for a `RadNumericTextBox` in the filter item, or for `RadDatePicker`/`RadDateTimePicker` control in case of a **GridDateTimeColumn**.

If you use Filter Templates for these columns, make sure to add the respective Filter Control.

**GridDateTimeColumn** requires one of the Following Controls in the Filtering item:

- `RadDatePicker`
- `RadDateTimePicker`

````ASP.NET
<telerik:GridDateTimeColumn>
    <FilterTemplate>
        <telerik:RadDatePicker ID="RadDatePicker1" runat="server"></telerik:RadDatePicker>
    </FilterTemplate>
</telerik:GridDateTimeColumn>
````

**GridNumericColumn** requires one of the Following Controls in the Filtering item:

- `RadNumericTextBox`

````ASP.NET
<telerik:GridNumericColumn>
    <FilterTemplate>
        <telerik:RadNumericTextBox ID="RadNumericTextBox1" runat="server"></telerik:RadNumericTextBox>
    </FilterTemplate>
</telerik:GridNumericColumn>
````
 
