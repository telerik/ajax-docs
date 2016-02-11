---
title: Export Header Areas
page_title: Export Header Areas | RadPivotGrid for ASP.NET AJAX Documentation
description: Export Header Areas
slug: pivotgrid/how-to/export-header-areas
tags: export,header,areas
published: True
---

# Export Header Areas

The example below demonstrates how to add the **Data**, **Row** and **Column** header areas in the Excel document. The solution is to add a new row at the beginning of the document and populate it with the appropriate field names. You can access the spreadsheet on *PivotGridInfrastructureExporting* event handler and use **ShiftRowsDown** to insert a row at the beginning of the document.

````C#
protected void RadPivotGrid1_PivotGridInfrastructureExporting(object sender, PivotGridInfrastructureExportingEventArgs e)
{
    e.ExportStructure.Tables[0].ShiftRowsDown(1, 1);

    foreach (var field in RadPivotGrid1.Fields)
    {
        if (!field.IsHidden)
        {
            switch (field.FieldType)
            {
                case "PivotGridRowField":
                    e.ExportStructure.Tables[0].Cells[1, 2].Value += field.DataField + " ";
                    break;
                case "PivotGridColumnField":
                    e.ExportStructure.Tables[0].Cells[2, 1].Value += field.DataField + " ";
                    break;
                case "PivotGridAggregateField":
                    e.ExportStructure.Tables[0].Cells[1, 1].Value += field.DataField + " ";
                    break;
                default:
                    break;

            }
        }
    }
}
````
````VB.NET
Protected Sub RadPivotGrid1_PivotGridInfrastructureExporting(sender As Object, e As PivotGridInfrastructureExportingEventArgs)
	e.ExportStructure.Tables(0).ShiftRowsDown(1, 1)

	For Each field As var In RadPivotGrid1.Fields
		If Not field.IsHidden Then
			Select Case field.FieldType
				Case "PivotGridRowField"
					e.ExportStructure.Tables(0).Cells(1, 2).Value += field.DataField + " "
					Exit Select
				Case "PivotGridColumnField"
					e.ExportStructure.Tables(0).Cells(2, 1).Value += field.DataField + " "
					Exit Select
				Case "PivotGridAggregateField"
					e.ExportStructure.Tables(0).Cells(1, 1).Value += field.DataField + " "
					Exit Select
				Case Else
					Exit Select

			End Select
		End If
	Next
End Sub
```` 

