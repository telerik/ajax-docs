---
title: How to Subscribe to Blur Event
page_title: How to Subscribe to Blur Event | RadMultiSelect for ASP.NET AJAX Documentation
description: How to Subscribe to Blur Events
slug: multiselect/how-to/how-to-subscribe-to-blur-event
tags: how,to,subscribe,blur,events
published: True
position: 4
---

# How to Subscribe to Blur Event

In this article you will see how to:

* [Bind to the blur event of the input](#subscribe-to-blur-event)
* [Trigger a postback on blur](#trigger-postback-on-blur)

## Subscribe to Blur Event

The following example demonstrates how to bind to the `blur` event of the filter input element of **RadMultiSelect**.

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" DataTextField="text" DataValueField="value" Filter="Contains" Width="400px"
    Placeholder="Select attendees...">
    <ClientEvents OnLoad="onLoad" />
    <Items>
        <telerik:MultiSelectItem Text="Steven White" Value="1"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy King" Value="2"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy Davolio" Value="3"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Robert Davolio" Value="4"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Michael Leverling" Value="6"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Andrew Callahan" Value="7"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Michael Suyama" Value="8"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Laura Peacock" Value="9"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Robert Fuller" Value="10"></telerik:MultiSelectItem>
    </Items>
</telerik:RadMultiSelect>
<script>
    function onLoad(multiSelect, args) {
        var $inputEl = $telerik.$(multiSelect.get_inputElement());
        $inputEl.bind("blur", function () {
            alert("Input blurred");
        });
    }
</script>
````

## Trigger PostBack on Blur

In some scenarios, you want to allow the end clients to select multtiple values from **RadMultiSelect** before submitting them to the server (and `AutoPostback="False"`). With this approach, the server-side [OnSelectionChanged]({%slug multiselect/server-side-programming/events/selectionchanged%})
 event will be triggered only once, after all values are available on the server.

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" DataTextField="text" DataValueField="value" Filter="Contains" Width="400px"
    Placeholder="Select attendees..." OnSelectionChanged="RadMultiSelect1_SelectionChanged">
    <ClientEvents OnLoad="onLoad" />
    <Items>
        <telerik:MultiSelectItem Text="Steven White" Value="1"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy King" Value="2"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy Davolio" Value="3"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Robert Davolio" Value="4"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Michael Leverling" Value="6"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Andrew Callahan" Value="7"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Michael Suyama" Value="8"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Laura Peacock" Value="9"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Robert Fuller" Value="10"></telerik:MultiSelectItem>
    </Items>
</telerik:RadMultiSelect>
<script>
    function onLoad(multiSelect, args) {
        var $inputEl = $telerik.$(multiSelect.get_inputElement());
        $inputEl.bind("blur", function () {
            // https://forums.asp.net/t/1017614.aspx?__doPostBack+control+UniqueID+best+method+
            __doPostBack("<%= RadMultiSelect1.UniqueID %>", "");
        });
    }
</script>
````

````C#
protected void RadMultiSelect1_SelectionChanged(object sender, EventArgs e)
{
    var selectedValues = RadMultiSelect1.Value;

    foreach (string value in selectedValues)
    {
        MultiSelectItem selectedItem = RadMultiSelect1.Items.FindChildByValue(value);
        string result = string.Format("Selected item with text: <strong>{0}</strong> and value: <strong>{1}</strong><br />", selectedItem.Text, selectedItem.Value);
        Response.Write(result);
    }
}
````
````VB
Protected Sub RadMultiSelect1_SelectionChanged(ByVal sender As Object, ByVal e As EventArgs)
    Dim selectedValues = RadMultiSelect1.Value

    For Each value As String In selectedValues
        Dim selectedItem As MultiSelectItem = RadMultiSelect1.Items.FindChildByValue(value)
        Dim result As String = String.Format("Selected item with text: <strong>{0}</strong> and value: <strong>{1}</strong><br />", selectedItem.Text, selectedItem.Value)
        Response.Write(result)
    Next
End Sub
````



