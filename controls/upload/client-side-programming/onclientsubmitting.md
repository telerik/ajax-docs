---
title: OnClientSubmitting
page_title: OnClientSubmitting | RadUpload for ASP.NET AJAX Documentation
description: OnClientSubmitting
slug: upload/client-side-programming/onclientsubmitting
tags: onclientsubmitting
published: True
position: 9
---

# OnClientSubmitting



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The **OnClientSubmitting** client-side event occurs when a postback that uploads files is about to occur.

The event handler receives two parameters:

1. The instance of the **RadProgressManager** that fires the event.

1. An eventArgs parameter containing the following methods:

	* **set_cancel** lets you prevent the postback.

	* **get_cancel** returns whether the postback has been cancelled.

The following example uses the **OnClientSubmitting** event to prevent the postback if the files to upload are invalid:

````ASPNET
<script type="text/javascript">
    function ValidateSubmission(source, eventArgs) {
        var upload = $find("<%= RadUpload1.ClientID %>");
        eventArgs.set_cancel(!upload.validateExtensions());
        if (eventArgs.get_cancel())
            alert("Submission blocked: one or more files have the wrong type!");
    }
</script>

<telerik:radprogressmanager id="RadProgressManager1" runat="server" onclientsubmitting="ValidateSubmission" />
<telerik:radupload id="RadUpload1" runat="server" allowedfileextensions=".prn,.txt" />
<asp:Button ID="Button1" runat="server" Text="Submit" />
	    
````



# See Also

 * [How to Prevent Uploads]({%slug upload/how-to/how-to-prevent-uploads%})[](048DD8B2-210A-4239-8CBE-00B6082F1B78)
