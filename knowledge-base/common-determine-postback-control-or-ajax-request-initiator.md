---
title: Determine PostBack Control or AJAX Request Initiator
description: How to check which control has caused the PostBack or partial request action to the server
type: how-to
page_title: Determine PostBack Control or AJAX Request Initiator
slug: common-determine-postback-control-or-ajax-request-initiator
res_type: kb
---

## Description

In some scenarios it might prove helpful to know which control has caused the PostBack or partial request action to the server.

## Solution

You can use one of these approaches to achieve this requirement.

````C#
protected void Page_Load(object sender, EventArgs e)
{
    string id1 = Request.Params["__EVENTTARGET"];
    string id2 = Request.Form["__EVENTTARGET"];
    string id3 = ScriptManager.GetCurrent(Page).AsyncPostBackSourceElementID;
    bool isAJAX = ScriptManager.GetCurrent(Page).IsInAsyncPostBack;
    if (isAJAX)
    {
        string id4 = DeterminePostBackMode()["__EVENTTARGET"];
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    Dim id1 As String = Request.Params("__EVENTTARGET")
    Dim id2 As String = Request.Form("__EVENTTARGET")
    Dim id3 As String = ScriptManager.GetCurrent(Page).AsyncPostBackSourceElementID
    Dim isAJAX As Boolean = ScriptManager.GetCurrent(Page).IsInAsyncPostBack

    If isAJAX Then
        Dim id4 As String = DeterminePostBackMode()("__EVENTTARGET")
    End If
End Sub
````

 