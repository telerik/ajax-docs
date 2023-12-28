---
title: Conditional Data Binding based on the selected SearchContext
description: Binding data conditionally to the SearchBox in order to search in the tables related to the selected SearchContext.
type: how-to
page_title: Conditional Data Binding based on the selected SearchContext | RadSearchBox
slug: searchbox-conditional-data-binding-based-on-selected-searchcontext
tags: searchbox, conditional, data binding, searchcontext
res_type: kb
---

## Environment

<table>
  <tr>
    <td>Product</td>
    <td>Telerik WebForms SearchBox for ASP.NET AJAX</td>
  </tr>
</table>

## Description

How can I assign a different data source to the Telerik WebForms SearchBox based on the selected `SearchContext`?

I want the users to be able to select a `SearchContext`. For instance, they could select between **Landlords**, **Tenants**, or **Owners** and make the SearchBox search from the tables/data sources relative to the selected `SearchContext`.

![](images/searchbox-conditional-data-binding-based-on-selected-searchcontext.gif)

## Solution

The [Telerik WebForms SearchBox]({%slug searchbox/overview%}) implements the [ICallbackEventHandler Interface](https://learn.microsoft.com/en-us/dotnet/api/system.web.ui.icallbackeventhandler) and will make a CallBack sending the **ID** and **Parameters** in the `Request.Form`. For more information on the CallBacks, you can check out the [Script Callbacks in ASP.NET](https://learn.microsoft.com/en-us/archive/msdn-magazine/2004/august/cutting-edge-script-callbacks-in-asp-net) article.

The following information is sent with the CallBack:
- `Request.Form["__CALLBACKID"]` - contains the **ID** of the Control that makes the CallBack.
- `Request.Form["__CALLBACKPARAM"]` - contains the CallBack **parameters**.


First, create two `Classes` that will be used to parse the CallBack parameters.

````C#
public class SBCallBackParams
{
    public SBContextItem SelectedContextItem { get; set; }
}

public class SBContextItem
{
    public string Text { get; set; }
    public string Key { get; set; }
}
````
````VB
Public Class SBCallBackParams
    Public Property SelectedContextItem As SBContextItem
End Class

Public Class SBContextItem
    Public Property Text As String
    Public Property Key As String
End Class
````

In the Page's Load event, listen to the CallBack request and serialize the parameters. Once done, you can setup a condition to assign different data sources to the SearchBox based on the selected `SearchContext`.

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (IsCallback)
    {
        string callBackId = Request.Form["__CALLBACKID"];
        string callBackParams = Request.Form["__CALLBACKPARAM"];

        if (callBackId == RadSearchBox1.ID)
        {
            AdvancedJavaScriptSerializer serializer = new AdvancedJavaScriptSerializer();
            SBCallBackParams sbCallBackParams = serializer.Deserialize<SBCallBackParams>(callBackParams);
            SBContextItem selectedContextItem = sbCallBackParams.SelectedContextItem;

            if (selectedContextItem != null)
            {
                switch (selectedContextItem.Text)
                {
                    case "Landlords":
                        RadSearchBox1.DataSource = GetLandLors();
                        break;

                    case "Tenants":
                        RadSearchBox1.DataSource = GetTenants();
                        break;

                    case "Owners":
                        RadSearchBox1.DataSource = GetOwners();
                        break;
                }
            }
            else
            {
                RadSearchBox1.DataSource = GetAllData();
            }

            RadSearchBox1.DataBind();
        }
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If IsCallback Then
        Dim callBackId As String = Request.Form("__CALLBACKID")
        Dim callBackParams As String = Request.Form("__CALLBACKPARAM")

        If callBackId = RadSearchBox1.ID Then
            Dim serializer As AdvancedJavaScriptSerializer = New AdvancedJavaScriptSerializer()
            Dim sbCallBackParams As SBCallBackParams = serializer.Deserialize(Of SBCallBackParams)(callBackParams)
            Dim selectedContextItem As SBContextItem = sbCallBackParams.SelectedContextItem

            If selectedContextItem IsNot Nothing Then
                Select Case selectedContextItem.Text
                    Case "Landlords"
                        RadSearchBox1.DataSource = GetLandLors()
                    Case "Tenants"
                        RadSearchBox1.DataSource = GetTenants()
                    Case "Owners"
                        RadSearchBox1.DataSource = GetOwners()
                End Select
            Else
                RadSearchBox1.DataSource = GetAllData()
            End If

            RadSearchBox1.DataBind()
        End If
    End If
End Sub
````

 