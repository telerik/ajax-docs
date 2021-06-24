---
title: Set Focus to a Control in PopUp Edit Form of RadGrid
description: Set Focus to a Control in PopUp Edit Form of RadGrid. Check it now!
type: how-to
page_title: Set Focus to a Control in PopUp Edit Form of RadGrid
slug: grid-set-focus-to-a-control-in-popup-edit-form-of-radgrid
res_type: kb
---

## DESCRIPTION
Focusing the input control directly is a valid approach for other edit modes like EditForms and InPlace because they are generated inside the grid. However, the PopUp is loaded after the grid and the focus should be set in a later stage.

## SOLUTION
 You can achieve this requirement using some time delay. First, access the generated edit control:  
[Accessing Controls in Edit/Insert Mode]({%slug grid/rows/accessing-cells-and-rows%}#accessing-controls-in-editinsert-mode)
  
Then, apply the focusing logic:  

```C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridEditFormItem && e.Item.IsInEditMode)
    {
        GridEditFormItem form = (GridEditFormItem)e.Item;
        TextBox txtCustomer = (TextBox)form.FindControl("txtCustomer");
        string script = string.Format("setTimeout(function(){{$get('{0}').focus();}},150);", txtCustomer.ClientID);
        ScriptManager.RegisterStartupScript(Page, typeof(Page), "myScript", script, true);
    }
}
```
```VB
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridEditFormItem AndAlso e.Item.IsInEditMode Then
        Dim form As GridEditFormItem = CType(e.Item, GridEditFormItem)
        Dim txtCustomer As TextBox = CType(form.FindControl("txtCustomer"), TextBox)
        Dim script As String = String.Format("setTimeout(function(){{$get('{0}').focus();}},150);", txtCustomer.ClientID)
        ScriptManager.RegisterStartupScript(Page, GetType(Page), "myScript", script, True)
    End If
End Sub
```


```JavaScript
function gridCreated(sender, args) {
    var editForm;
    var tableView = sender.get_masterTableView();
    if (tableView.get_isItemInserted()) {
        // insert mode active
        editForm = tableView.get_insertItem();
    }
    if (tableView.get_editItems().length > 0) {
        // edit mode active
        editForm = tableView.get_editItems()[0].get_editFormItem();
    }
    if (editForm) {
        // focus textbox
        var textBox = $telerik.findElement(editForm, "txtShipName");
        setTimeout(function () {
            textBox.focus();
        }, 150);
    }
}
```


  

 


