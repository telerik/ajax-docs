---
title: OnClientFilter
page_title: OnClientFilter | RadFileExplorer for ASP.NET AJAX Documentation
description: OnClientFilter
slug: fileexplorer/client-side-programming/events/onclientfilter
tags: onclientfilter
published: True
position: 9
---

# OnClientFilter

The client-side **Filter** event is raised when the user filters the files in the grid of **RadFileExplorer**.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientFilter** property of the control.

The client-side **OnClientFilter** event handler receives two arguments:

1. Sender: The [RadFileExplorer object](http://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadFileExplorer) that fired the event.

1. Event arguments: An event arguments object of type Telerik.Web.UI.RadFileExplorerFilterEventArgs that exposes the following methods:

	>caption Table 1: OnClientFilter Event Arguments Object

	|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
	| ------ | ------ | ------ | ------ |
	|get_cancel()||Boolean|Returns a value that indicates whether the event is cancelled.|
	|get_domEvent()||Object|Returns а reference to the DOM event that triggered the filtering.|
	|get_text()||String|Returns the filtering text.|
	|set_cancel(value)|Boolean||Sets whether the event will be cancelled (if true is passed).|
	|set_text(value)|Sets the filtering text.|

>caption Example 1: Handle the **RadFileExplorer**'s client-side **Filter** event.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server"  OnClientFilter="onClientFilter" EnableFilterTextBox="true">
    <Configuration ViewPaths="~/Images" DeletePaths="~/Images" UploadPaths="~/Images" />
</telerik:RadFileExplorer>
<script>
    function onClientFilter(fileExplorer, args) {
        var filterText = args.get_text();
        if (filterText.length <= 3) {
            //cancel the event if the filter text contains less than three chars
            args.set_cancel(true);
        }
    }
</script>
````


## See Also

 * [RadFileExplorer Client-side Basics]({%slug fileexplorer/client-side-programming/overview%})

 * [RadFileExplorer Client-side Events Overview]({%slug fileexplorer/client-side-programming/events%})
