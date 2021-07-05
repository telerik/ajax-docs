---
title: AutoCompleteBox to remain with open dropdown to allow multiselection
description: AutoCompleteBox to remain with open dropdown to allow multiselection. Check it now!
type: how-to
page_title: AutoCompleteBox to remain with open dropdown to allow multiselection
slug: autocompletebox-allow-multiselection
res_type: kb
---


### HOW TO

Configure the AutoCompleteBox imitate the behavior of the [Kendo UI MultiSelect](https://demos.telerik.com/kendo-ui/multiselect/index) widget by allowing the selection of multiple items without closing the dropdown on item click.  
  
![AutoCompleteBox-MultiSelection](images\autocompletebox-multiselection.gif)

### SOLUTION

Remove the default click handler of the items container of the AutoCompleteBox' dropdown:

````ASP.NET
<script type="text/javascript">
    function OnClientLoad(sender, args) {
        // http://api.jquery.com/off/
        $telerik.$(sender._dropDown.get_itemsContainer()).off("click").on("click", function (e) {
            sender._dropDown._onDropDownClick(e);
 
            // reposition the Dropdown if the input is resized
            setTimeout(function () {
                sender._dropDown._dropDown.reflow();
            }, 50);
 
            //the default code that closed the Dropdown when an item is clicked
            //that.close();
        })
    }
</script>
<telerik:RadAutoCompleteBox runat="server" OnClientLoad="OnClientLoad"
    InputType="Token" Width="300px" DropDownHeight="150" ID="RadAutoCompleteBox1">
</telerik:RadAutoCompleteBox>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadAutoCompleteBox1.DataSource = new string[] { "Item 1", "Item 2", "Item 3" };
    RadAutoCompleteBox1.DataBind();
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    RadAutoCompleteBox1.DataSource = New String() {"Item 1", "Item 2", "Item 3"}
    RadAutoCompleteBox1.DataBind()
End Sub
````


