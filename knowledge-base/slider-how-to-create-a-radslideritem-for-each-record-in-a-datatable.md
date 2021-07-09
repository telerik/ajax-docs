---
title: How to create a RadSliderItem for each record in a DataTable
description: How to create a RadSliderItem for each record in a DataTable. Check it now!
type: how-to
page_title: How to create a RadSliderItem for each record in a DataTable
slug: slider-how-to-create-a-radslideritem-for-each-record-in-a-datatable
res_type: kb
---

## HOW-TO  

Create a RadSliderItem for each record in a DataTable.  
   
# DESCRIPTION  

The RadSlider control does not support DataBinding out of the box. However, there are a couple of scenarios when you would want to display the data from a DataTable using a RadSlider with items.  
   
## SOLUTION

First, you have to define a RadSlider that would display items. In order to do this, you only have to set the ItemType property of the control to "Item". Have a look at the sample code fragment below:  
 
````ASP.NET
<telerik:RadSlider ID="RadSlider1" runat="server"  
    ItemType="Item" 
    Width="500px" 
    Height="50px" 
    TrackPosition="BottomRight"> 
</telerik:RadSlider>
````

Now, in order to create a RadSliderItem in the RadSlider for each record in your DataTable, you have to loop trough the records of that DataTable, create an item using the information in the current row and add this item to the Items collection of the RadSlider.  
   

````C#
using System;
using System.Data;
using System.Web.UI;
using Telerik.Web.UI;

public partial class DefaultCS : Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        // Create data that you would like to display, using SliderItems in the RadSlider.
        DataTable dt = new DataTable();

        // Add columns
        dt.Columns.Add("ItemValue");
        dt.Columns.Add("ItemText");

        // Create data for 10 records.
        DataRow dr;
        for (int j = 1; j <= 10; j++)
        {
            dr = dt.NewRow();
            dr["ItemValue"] = String.Format("Value {0}", j);
            dr["ItemText"] = String.Format("Text {0}", j);

            dt.Rows.Add(dr);
        }

        // Create the RadSliderItems, based on the records in the DataTable
        foreach (DataRow row in dt.Rows)
        {
            RadSliderItem item = new RadSliderItem(row["ItemText"].ToString(), row["ItemValue"].ToString());
            RadSlider1.Items.Add(item);
        }
    }
}

````
   

````VB
Imports System
Imports System.Data
Imports System.Web.UI
Imports Telerik.Web.UI

Partial Class DefaultVB
    Inherits Page
   
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        ' Create data that you would like to display, using SliderItems in the RadSlider.
        Dim dt As DataTable = New DataTable()

        ' Add columns
        dt.Columns.Add("ItemValue")
        dt.Columns.Add("ItemText")

        ' Create data for 10 records.
        Dim dr As DataRow
        Dim j As Integer
        For j = 1 To 10 Step j + 1
            dr = dt.NewRow()
            dr("ItemValue") = String.Format("Value {0}", j)
            dr("ItemText") = String.Format("Text {0}", j)

            dt.Rows.Add(dr)
        Next

        ' Create the RadSliderItems, based on the records in the DataTable
        Dim row As DataRow
        For Each row In dt.Rows
            Dim item As RadSliderItem = New RadSliderItem(row("ItemText").ToString(), row("ItemValue").ToString())
            RadSlider1.Items.Add(item)
        Next
    End Sub
End Class

````


   