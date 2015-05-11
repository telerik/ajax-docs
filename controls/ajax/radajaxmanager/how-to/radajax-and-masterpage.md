---
title: RadAjax and MasterPage
page_title: RadAjax and MasterPage | RadAjax for ASP.NET AJAX Documentation
description: RadAjax and MasterPage
slug: ajax/radajaxmanager/how-to/radajax-and-masterpage
tags: radajax,and,masterpage
published: True
position: 2
---

# RadAjax and MasterPage



## 

The controls in **Telerik RadAjax** suite can be used in various scenarios with **MasterPage**. However, one should have in mind that she cannot have two **RadAjaxManagers** in master and content page at the same time. Instead, since May 2007 release of , **RadAjaxManagerProxy** control can be added and **configured design-time** the same way [as the manager]({%slug ajax/radajaxmanager/overview%}).

Of course, one can add **RadAjaxManager** control in any **ContentPage** . Unfortunately not all possible scenarios can be handled when using **RadAjaxManager** this way - for example a control in the master page cannot be ajaxified. **RadAjaxManager** can handle only cases when there controls to ajaxify are beneath in the manager control hierarchy, so we strongly recommend placing **RadAjaxManager** in **MasterPage** and adding proxy controls in content pages.

Find below a **RadAjaxManagerProxy** within a content page example:

````ASPNET
<telerik:RadAjaxManagerProxy ID="AjaxManagerProxy1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="DropDownList1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="DetailsView1" />
	            <telerik:AjaxUpdatedControl ControlID="GridView1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="GridView1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="GridView1" />
	            <telerik:AjaxUpdatedControl ControlID="DetailsView1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManagerProxy>
````



>note  **RadAjaxManagerProxy** control can be used for design-time configuration only. It does not have a client-side object or methods!
>


>note Should you need the server or client-side **RadAjaxManager** functionality (like **ResponseScripts** collection, **ajaxRequest** function) you can get the " **master** " manager instance via **Server-Side**  **GetCurrent** method from the **ContentPage** code-behind:
>RadAjaxManager.GetCurrent(Page)
>


Use server-side code block in your javascript function to call the master manager **AjaxRequest** function from the ContentPage as well:

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function myContentClickHandler() {
	        $find("<%= RadAjaxManager.GetCurrent(Page).ClientID %>").ajaxRequest("content");
	    }
	</script>
</telerik:RadCodeBlock>
````



As to the AJAX settings, they still can be added programmatically - RadAjax controls can be accessed at ContentPage's code-behind using **FindControl** method of **MasterPage** object. However, in case you use a lot of **ContentPages**, you should write the same "finding" code in all the places. A better approach is to set the **Manager** (and the **Loading Panel** if used) as a property and access it directly.

A live example with *RadAjax *and **MasterPage** can be found [here](http://demos.telerik.com/aspnet-ajax/ajax/examples/manager/usercontrol/defaultcs.aspx).

## See Also

 * [MasterPages: Ajaxify and Update Controls in Master and Content Page]({%slug ajax/radajaxmanager/how-to/masterpages:-ajaxify-and-update-controls-in-master-and-content-page%})

 * [MasterPages: Initiating Requests from one ContentPlaceHolder and Loading/Updating Controls in another]({%slug ajax/radajaxmanager/how-to/masterpages:-initiating-requests-from-one-contentplaceholder-and-loading/updating-controls-in-another%})
