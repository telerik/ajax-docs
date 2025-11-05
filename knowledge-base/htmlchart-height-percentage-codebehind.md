---
title: Set RadHtmlChart height with percentage in code behind
description: Learn how to create dynamically the RadHtmlChart and set its height in percentage in C# and VB.NET code with the help of Unit.Percentage setting - Telerik UI for ASP.NET AJAX
type: troubleshooting
page_title: Set Chart height from codebehind in percentage
slug: htmlchart-height-percentage-codebehind
position: 
tags: 
ticketid: 1597350
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadHtmlChart for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
See how to create dynamically the RadHtmlChart and set its height in percentage in C# and VB.NET code with the help of [Unit.Percentage method](https://learn.microsoft.com/en-us/dotnet/api/system.web.ui.webcontrols.unit.percentage?view=netframework-4.8).

## Solution
Here is the solution:

````ASPX
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="Default2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        html, body, form {
            height: 100%;
            margin: 0px;
            padding: 0px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager runat="server" />
        <div runat="server" id="divChart" style="height: 100%">
        </div>
    </form>
</body>
</html>
````

````C#
using System;
using System.Data;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

public partial class Default2 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            RadHtmlChart RadHtmlChart1 = new RadHtmlChart();
            RadHtmlChart1.ID = "RadHtmlChart1";
            
            RadHtmlChart1.Height = Unit.Percentage(100);

            RadHtmlChart1.DataSource = GetData();
            RadHtmlChart1.DataBind();



            //Set the datasource of the HtmlChart and databind it
           

            //Create a "Lower Threshold" LineSeries programmatically
            LineSeries lineSeries1 = new LineSeries();
            lineSeries1.Name = "Lower Threshold (Programmatic)";
            lineSeries1.LabelsAppearance.Visible = true;
            lineSeries1.TooltipsAppearance.Color = System.Drawing.Color.White;
            lineSeries1.TooltipsAppearance.DataFormatString = "{0}%";
            lineSeries1.MarkersAppearance.Visible = true;

            //Create a sample SeriesItems for the "Lower Threshold" LineSeries
            for (int i = 1; i <= 12; i++)
            {
                CategorySeriesItem item1 = new CategorySeriesItem();
                item1.Y = 12 + i;
                lineSeries1.SeriesItems.Add(item1);
            }
            RadHtmlChart1.PlotArea.Series.Add(lineSeries1);

            divChart.Controls.Add(RadHtmlChart1);

        }

    }

    protected DataTable GetData()
    {
        DataTable dt = new DataTable();

        dt.Columns.Add("UpperThreshold");
        dt.Columns.Add("DummyData");
        for (int i = 0; i < 12; i++)
        {
            dt.Rows.Add(40, 30);
        }
        return dt;
    }
}
````
````VB
Imports System
Imports System.Data
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports Telerik.Web.UI

Public Partial Class Default2
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
        If Not Page.IsPostBack Then
            Dim RadHtmlChart1 As RadHtmlChart = New RadHtmlChart()
            RadHtmlChart1.ID = "RadHtmlChart1"
            RadHtmlChart1.Height = Unit.Percentage(100)
            RadHtmlChart1.DataSource = GetData()
            RadHtmlChart1.DataBind()
            Dim lineSeries1 As LineSeries = New LineSeries()
            lineSeries1.Name = "Lower Threshold (Programmatic)"
            lineSeries1.LabelsAppearance.Visible = True
            lineSeries1.TooltipsAppearance.Color = System.Drawing.Color.White
            lineSeries1.TooltipsAppearance.DataFormatString = "{0}%"
            lineSeries1.MarkersAppearance.Visible = True

            For i As Integer = 1 To 12
                Dim item1 As CategorySeriesItem = New CategorySeriesItem()
                item1.Y = 12 + i
                lineSeries1.SeriesItems.Add(item1)
            Next

            RadHtmlChart1.PlotArea.Series.Add(lineSeries1)
            divChart.Controls.Add(RadHtmlChart1)
        End If
    End Sub

    Protected Function GetData() As DataTable
        Dim dt As DataTable = New DataTable()
        dt.Columns.Add("UpperThreshold")
        dt.Columns.Add("DummyData")

        For i As Integer = 0 To 12 - 1
            dt.Rows.Add(40, 30)
        Next

        Return dt
    End Function
End Class

````
    
    

     