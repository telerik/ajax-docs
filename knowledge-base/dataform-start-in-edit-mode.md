---
title: Start in Edit Mode
description: Start in Edit Mode. Check it now!
type: how-to
page_title: Start in Edit Mode
slug: dataform-start-in-edit-mode
res_type: kb
---


### HOW TO

Start RadDatForm in edit mode, without showing the ItemTemplate.

### SOLUTION

Use its `PreRender` event to do one of the following:

- Call the `FireCommandEvent("Edit", "")` method of the first item.
- OR, set the `Edit` property of the first item to `true` and rebind the data form.


Make sure you have at least an emty `ItemTemplate` and that the control has a data source set.


````C#
protected void RadDataForm1_PreRender(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        // first approach
        RadDataFormItem item = RadDataForm1.Items[0];
        item.FireCommandEvent("Edit", "");
        // second approach
        //(RadDataForm1.Items[0] as RadDataFormDataItem).Edit = true;
        //CandidateDataForm.Rebind();
    }
}
````
````VB
Protected Sub RadDataForm1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then
        'first approach
        Dim item As RadDataFormItem = RadDataForm1.Items(0)
        item.FireCommandEvent("Edit", "")
        ' second approach
        '(TryCast(RadDataForm1.Items(0), RadDataFormDataItem)).Edit = True
        'CandidateDataForm.Rebind()
    End If
End Sub
````



