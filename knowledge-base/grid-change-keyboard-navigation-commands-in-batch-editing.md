---
title: Change keyboard navigation commands in RadGrid with Batch editing
description: Change keyboard navigation commands in RadGrid with Batch editing. Check it now!
type: how-to
page_title: Change keyboard navigation commands in RadGrid with Batch editing
slug: grid-change-keyboard-navigation-commands-in-batch-editing
res_type: kb
---


## Description

RadGrid provides built-in keyboard navigation which can be enabled using this property:
````ASP.NET
<ClientSettings AllowKeyboardNavigation="true">
</ClientSettings>
````

One of these commands is the **Ctrl+Q** key combination, which functions as the `CancelChanges` shortcut. 

You can check this behavior in the following live sample:  
[http://demos.telerik.com/aspnet-ajax/grid/examples/data-editing/batch-editing/defaultcs.aspx](http://demos.telerik.com/aspnet-ajax/grid/examples/data-editing/batch-editing/defaultcs.aspx)


## Solution

 Some users may use these keys for entering special symbols or other specific actions. In this case you can change the built-in behavior using the dedicated keyboard settings:

````ASP.NET
<ClientSettings AllowKeyboardNavigation="true">
    <KeyboardNavigationSettings CancelChangesKey="Z" />
````





