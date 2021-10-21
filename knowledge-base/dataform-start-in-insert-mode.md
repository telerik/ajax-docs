---
title: Start in Insert Mode
description: Start in Insert Mode. Check it now!
type: how-to
page_title: Start in Insert Mode
slug: dataform-start-in-insert-mode
res_type: kb
---


### HOW TO

Start RadDatForm in insert mode, without showing the `ItemTemplate`.

### SOLUTION

Use its `PreRender` event to set its `IsItemInserted` property to `true` and rebind it.

Make sure you have at least an emty `ItemTemplate` and that the control has a data source set.


````C#
protected void RadDataForm1_PreRender(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        RadDataForm df = sender as RadDataForm;
        df.IsItemInserted = true;
        df.Rebind();
    }
}
````
````VB
Protected Sub RadDataForm1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    If Not Page.IsPostBack Then
        Dim df As RadDataForm = TryCast(sender, RadDataForm)
        df.IsItemInserted = True
        df.Rebind()
    End If
End Sub
````



