---
title: Defining the Structure in the Code-Behind
page_title: Defining the Structure in the Code-Behind | RadTabStrip for ASP.NET AJAX Documentation
description: Defining the Structure in the Code-Behind
slug: tabstrip/radmultipage/defining-the-structure-in-the-code-behind
tags: defining,the,structure,in,the,code-behind
published: True
position: 2
---

# Defining the Structure in the Code-Behind

## 

**RadMultiPage** can be easily created dynamically(in the codebehind).

>note The **PageViewCreated** event is fired for each page view added to the **RadPageViewCollection** of the **RadMultiPage** . The **PageViewCreated** event fires on every postback. This is the best place to add controls to the Controls collections of the page views.
>

>caution The **ID** s of controls that are added to the **Controls** collection of page views should be set on each postback to the same value. Otherwise, different IDs will be set to these controls on each postback and this can lead to ViewState problems.
>

````C#
protected void Page_Load(object sender, System.EventArgs e)
{
 if (!Page.IsPostBack)
 {
   AddTab("Corporate");
   AddTab("Personal");
 }
}
private void AddTab(string tabName)
{
 RadTab tab = new RadTab();
 tab.Text = tabName;
 RadTabStrip1.Tabs.Add(tab);
 RadPageView pageView = new RadPageView();
 pageView.ID = tabName;
 RadMultiPage1.PageViews.Add(pageView);
}

protected void RadMultiPage1_PageViewCreated(object sender, RadMultiPageEventArgs e)
{
 string userControlName = e.PageView.ID + "CS.ascx";
      
 Control userControl = Page.LoadControl(userControlName);
 userControl.ID = e.PageView.ID + "_userControl";
      
 e.PageView.Controls.Add(userControl);
} 	
````
````VB.NET	
Private Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles MyBase.Load
  If Not Page.IsPostBack Then
    AddTab("Corporate")
    AddTab("Personal")
  End If
End Sub
Private Sub AddTab(ByVal tabName As String)
  Dim tab As New RadTab()
  tab.Text = tabName
  RadTabStrip1.Tabs.Add(tab)
  Dim pageView As New RadPageView()
  pageView.ID = tabName
  RadMultiPage1.PageViews.Add(pageView)
End Sub

Protected Sub RadMultiPage1_PageViewCreated(ByVal sender As Object, ByVal e As RadMultiPageEventArgs)
  Dim userControlName As String = e.PageView.ID + "VB.ascx"
  Dim userControl As Control = Page.LoadControl(userControlName)
  userControl.ID = e.PageView.ID + "_userControl"
  e.PageView.Controls.Add(userControl)
End Sub 			
````


**See** a live example at: [Dynamic RadPageView](http://demos.telerik.com/aspnet-ajax/tabstrip/examples/multipage/dynamic-pageview-creation/defaultcs.aspx)
