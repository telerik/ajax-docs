---
title: Minimize the SelectedIndexChanged server events fired when SelectionMode is Multiple for RadListBox
description: Minimize the SelectedIndexChanged server events fired when SelectionMode is Multiple for RadListBox. Check it now!
type: how-to
page_title: Minimize the SelectedIndexChanged server events fired when SelectionMode is Multiple for RadListBox
slug: listbox-minimize-the-selectedindexchanged-for-multiple-selectionmode
res_type: kb
---


### PROBLEM

The `SelectedIndexChanged` server-side event is fired for each item when dragging to select multiple items in RadListBox

### DESCRIPTION
This is expected as the OnClientSelectedIndexChanged event checks if the `AutoPostBack` is `true`, and if it is, it triggers a postback.  

### SOLUTION

The solution is to set the `AutoPostBack` property to false in the mousedown event and then when the selection finishes, to trigger the postback manually:

```ASP.NET
<telerik:RadListBox ID="lbFilter1" runat="server"
    SelectionMode="Multiple"
    OnClientLoad="OnClientLoad"
    OnSelectedIndexChanged="lbFilter1_SelectedIndexChanged"
    AutoPostBack="true">
    <Items>
        <telerik:RadListBoxItem Text="Item 1" />
        <telerik:RadListBoxItem Text="Item 2" />
        <telerik:RadListBoxItem Text="Item 3" />
        <telerik:RadListBoxItem Text="Item 4" />
        <telerik:RadListBoxItem Text="Item 5" />
        <telerik:RadListBoxItem Text="Item 6" />
    </Items>
</telerik:RadListBox>
```

```JavaScript
<script>
    function OnClientLoad(sender, args) {
        var listbox = sender;
        $telerik.$(listbox.get_element()).find(".rlbList").on({
            mousedown: function () {
                listbox.set_autoPostBack(false);
            },
            mouseup: function () {
                listbox.set_autoPostBack(true);
                listbox.postback({
                    type: Telerik.Web.UI.ListBoxCommand.SelectedIndexChanged
                });
            },
            mouseout: function (ev) {
                if ($telerik.$(ev.target).closest(".rlbList")[0] != this) {
                    listbox.set_autoPostBack(true);
                    listbox.postback({
                        type: Telerik.Web.UI.ListBoxCommand.SelectedIndexChanged
                    });
                }
            }
        })
    }
</script>
```


```C#
protected void lbFilter1_SelectedIndexChanged(object sender, EventArgs e)
{
       // custom logic here...
}
```
```VB
Protected Sub lbFilter1_SelectedIndexChanged(ByVal sender As Object, ByVal e As EventArgs)
     `custom logic here...
End Sub
```







