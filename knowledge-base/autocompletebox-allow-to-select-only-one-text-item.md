---
title: Allow to select only one text item or a single token item in RadAutoCompleteBox
description: Allow to select only one text item or a single token item in RadAutoCompleteBox. Check it now!
type: how-to
page_title: Allow to select only one text item or a single token item in RadAutoCompleteBox
slug: autocompletebox-allow-to-select-only-one-text-item
res_type: kb
---


### HOW TO

How to make the AutoComplete allow only one text entry or a single token.

### SOLUTION

The AutoCompleteBox is designed to allow users to select many items. Nevertheless, the following approach will achieve the single selection functionality.

In the `OnClientLoad` event, subscribe to the `keypress` event of the input element of the AutoCompleteBox. In the event handler of the `keypress` event, you can check if the entries collection has any entries, and if it does, prevent the `keypress` event.


````JavaScript
<script>
    function OnClientLoad(sender, args) {
        $telerik.$(sender.get_inputElement()).on('keypress', function (e) {
            if (sender.get_entries().get_count() > 0) {
                // optionally, notify user that a single selection is allowed
                e.preventDefault();
            }
        });
    }
</script>
````
  
````ASP.NET
<telerik:RadAutoCompleteBox runat="server" Width="250px" EmptyMessage="Choose a single text item..."
    InputType="text" TextSettings-SelectionMode="Single" ID="RadAutoCompleteBox1" OnClientLoad="OnClientLoad">
</telerik:RadAutoCompleteBox>
<br />
<telerik:RadAutoCompleteBox runat="server" Width="250px" AllowCustomEntry="false" EmptyMessage="Choose a single token item..."
    InputType="Token" ID="RadAutoCompleteBox2" OnClientLoad="OnClientLoad">
</telerik:RadAutoCompleteBox>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    var dataSource = new string[] { "One", "Two", "Three" };
    RadAutoCompleteBox1.DataSource = dataSource;
    RadAutoCompleteBox1.DataBind();
    RadAutoCompleteBox2.DataSource = dataSource;
    RadAutoCompleteBox2.DataBind();
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    Dim dataSource = New String() {"One", "Two", "Three"}
    RadAutoCompleteBox1.DataSource = dataSource
    RadAutoCompleteBox1.DataBind()
    RadAutoCompleteBox2.DataSource = dataSource
    RadAutoCompleteBox2.DataBind()
End Sub
````



### See also

- [How to limit that the user can select only one item](https://www.telerik.com/forums/how-to-limit-that-the-user-can-select-only-one-item) Telerik forum thread:
- [Show and hide cursor when a an item is selected](https://www.telerik.com/forums/how-to-limit-that-the-user-can-select-only-one-item#3996871) post.



