---
title: Uploading Files with AJAX
page_title: Uploading Files with AJAX | RadUpload for ASP.NET AJAX Documentation
description: Uploading Files with AJAX
slug: upload/uploading-files/uploading-files-with-ajax
tags: uploading,files,with,ajax
published: True
position: 3
---

# Uploading Files with AJAX



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


**RadUpload** cannot upload files using AJAX calls. This is a limitation of the **XmlHttpRequest** component, used in all AJAX frameworks for asynchronous calls to the application. In order to upload a file your application must perform a **full page postback**.

If you have automatically AJAX-enabled buttons or other controls that normally perform postbacks placed in **UpdatePanel**, **RadAjaxPanel**, or **RadGrid**, you can use one of the following approaches to make the control to perform postbacks again:

## Workaround for ASP.NET AJAX

You can create a **PostBackTrigger** in the **UpdatePanel** for the button that initiates postback:

````ASPNET
<asp:UpdatePanel runat="server" ID="UpdatePanel1">
    <ContentTemplate>
        <telerik:radupload runat="server" id="RadUpload1" />
        <asp:Button runat="server" ID="ButtonSubmit" Text="Postback" />
    </ContentTemplate>
    <Triggers>
        <asp:PostBackTrigger ControlID="ButtonSubmit" />
    </Triggers>
</asp:UpdatePanel>
````



## Workaround for RadAjaxPanel or RadAjaxManager

Attach an event handler to the **OnRequestStart** client-side event of the **RadAjaxPanel / RadAjaxManager**, which disables the AJAX functionality when a specific button is clicked.

>tip The **get_eventTarget()** method of the args parameter contains the **UniqueID** of the clicked button.
>


````ASPNET
<radscriptblock id="RadScriptBlock1" runat="server">
	<script type="text/javascript">
		// on upload button click temporarily disables ajax to perform
		// upload actions
		function conditionalPostback(sender, args) {
			if (args.get_eventTarget() == "<%= ButtonSubmit.UniqueID %>") {
				args.set_enableAjax(false);
			}
		}
	</script>
</radscriptblock>
    <telerik:radajaxpanel runat="server" id="RadAjaxPanel1" clientevents-onrequeststart="conditionalPostback">
 <telerik:RadUpload runat="server" id="RadUpload1" />
 <asp:Button id="Button1" runat="server" text="Upload" />
</telerik:radajaxpanel>
````



## Workaround for RadGrid classic

**RadGrid for ASP.NET AJAX** no longer supports the **EnableAjax** feature. However, if your application mixes **RadUpload for ASP.NET AJAX** controls with **RadGrid "classic"**, you can use the same technique as in the previous workaround for buttons inside **RadGrid**. Since the button that initiates a postback is in a template, you cannot use its UniqueID directly. Instead, you must check for its ID.You must ensure that you have no other buttons with the same ID on the page.

>tip  **UpdateButton** and **PerformInsertButton** are the IDs of the integrated in **RadGrid** Update and Insert buttons. If you have custom edit form with buttons that have different IDs, use their IDs instead.
>


````ASPNET
<script type="text/javascript">
    //on insert and update buttons click temporarily disables ajax to perform upload actions
    function conditionalPostback(sender, args) {
        var re = new RegExp("\.UpdateButton$|\.PerformInsertButton$", "ig");
        if (sender.EventTarget.match(re)) {
            sender.EnableAjax = false;
        }
    }
</script>
<telerik:radprogressmanager id="RadProgressManager1" runat="server" />
<radg:radgrid runat="server" id="RadGrid1" enableajax="true">
     <ClientSettings>
       <ClientEvents OnRequestStart="conditionalPostback" />
     </ClientSettings>
     <MasterTableView >
       <Columns>
         <radg:GridEditCommandColumn />
         <radg:GridTemplateColumn UniqueName= "Upload">
           <ItemTemplate>
              ...
           </ItemTemplate>
           <EditItemTemplate >
              <telerik:RadUpload id="RadUpload1" runat="server" />
           </EditItemTemplate >
         </radg:GridTemplateColumn >
       </Columns>
       <EditFormSettings >
         <EditColumn UniqueName="EditCommandColumn1">
         </EditColumn>
       </EditFormSettings >
     </MasterTableView >
</radg:radgrid>
````



## Workaround for RadGrid for ASP.NET AJAX

Since **RadGrid for ASP.NET AJAX** no longer supports the **EnableAjax** feature, one possible way of ajax-ifying it is by placing it inside a **RadAjaxPanel** for example (the workaround is similar when using **RadAjaxManager**).

If you have button or other control, which normally does postbacks, placed in the ajax-ified **RadGrid** you need to attach an event handler for the **OnRequestStart** client-side event of the **RadAjaxPanel** (**RadAjaxManager**), which will disable the AJAX functionality if a specific button is clicked. What is more AJAX can disabled only if there are files selected for upload. For this purpose the client ID of the RadUpload is stored in a global client-side variable as the Grid triggered in Edit Mode.

````ASPNET
<telerik:radscriptblock id="RadScriptBlock1" runat="server">
	<script type="text/javascript">
	    //On insert and update buttons click temporarily disables ajax to perform upload actions
	    function conditionalPostback(sender, args) {
	        var theRegexp = new RegExp("\.UpdateButton$|\.PerformInsertButton$", "ig");
	
	        if (args.get_eventTarget().match(theRegexp)) {
	            var upload = $find(window['UploadId']);
	
	            //AJAX is disabled only if file is selected for upload
	            if (upload.getFileInputs()[0].value != "") {
	                args.set_enableAjax(false);
	            }
	        }
	    }
	</script>
</telerik:radscriptblock>
<telerik:radajaxpanel id="RadAjaxPanel1" runat="server" clientevents-onrequeststart="conditionalPostback">
	<telerik:radprogressmanager id="RadProgressManager1" runat="server"/>
	<telerik:radgrid runat="server" id="RadGrid1" onitemdatabound="RadGrid1_ItemDataBound">
	 <mastertableview>
	  <columns>
	   <telerik:grideditcommandcolumn />
	   <telerik:gridtemplatecolumn uniquename="Upload">
		<itemtemplate> ... </itemtemplate>
		<edititemtemplate>
		 <telerik:radupload id="RadUpload1" runat="server" />
		</edititemtemplate>
	   </telerik:gridtemplatecolumn>
	   </columns>
	   <editformsettings>
		 <editcolumn uniquename="EditCommandColumn1"></editcolumn>
	   </editformsettings>
	   </mastertableview>
	</telerik:radgrid>
<telerik:radajaxpanel> 
````







````C#
	
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        RadUpload upload = e.Item.FindControl("RadUpload1") as RadUpload;
        RadAjaxPanel1.ResponseScripts.Add(string.Format("window['UploadId'] = '{0}';", upload.ClientID));
    }
} 
````
````VB.NET
	     
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode Then
        Dim upload As RadUpload = TryCast(e.Item.FindControl("RadUpload1"), RadUpload)
        RadAjaxPanel1.ResponseScripts.Add(String.Format("window['UploadId'] = '{0}';", upload.ClientID))
    End If
End Sub

````


## Alternative workaround for RadAjaxPanel (and RadGrid classic)

**RadAjax** automatically replaces all instances of "`__doPostBack`" inside AJAX-enabled controls such as those that are placed inside **RadAjaxPanel**. If you create a JavaScript function which calls `__doPostBack` inside its body and call that function instead of `__doPostBack`, you can perform postbacks from AJAX-enabled controls.

>tip If you place the realPostBack function defined in the example inside a user control, make sure that it is not placed inside **RadAjaxPanel** (or inside **RadGrid classic** ), because it will automatically replace the call to `__doPostBack` in the realPostBack function body. In this case, you must declare the realPostBack function in the ASPX page.
>


````ASPNET
	     
<script type="text/javascript">
    function realPostBack(eventTarget, eventArgument) {
        **doPostBack(eventTarget, eventArgument);
    }
</script>
<telerik:RadAjaxPanel runat="server" id="RadAjaxPanel1">
 <asp:Button runat="server" id="ButtonSubmit" text="Upload" />
 <telerik:RadUpload runat="server" id="RadUpload1" />
</telerik:RadAjaxPanel> 
	
	
````







````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostback)
    {
        GetPostBackEventReference(this);
        ButtonSubmit.Attributes.Add("onclick",
          string.Format("realPostBack('{0}', ''); return false;", ButtonSubmit.UniqueID));
    }
} 
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If Not IsPostBack Then
        GetPostBackEventReference(Me)
        ButtonSubmit.Attributes.Add("onclick", _
             String.Format("realPostBack('{0}', ''); return false;", ButtonSubmit.UniqueID))
    End If
End Sub
````


# See Also

 * [Known Limitations]({%slug upload/uploading-files/known-limitations%})
