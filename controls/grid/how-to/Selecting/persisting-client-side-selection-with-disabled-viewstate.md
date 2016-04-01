---
title: Persisting Client-side Selection with ViewState Disabled
page_title: Persisting Client-side Selection with ViewState Disabled | RadGrid for ASP.NET AJAX Documentation
description: Persisting Client-side Selection with ViewState Disabled
slug: grid/how-to/selecting/persisting-client-side-selection-with-disabled-viewstate
previous_url: grid/functionality/selecting/how-to/persisting-client-side-selection-with-disabled-viewstate
tags: selecting, persisting, ViewState
published: True
position: 9
---

# Persisting Client-side Selection with ViewState Disabled (Control state)

When using server-side selection there will be no problems with disabled **ViewState**, however with client-side selection the selected item will be lost. The grid raises appropriate **SelectedIndexChanged** event with valid data as **SelectedItems** and **SelectedIndexes**.

To avoid such problems when the grid saves its settings in the control state *(EnableViewState = false)* and client-side selection we suggest you following workaround:

````C#
Telerik.Web.UI.GridItem item = null;

private void RadGrid1_SelectedIndexChanged(object sender, EventArgs e)
{
    item = RadGrid1.SelectedItems[0];
}

private void RadGrid1_PreRender(object sender, EventArgs e)
{
    if (item != null)
    {
        item.Selected = true;
    }
}
````
````VB
Dim item As Telerik.Web.UI.GridItem = Nothing

Private Sub RadGrid1_SelectedIndexChanged(ByVal sender As Object, ByVal e As EventArgs)
    item = RadGrid1.SelectedItems(0)
End Sub

Private Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    If (Not (item) Is Nothing) Then
        item.Selected = True
    End If
End Sub
````

Where **RadGrid1_PreRender** is the event handler for **RadGrid1.OnPreRender** event and **RadGrid1_SelectedIndexChanged** is the event handler for **RadGrid1.OnSelectedIndexChanged** event.
