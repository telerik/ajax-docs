---
title: Move Group of Items
description: Move Group of Items - RadRotator. Check it now!
type: how-to
page_title: Move Group of Items
slug: rotator-move-group-of-items
res_type: kb
---

## HOW-TO  

This article is about how to show multiline RadRotator's items.  
   
## DESCRIPTION  

The RadRotator's items are shown only on a single line (vertical or horizontal) and this is by design. The provided example, however, shows the steps that need to be implement in order to show 4 items placed in 2 lines.  
   
SOLUTION
 The layout of the RadRotator's ItemTemplate is formed using a RadListView control. The datasource set to the RadRotator control is a list of DataTable objects (data are retrieved from a SQL database). The RadListView's databinding is done in the RadRotator's ItemDataBound event:

````C#
protected void RadRotator1_ItemDataBound(object sender, Telerik.Web.UI.RadRotatorEventArgs e)
{
    RadListView listView = e.Item.FindControl("RadListView1") as RadListView;
    listView.DataSource = e.Item.DataItem;
    listView.DataBind();
}
````
````VB
Protected Sub RadRotator1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadRotatorEventArgs) Handles RadRotator1.ItemDataBound
    Dim listView As RadListView = TryCast(e.Item.FindControl("RadListView1"), RadListView)
    listView.DataSource = e.Item.DataItem
    listView.DataBind()
End Sub
````

For convenience, a [**RadBinaryImage**](http://demos.telerik.com/aspnet-ajax/binaryimage/examples/overview/defaultcs.aspx)control is used in order to show the images retrieved from the database (as binary array).  

````ASPX
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .itemTemplate
        {
            width: 450px;
            float: left;
        }
        .fieldName
        {
            width: 100px;
        }
        .image
        {
            float: right;
            width: 100px;
            height: 100px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    </telerik:RadScriptManager>
    <div>
        <telerik:RadRotator ID="RadRotator1" runat="server" ScrollDuration="10000" Height="600px" ItemHeight="600"
            Width="900" ItemWidth="900" OnItemDataBound="RadRotator1_ItemDataBound">
            <ItemTemplate>
                <telerik:RadListView ID="RadListView1" runat="server" ItemPlaceholderID="EmployeesContainer"
                    GroupPlaceholderID="GroupsEmployeesContainer" GroupItemCount="4" Width="900">
                    <LayoutTemplate>
                        <asp:PlaceHolder ID="GroupsEmployeesContainer" runat="server" />
                    </LayoutTemplate>
                    <GroupTemplate>
                        <asp:PlaceHolder ID="EmployeesContainer" runat="server" />
                    </GroupTemplate>
                    <ItemTemplate>
                        <div class="itemTemplate">
                            <fieldset>
                                <legend title="Employees group:">
                                    <%#Eval("CompanyName")%></legend>
                                <div style="float: left; width: 400px">
                                    <div style="float: left; width: 300px;">
                                        <div>
                                            <div>
                                                <span class="fieldName">Name: </span><span class="fieldValue">
                                                    <%#Eval("ContactName")%>
                                                </span>
                                            </div>
                                            <div>
                                                <span class="fieldName">Title: </span><span class="fieldValue">
                                                    <%#Eval("ContactTitle")%></span>
                                            </div>
                                            <div>
                                                <span class="fieldName">City: </span><span class="fieldValue">
                                                    <%#Eval("City")%></span>
                                            </div>
                                            <div>
                                                <span class="fieldName">Country: </span><span class="fieldValue">
                                                    <%#Eval("Country")%></span>
                                            </div>
                                            <div>
                                                <span class="fieldName">Phone: </span><span class="fieldValue">
                                                    <%#Eval("Phone")%></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="image">
                                        <telerik:RadBinaryImage ID="RadBinaryImage1" runat="server" AlternateText="Contact Photo"
                                            ToolTip="Contact Photo" Width="100" Height="100" ResizeMode="Fit" DataValue='<%# Eval("Photo") %>' />
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </ItemTemplate>
                </telerik:RadListView>
            </ItemTemplate>
        </telerik:RadRotator>
    </div>
    </form>
</body>
</html>
````

````C#
using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using Telerik.Web.UI;
using System.IO;

public partial class FourImagesSimultaneously : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        RadRotator1.DataSource = this.GetRotatorDataSource(4);
        RadRotator1.DataBind();
    }

    private List<DataTable> GetRotatorDataSource(int itemsCountPerRotatorItem)
    {
        DataTable rawDataSource = this.GetDataFromServer();
        List<DataTable> rotatorDataSource = new List<DataTable>();

        int rawDataSourcePossition = 0;
        while (rawDataSourcePossition < rawDataSource.Rows.Count)
        {
            int itemCount = 0;
            DataTable tableForAnItem = rawDataSource.Clone();
            while (itemCount < itemsCountPerRotatorItem)
            {
                if (rawDataSourcePossition < rawDataSource.Rows.Count)
                {
                    DataRow row = tableForAnItem.NewRow();
                    row.ItemArray = rawDataSource.Rows[rawDataSourcePossition].ItemArray;
                    tableForAnItem.Rows.Add(row);
                }
                else
                {
                    DataRow row = tableForAnItem.NewRow();
                    row["Photo"] = File.ReadAllBytes(Server.MapPath("~/Img/EmtpyItemImage.jpg"));
                    tableForAnItem.Rows.Add(row);// Add an empty datatable object
                }

                itemCount++;
                rawDataSourcePossition++;
            }
            rotatorDataSource.Add(tableForAnItem);
        }

        return rotatorDataSource;
    }

    private DataTable GetDataFromServer()
    {
        string selectConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString;
        string selectCommand = "SELECT [CustomerID], [CompanyName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [Fax], [Photo] FROM [CustomerPhotos]";

        DataTable dataSourceTable = new DataTable();
        SqlDataAdapter adapter = new SqlDataAdapter(selectCommand, selectConnectionString);
        adapter.Fill(dataSourceTable);

        return dataSourceTable;
    }

    protected void RadRotator1_ItemDataBound(object sender, Telerik.Web.UI.RadRotatorEventArgs e)
    {
        RadListView listView = e.Item.FindControl("RadListView1") as RadListView;
        listView.DataSource = e.Item.DataItem;
        listView.DataBind();
    }
}
````

   
 


  