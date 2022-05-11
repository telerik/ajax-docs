---
title: Could not find an event named XYZ on associated control ABC for the trigger in Update Panel
description: Could not find an event named XYZ on associated control ABC for the trigger in Update Panel - RadAjaxManager. Check it now!
type: how-to
page_title: Could not find an event named XYZ on associated control ABC for the trigger in Update Panel
slug: ajax-could-not-find-an-event-named-xyz-on-associated-control-abc-for-the-trigger-in-update-panel
res_type: kb
---


## PROBLEM

Could not find an event named &lt;XYZ&gt; on associated control &lt;ABC&gt; for the trigger in UpdatePanel

## DESCRIPTION
"We have a button with ID “btnUpdateTitle” and in the AjaxSettings we have defined the Event for the button as “UpdateTitleButton_Click”. And the same Event is present in Code behind file as well.  

But when we try to open the page in browser we are getting the error saying “**Could not find an event on associated control for the trigger in UpdatePanel**”.

````ASP.NET
<asp:Button ID="btnUpdateTitle" runat="server" CssClass="tab" OnClick="UpdateTitleButton_Click" Text="Update Title" />

<telerik:RadAjaxManager ID="RadAjaxManager1" EnableAJAX="true" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="btnUpdateTitle" EventName="UpdateTitleButton_Click">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="btnUpdateTitle" />
            </UpdatedControls>
    </AjaxSettings>
</telerik:RadAjaxManager>
````

   
## SOLUTION
[The **EventName **property](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxmanager/how-to/eventname-property#eventname-property) accepts the exact server event name, but not the server event handler name.   
 In order to solve the error replace the event handler name with the server event name:  


````ASP.NET
<asp:Button ID="btnUpdateTitle" runat="server" CssClass="tab" OnClick="UpdateTitleButton_Click" Text="Update Title" />
<telerik:RadAjaxManager ID="RadAjaxManager1" EnableAJAX="true" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="btnUpdateTitle" EventName="Click">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="btnUpdateTitle" />
            </UpdatedControls>
    </AjaxSettings>
</telerik:RadAjaxManager>
````


 You may experience the same error with the asp:UpdatePanel control. In this case, you can apply again the same solution for it. The following table lists the default event names for some common ASP.NET components:  
    

| Control | Event Name |
| --- | --- |
| Button | *Click* |
| Calendar | *SelectionChanged* |
| CheckBox | *CheckedChanged* |
| GridView | *SelectedIndexChanged* |
| TextBox | *TextChanged* |



**Note:** The *EventName* is an optional property and if it is not specified, all events of the control are AJAX-enabled.
