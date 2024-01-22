---
title: How to Trigger Server-Side Click Event in RadFloatingActionButton for ASP.NET AJAX
description: Learn how to trigger a server-side click event in RadFloatingActionButton for ASP.NET AJAX.
type: how-to
page_title: Trigger Server-Side Click Event in RadFloatingActionButton for ASP.NET AJAX
slug: floatingactionbutton-trigger-server-side-click-event
tags: RadFloatingActionButton, ASP.NET AJAX, server-side click event, trigger
res_type: kb
---

## Environment

| Property | Value |
| --- | --- |
| Product | RadFloatingActionButton for ASP.NET AJAX |
| Version | all |

## Description
I want to trigger a server-side click event in RadFloatingActionButton for ASP.NET AJAX, but it is not getting triggered by default.

## Solution
By default, the RadFloatingActionButton does not trigger server-side events. However, you can still achieve this by making a PostBack using the [__doPostBack() function](https://stackoverflow.com/questions/3591634/how-to-use-dopostback). 

Here's how:

1. Add the following JavaScript code to your page:
```javascript
<script>
function OnClientClicked(ev) {
    var floatingActionButtonId = ev.get_id();
    __doPostBack(floatingActionButtonId, "SomeArguments");
}
</script>
```

2. Modify your RadFloatingActionButton control to include the `OnClientClicked` client event:
```html
<telerik:RadFloatingActionButton runat="server" ID="RadFloatingActionButton1" Icon="save" PositionMode="Fixed" Text="Save">
    <ClientEvents OnClick="OnClientClicked" />
</telerik:RadFloatingActionButton>
```

3. In the code-behind (C#), capture the event in the `Page_Load` method:
```csharp
protected void Page_Load(object sender, EventArgs e)
{
    string eventTarget = Request["__EVENTTARGET"]; // RadFloatingActionButton1

    if (!string.IsNullOrWhiteSpace(eventTarget) && eventTarget == RadFloatingActionButton1.ClientID)
    {
        string parameter = Request["__EVENTARGUMENT"]; // SomeArguments

        // Handle the event here
    }
}
```
```VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
    Dim eventTarget As String = Request("__EVENTTARGET") ' RadFloatingActionButton1

    If Not String.IsNullOrWhiteSpace(eventTarget) AndAlso eventTarget = RadFloatingActionButton1.ClientID Then
        Dim parameter As String = Request("__EVENTARGUMENT") ' SomeArguments
        ' Handle the event here
    End If
End Sub
```

That's it! You can now trigger a server-side click event in RadFloatingActionButton for ASP.NET AJAX using the provided solution.

## Notes
Make sure to replace `RadFloatingActionButton1` with the actual ID of your RadFloatingActionButton control in the `Page_Load` method.

   
