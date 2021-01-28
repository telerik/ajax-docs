---
title: Interacting Between RadAjaxPanels
page_title: Interacting Between RadAjaxPanels
description: Check our Web Forms article about Interacting Between RadAjaxPanels.
slug: ajaxpanel/how-to/interacting-between-radajaxpanels
previous_url: ajax/radajaxpanel/how-to/interacting-between-radajaxpanels
tags: interacting,between,radajaxpanels
published: True
position: 0
---

# Interacting Between RadAjaxPanels



## 

This help article features a code example that shows how to interact between two **RadAjaxPanel** controls without using a **RadAjaxManager**. 
_Telerik recommends using a **RadAjaxManager** and the technique discussed in this article, while possible, is not supported._

Telerik designed the **RadAjaxPanel** control to update only its content controls, so Telerik Support always recommends that you use **RadAjaxManager** when you need to update external controls.

However, you can achieve interaction between panels without the use of **RadAjaxManager** . The example bellow demonstrate a technique using the [ResponseScripts]({%slug ajaxpanel/server-side-programming/properties%}) property, together with the [client-side ajaxRequest()]({%slug ajaxpanel/client-side-programming/overview%}) function. Note the use of **Page_PreRender** event as well as the property persisted in ViewState.

The following example demonstrates how to handle an AJAX request from one **RadAjaxPanel** and how to initiate AJAX request from the **RadAjaxPanel** we want to update.

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<h3>Panel1</h3>
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
<asp:Button ID="btnIncrease" OnClick="btnIncrease_Click" Text="Increase" runat="server">
</asp:Button>
<asp:Label ID="Label1" runat="server">0</asp:Label>
<asp:TextBox ID="TextBox1" Text="0" runat="server"></asp:TextBox>
</telerik:RadAjaxPanel>
<h3>Panel2</h3>
<telerik:RadAjaxPanel ID="RadAjaxPanel2" runat="server">
<asp:Button ID="btnDecrease" OnClick="btnDecrease_Click" Text="Decrease" runat="server">
</asp:Button>
<asp:Label ID="Label2" runat="server">0</asp:Label>
<asp:TextBox ID="TextBox2" Text="0" runat="server"></asp:TextBox>
</telerik:RadAjaxPanel>
````



And in the code-behind:



````C#
protected void Page_PreRender(object sender, EventArgs e)
{
	        if (RadAjaxPanel1.IsAjaxRequest || RadAjaxPanel2.IsAjaxRequest)
	        {
	            TextBox1.Text = Label1.Text = TextBox2.Text = Label2.Text = Count.ToString();
	        }
}
public int Count
{
	        get
	        {
	            return this.ViewState["Count"] == null ? 0 : (int)this.ViewState["Count"];
	        }
	        set
	        {
	            this.ViewState["Count"] = value;
	        }
}
protected void btnIncrease_Click(object sender, System.EventArgs e)
{
	        Count++;
	        RadAjaxPanel1.ResponseScripts.Add(String.Format("$find('{0}').ajaxRequest();", RadAjaxPanel2.ClientID));
}
protected void btnDecrease_Click(object sender, System.EventArgs e)
{
	        Count--;
	        RadAjaxPanel2.ResponseScripts.Add(String.Format("$find('{0}').ajaxRequest();", RadAjaxPanel1.ClientID));
}  
````
````VB
Protected Sub Page_PreRender(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreRender
	        If RadAjaxPanel1.IsAjaxRequest Or RadAjaxPanel2.IsAjaxRequest Then
	            Dim countValue As String = Count.ToString()
	            TextBox1.Text = countValue
	            Label1.Text = countValue
	            TextBox2.Text = countValue
	            Label2.Text = countValue
	        End If
End Sub 'Page_PreRender
	
Public Property Count() As Integer
	        Get
	            If Me.ViewState("Count") Is Nothing Then
	                Return 0
	            Else
	                Return CInt(Me.ViewState("Count"))
	            End If
	        End Get
	        Set(ByVal value As Integer)
	            Me.ViewState("Count") = value
	        End Set
End Property
	
Protected Sub btnIncrease_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	        Count += 1
	        RadAjaxPanel1.ResponseScripts.Add(String.Format("$find('{0}').ajaxRequest();", RadAjaxPanel2.ClientID))
End Sub 'btnIncrease_Click
	
Protected Sub btnDecrease_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	        Count -= 1
	        RadAjaxPanel2.ResponseScripts.Add(String.Format("$find('{0}').ajaxRequest();", RadAjaxPanel1.ClientID))
End Sub 'btnDecrease_Click 
````

