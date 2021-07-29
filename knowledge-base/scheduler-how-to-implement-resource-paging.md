---
title: How to implement Resource paging
description: How to implement Resource paging. Check it now!
type: how-to
page_title: How to implement Resource paging
slug: scheduler-how-to-implement-resource-paging
res_type: kb
---

   
## HOW-TO  
 Implement Resource paging.  
   
 ## DESCRIPTION  
   
 One nice way to display a long list of resources in RadScheduler and improve performance is to use paging:  
   
   
 Pagination for resources is not provided out-of-the-box, but it can easily be implemented with a little bit of coding.   
   
## SOLUTION  
   
 The underlying method to achieve the above described functionality is to manipulate the **Resources** collection of RadScheduler in its **DataBound** event. We cycle through all resources and remove those that do not fall in the currently selected range. We also add those resources which we have removed to another collection saved in a session and use it in FormCreating to populate the resources which we have removed in DataBound.   
 

````C#  
private const int PageSize = 2;
     
    protected void Page_Init(object sender, EventArgs e)
    {
        XmlSchedulerProvider provider = new XmlSchedulerProvider(Server.MapPath("~/App_Data/Appointments_MultipleResources.xml"), true);
        RadScheduler1.Provider = provider;
    }
    protected void RadScheduler1_DataBound(object sender, EventArgs e)
    {
        RadScheduler1.ResourceTypes.FindByName("User").AllowMultipleValues = true;
        int pageIndex = (int?)ViewState["PageIndex"] ?? 0;
        IList<Resource> pagedResources = new List<Resource>(RadScheduler1.Resources.GetResourcesByType("User"));
        IList<Resource> remainingResources = new List<Resource>();
        int resourceCount = pagedResources.Count;
        int pageStart = pageIndex * PageSize;
        int pageEnd = pageStart + PageSize;
         
        int resourceIndex = 0;
        foreach (Resource resource in pagedResources)
        {
            if (resourceIndex < pageStart || resourceIndex >= pageEnd)
            {
                RadScheduler1.Resources.Remove(resource);
                remainingResources.Add(resource);
            }  
            resourceIndex++;
        }
        int pageEndToDisplayInPagingStatus = pageStart + RadScheduler1.Resources.GetResourcesByType("User").Count;
        Session["remainingResources"] = remainingResources;
        PagingStatus.Text = string.Format("Showing pages {0} to {1} of {2} total.", pageStart + 1, pageEndToDisplayInPagingStatus, resourceCount);
        int pageCount = (int) Math.Ceiling((double)resourceCount / (double)PageSize);
        NextPage.Enabled = pageIndex < pageCount-1;
        PrevPage.Enabled = pageIndex > 0;
    }
    protected void NextPage_Click(object sender, EventArgs e)
    {
        int pageIndex = (int?)ViewState["PageIndex"] ?? 0;
        pageIndex++;
        ViewState["PageIndex"] = pageIndex;
        RadScheduler1.Rebind();
    }
    protected void PrevPage_Click(object sender, EventArgs e)
    {
        int pageIndex = (int?)ViewState["PageIndex"] ?? 0;
        pageIndex = Math.Max(pageIndex - 1, 0);
        ViewState["PageIndex"] = pageIndex;
        RadScheduler1.Rebind();
    }
     
    protected void RadScheduler1_AppointmentCommand(object sender, AppointmentCommandEventArgs e)
    {
        if (e.CommandName == "Cancel")
            RadScheduler1.Rebind();
    }
    protected void RadScheduler1_FormCreating(object sender, SchedulerFormCreatingEventArgs e)
    {
        if (e.Mode == SchedulerFormMode.AdvancedEdit || e.Mode == SchedulerFormMode.AdvancedInsert)
        {
            IList<Resource> remainingResources = Session["remainingResources"] as List<Resource>;
            if (remainingResources != null)
            {
                foreach (Resource resource in remainingResources)
                {
                    RadScheduler1.Resources.Add(resource);
                }
                Session.Remove("remainingResources");
            }
        }
    }
````
````VB
Private Const PageSize As Integer = 2
   Protected Sub Page_Init(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Init
       Dim provider As New XmlSchedulerProvider(Server.MapPath("~/App_Data/Appointments_MultipleResources.xml"), True)
       RadScheduler1.Provider = provider
   End Sub
   Protected Sub RadScheduler1_DataBound(ByVal sender As Object, ByVal e As EventArgs)
       RadScheduler1.ResourceTypes.FindByName("User").AllowMultipleValues = True
       Dim pageIndex As Integer = If(DirectCast(ViewState("PageIndex"), System.Nullable(Of Integer)), 0)
       Dim pagedResources As IList(Of Resource) = New List(Of Resource)(RadScheduler1.Resources.GetResourcesByType("User"))
       Dim remainingResources As IList(Of Resource) = New List(Of Resource)()
       Dim resourceCount As Integer = pagedResources.Count
       Dim pageStart As Integer = pageIndex * PageSize
       Dim pageEnd As Integer = pageStart + PageSize
       Dim resourceIndex As Integer = 0
       For Each resource As Resource In pagedResources
           If resourceIndex < pageStart OrElse resourceIndex >= pageEnd Then
               RadScheduler1.Resources.Remove(resource)
               remainingResources.Add(resource)
           End If
           System.Math.Max(System.Threading.Interlocked.Increment(resourceIndex), resourceIndex - 1)
       Next
       Dim pageEndToDisplayInPagingStatus As Integer = pageStart + RadScheduler1.Resources.GetResourcesByType("User").Count
       Session("remainingResources") = remainingResources
       PagingStatus.Text = String.Format("Showing pages {0} to {1} of {2} total.", pageStart + 1, pageEndToDisplayInPagingStatus, resourceCount)
       Dim pageCount As Integer = Math.Ceiling(resourceCount / PageSize)
       NextPage.Enabled = pageIndex < pageCount - 1
       PrevPage.Enabled = pageIndex > 0
   End Sub
   Protected Sub NextPage_Click(ByVal sender As Object, ByVal e As EventArgs)
       Dim pageIndex As Integer = If(DirectCast(ViewState("PageIndex"), System.Nullable(Of Integer)), 0)
       System.Math.Max(System.Threading.Interlocked.Increment(pageIndex), pageIndex - 1)
       ViewState("PageIndex") = pageIndex
       RadScheduler1.Rebind()
   End Sub
   Protected Sub PrevPage_Click(ByVal sender As Object, ByVal e As EventArgs)
       Dim pageIndex As Integer = If(DirectCast(ViewState("PageIndex"), System.Nullable(Of Integer)), 0)
       pageIndex = Math.Max(pageIndex - 1, 0)
       ViewState("PageIndex") = pageIndex
       RadScheduler1.Rebind()
   End Sub
   Protected Sub RadScheduler1_FormCreating(ByVal sender As Object, ByVal e As Telerik.Web.UI.SchedulerFormCreatingEventArgs)
       If e.Mode = SchedulerFormMode.AdvancedEdit OrElse e.Mode = SchedulerFormMode.AdvancedInsert Then
           Dim remainingResources As IList(Of Resource) = TryCast(Session("remainingResources"), List(Of Resource))
           If Not remainingResources Is Nothing Then
               For Each resource As Resource In remainingResources
                   RadScheduler1.Resources.Add(resource)
               Next
               Session.Remove("remainingResources")
           End If
       End If
   End Sub
   Protected Sub RadScheduler1_AppointmentCommand(ByVal sender As Object, ByVal e As Telerik.Web.UI.AppointmentCommandEventArgs)
       If e.CommandName = "Cancel" Then
           RadScheduler1.Rebind()
       End If
   End Sub
```` 

  