---
title: ajaxRequestWithTarget
page_title: ajaxRequestWithTarget method
description: Client-side method to trigger a PostBack on behalf of another Control using the Telerik WebForms AjaxManager component.
slug: ajaxmanager/client-side-programming/methods/ajaxrequestwithtarget
tags: telerik, webforms, ajaxmanager, client-side method, ajaxrequestwithtarget
published: True
position: 0
---

# ajaxRequestWithTarget() method

Client-side method to trigger a PostBack on behalf of another Control using the Telerik WebForms AjaxManager component. 

This method will populate the `__EVENTTARGET` and `__EVENTARGUMENT` fields of the `Request.Form` with the values from the parameters.

## Usage

The `ajaxRequestWithTarget(eventTarget, eventArgument)` method takes two parameters.

>caption Parameters

| Parameter         | Type      | Description   |
| ---               | ---       | ---           |
| `eventTarget`     | `string`  | The UniqueID of the TargetControl on which behalf you want to submit the Form       |
| `eventArgument`   | `string`  | The `string` data you want to pass as along (e.g. text, JSON string, etc.)    |

>caption Example

````ASP.NET
<telerik:RadButton runat="server" ID="btnTargetControl" Text="Target Control" OnClick="btnTargetControl_Click" />
<telerik:RadButton runat="server" ID="RadButton1" Text="PostBack on behalf of Target Control" AutoPostBack="false" OnClientClicked="OnClientClicked" />

<telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
    <script>
        function OnClientClicked(){
            var ajaxManager = $find("<%= RadAjaxManager1.ClientID %>");
            // Trigger AJAX request on behalf of btnTargetControl, no parameter
            ajaxManager.ajaxRequestWithTarget('<%= btnTargetControl.UniqueID %>', '');

            // Trigger AJAX request on behalf of btnTargetControl, with simple text as parameter
            ajaxManager.ajaxRequest('<%= btnTargetControl.UniqueID %>', 'MyStringValue');

            // Trigger AJAX request on behalf of btnTargetControl, with JSON string as parameter
            // JSON Object
            var jsonObject = {
                "field1": "value1",
                "field2": "value2",
                "field3": "value3",
            }
            // JSON String
            var jsonString = JSON.stringify(jsonObject);
            // Send JSON string as parameter
            ajaxManager.ajaxRequest('<%= btnTargetControl.UniqueID %>', jsonString);
        }
    </script>
</telerik:RadScriptBlock>
````
````C#
protected void btnTargetControl_Click(object sender, EventArgs e)
{
}
````
````VB
Protected Sub btnTargetControl_Click(ByVal sender As Object, ByVal e As EventArgs)
End Sub
````

>note If **AJAX** is enabled for the Control specified in the `eventTarget` parameter, a Partial PostBack/AJAX request will be done instead of refreshing the entire page.

>note If you send a **JSON string**, you can deserialize it to an object, see [How to serialize and deserialize (marshal and unmarshal) JSON in .NET](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/how-to) and [Deserialize an Object - Newtonsoft](https://www.newtonsoft.com/json/help/html/deserializeobject.htm)

## Access the values on Server

Upon triggering a PostBack on behalf of another Control, the server-event attached to the TargetControl will be called and can be used to access the parameter values from the `Request.Form`.

>caption Example

````C#
protected void btnTargetControl_Click(object sender, EventArgs e)
{
    string eventTarget = Request.Form["__EVENTTARGET"]; // btnTargetControl
    string eventArgument = Request.Form["__EVENTARGUMENT"]; // {\"field1\":\"value1\",\"field2\":\"value2\",\"field3\":\"value3\"}

    if (eventArgument == "MyString")
    {
        // do something
    }
    else
    {
        // In case deserializing JSON object
        try
        {
            // Deserialize myArgument
            // do the rest
        }
        catch (Exception ex)
        {
            // Handle the exception
            // or
            // Send an alert back to the client using AjaxManager
            RadAjaxManager1.Alert(string.Format("Error: {0}\n{1}", ex.Message, "Please review the JSON string and ensure it corresponds to the Object structure you want to Deserialize into."));
        }
    }
}
````
````VB
Protected Sub btnTargetControl_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim eventTarget As String = Request.Form("__EVENTTARGET") 'btnTargetControl
    Dim eventArgument As String = Request.Form("__EVENTARGUMENT") '{\"field1\":\"value1\",\"field2\":\"value2\",\"field3\":\"value3\"}

    If eventArgument = "MyString" Then
        'do something
    Else
        'In case deserializing JSON object
        Try
            'Deserialize myArgument
            'do the rest
        Catch ex As Exception
            'Handle the exception
            'or
            'Send an alert back to the client using AjaxManager
            RadAjaxManager1.Alert(String.Format("Error: {0}" & vbLf & "{1}", ex.Message, "Please review the JSON string and ensure it corresponds to the Object structure you want to Deserialize into."))
        End Try
    End If
End Sub
````
 
