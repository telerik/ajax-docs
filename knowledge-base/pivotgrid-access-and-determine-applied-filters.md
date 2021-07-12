---
title: Access and determine applied filters
description: Access and determine applied filters. Check it now!
type: how-to
page_title: Access and determine applied filters
slug: pivotgrid-access-and-determine-applied-filters
res_type: kb
---


## Description

RadPivotGrid provides built-in `Includes`/`Excludes` filtering. After the user filters the PivotGrid content, you may want to be able to get this information for indication or other reasons.

## Solution
 You can use the following approach to achieve this requirement:  

````C#
bool isFiltered = false;
protected void RadPivotGrid1_ItemCommand(object sender, PivotGridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.FilterCommandName)
    {
        isFiltered = true;
    }
}
protected void RadPivotGrid1_PreRender(object sender, EventArgs e)
{
    if (isFiltered)
    {
        PivotGridFiltersCollection filters = RadPivotGrid1.Filters;
        StringBuilder sb = new StringBuilder("<br/><b>Currently applied filters:</b><br/>");
        foreach (PivotGridLabelGroupFilter filter in filters.OfType<PivotGridLabelGroupFilter>())
        {
            string colName = filter.FieldName;
            PivotGridSetCondition condition = filter.Condition as PivotGridSetCondition;
            sb.Append(colName + ": " + condition.Comparison + " - "
                + string.Join(", ", condition.Items.Select(x => x.ToString())) + "<br/>");
        }
        Label1.Text = sb.ToString();
    }
}
````
````VB
Private isFiltered As Boolean = False

Protected Sub RadPivotGrid1_ItemCommand(ByVal sender As Object, ByVal e As PivotGridCommandEventArgs)
    If e.CommandName = RadGrid.FilterCommandName Then
        isFiltered = True
    End If
End Sub

Protected Sub RadPivotGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    If isFiltered Then
        Dim filters As PivotGridFiltersCollection = RadPivotGrid1.Filters
        Dim sb As StringBuilder = New StringBuilder("<br/><b>Currently applied filters:</b><br/>")

        For Each filter As PivotGridLabelGroupFilter In filters.OfType(Of PivotGridLabelGroupFilter)()
            Dim colName As String = filter.FieldName
            Dim condition As PivotGridSetCondition = TryCast(filter.Condition, PivotGridSetCondition)
            sb.Append(colName & ": " & condition.Comparison & " - " & String.Join(", ", condition.Items.[Select](Function(x) x.ToString())) & "<br/>")
        Next

        Label1.Text = sb.ToString()
    End If
End Sub
````


