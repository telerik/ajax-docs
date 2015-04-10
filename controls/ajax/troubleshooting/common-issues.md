---
title: Common Issues
page_title: Common Issues | UI for ASP.NET AJAX Documentation
description: Common Issues
slug: ajax/troubleshooting/common-issues
tags: common,issues
published: True
position: 1
---

# Common Issues



Here are some of the common issues one can face when using __RadAjax__.

* [Inline JavaScript in dynamically loaded user controls is missing on the page.](#Problem1)

* [A control’s skin is not loaded after an AJAX update.](#Problem2)

* [Setting the EventName property in the AJAX settings for the AJAX initiator control does not work.](#Problem3)

* [The loading panel is not displayed if you invoke multiple requests from the same AJAX initiator before the previous request finished.](#Problem4)

* [My page went blank after I fired an event from a dynamically loaded user control.](#Problem5)

* [After postback/AJAX request, my control does not keep its last state.](#Problem6)

* [After dynamically loading a user control, I cannot fire the events of any of its controls.](#Problem7)

* [LoadingPanel is not displayed when dynamically created controls in a user control trigger the AJAXrequest.](#Problem8)

* [I used RadAjax to AJAX-enable controls but they are showing up twice.](#Problem9)

* [UseSubmitBehavior for ASP Button is ignored when the control is AJAX enabled through RadAjaxManager or RadAjaxPanel](#Problem10)

## 

1. Problem: Inline JavaScript in dynamically loaded user controls is missing on the page.Solution: Wrap your script block into a __RadScriptBlock__. If the issue persists inyour case, you ought to register the script through the __ScriptManager.RegisterStartupScript()__ method.#_ASCX_

	
			  		<telerik:RadScriptBlock Id="RadScriptBlock1" runat="server">
			  		<script type="text/javascript">
			  		//your code here
			  		</script>
			  		</telerik:RadScriptBlock>
			  	



#_C#_

	
			  		protected void Page_Load(object sender, EventArgs e)
			  		{
			  		    ScriptManager.RegisterStartupScript(Page, typeof(Page), "dynamicScript", "function doSomething(){alert(1);}");
			  		}
			  	

#_VB.NET_

	
			  		Protected Sub Page_Load(sender as Object, e as EventArgs) Handles Me.Load
			  		    ScriptManager.RegisterStartupScript(Page, Page.GetType(), "dynamicScript", "function doSomething(){alert(1);}")
			  		End Sub
			  	




1. Problem: A control’s skin is not loaded after an AJAX update.Solution: This issue usually occurs when a control is displayed after an AJAX update or the skin ischanged upon AJAX update. In this case, set the control’s __EnableAjaxSkinRendering__ property to__true__ on __Page_Load__ and after every postback

#_C#_

	
					  		protected void Page_Load(object sender, EventArgs e)
					  		{
					  		    RadCalendar1.EnableAjaxSkinRendering = true;
					  		}
					  	

#_VB.NET_

	
					  		Protected Sub Page_Load(sender as Object, e as EventArgs) Handles Me.Load
					  		    RadCalendar1.EnableAjaxSkinRendring = true
					  		End Sub
					  	


For example, if a __RadGrid__ control is shown after a partial postback from a button clickthe	__EnableAjaxSkinRendering__ property of __RadGrid__ should be set to __true__	on button click. Also, keep in mind that if there are controls inside the grid, their __EnableAjaxSkinRendering__property should also be set to __true__. The code snippet below demonstrates how to load the skins of	__RadGrid__ and __RadDateTimePicker__ control placed in the __ItemTemplate__	of the grid template column after a partial postback.

#_C#_

	
					  		protected void Button1_Click(object sender, EventArgs e)
                            {
                                RadGrid1.Visible = true;
                                ((RadGrid1.MasterTableView.Items[0] as GridDataItem)["TemplateColumnUniqueName"].FindControl("RadDateTimePicker1") as RadDateTimePicker).Calendar.EnableAjaxSkinRendering = true;
                                ((RadGrid1.MasterTableView.Items[0] as GridDataItem)["TemplateColumnUniqueName"].FindControl("RadDateTimePicker1") as RadDateTimePicker).TimeView.EnableAjaxSkinRendering = true;
                                ((RadGrid1.MasterTableView.Items[0] as GridDataItem)["TemplateColumnUniqueName"].FindControl("RadDateTimePicker1") as RadDateTimePicker).DateInput.EnableAjaxSkinRendering = true;
                                RadGrid1.EnableAjaxSkinRendering = true;
                            }
					  	

#_VB.NET_

	
					  		Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click.
	                           RadGrid1.Visible = True
	                           TryCast(TryCast(RadGrid1.MasterTableView.Items(0), GridDataItem)("TemplateColumnUniqueName").FindControl("RadDateTimePicker1"), RadDateTimePicker).Calendar.EnableAjaxSkinRendering = True
	                           TryCast(TryCast(RadGrid1.MasterTableView.Items(0), GridDataItem)("TemplateColumnUniqueName").FindControl("RadDateTimePicker1"), RadDateTimePicker).TimeView.EnableAjaxSkinRendering = True
	                           TryCast(TryCast(RadGrid1.MasterTableView.Items(0), GridDataItem)("TemplateColumnUniqueName").FindControl("RadDateTimePicker1"), RadDateTimePicker).DateInput.EnableAjaxSkinRendering = True
	                           RadGrid1.EnableAjaxSkinRendering = True
                            End Sub
					  	




1. Problem: Setting the __EventName__ property in the AJAX settings for the AJAX initiator control does not work.Solution: The __EventName__ property is obsolete for__RadAjax__. If your logic strongly relies on it, you should use an__asp:UpdatePanel__ toAJAX-enable the controls instead of __RadAjax__. Another option is to wrap the updated control in a__RadAjaxPanel__ instead of using the __RadAjaxManager__ to AJAX-enable it. Then on certainclient-side events of the AJAX initiator, invoke AJAX for the corresponding __RadAjaxPanel__ manually. See the sample in[this help article]({%slug ajax/radajaxpanel/overview%}) for more information.

1. Problem: The loading panel is not displayed if you invoke multiple requests from the same AJAX initiator before the previous request finished.Solution: Modify your code to handle the__RadAjaxManager/RadAjaxPanel OnRequestStart__ client-side event.#_JavaScript_

	
						<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server"> 
    					<script type="text/javascript"> 
        					function RequstStart() { 
            					var obj = Sys.WebForms.PageRequestManager.getInstance(); 
            					if (obj.get_isInAsyncPostBack()) 
                					obj.abortPostBack();
        					} 
    					</script> 
						</telerik:RadCodeBlock>
			  		



1. Problem: My page went blank after I fired an event from a dynamically loaded user control.Solution: This can happen if user controls were improperly loaded. When loading user controls,you need to have two things in mind:

* Always recreate the last loaded user control on __Page_Init/Page_Load__.

* Assign unique IDs to the loaded controls.If the page goes blank, check if the control is always recreated. For more information about how to load user controls dynamically,please refer to [this]({%slug ajax/how-to/load-user-controls%}) topic.

1. Problem: After postback/AJAX request, my control does not keep its last state.Solution: This can happen if you are loading user controls and you do not assign unique IDs to them.In this case, the framework will generate an automatic ID which can be different than the original ID and therefore the ViewState is being lost.This is the cause for losing the last state of the control.

1. Problem: After dynamically loading a user control, I cannot fire the events of any of its controls.Solution: This is caused by improper loading of the user controls. If the control is persisted on thepage, but its events are not fired, check to see if you have assigned an ID to this control. This is required by the framework to preserve theViewState and handle the control events.

1. Problem: I have a user control that is populated with dynamically created controls. After I have AJAX-enabled the user control with __RadAjaxPanel(RadAjaxManager)__, the loading panel I have specified does not display at all when any of the dynamically created controls triggers the AJAX request (though the AJAX request itself is completed successfully and the content is updated).Solution: The most likely reason for this behavior is missing ID for the dynamically created controls.Please make sure you are assigning an ID to the controls and you should experience no further problems.

1. Problem: I used __RadAjax__ to AJAX-enable controls but they are showing up twice.Solution: This can happen if you have added controls to the Page controls collection dynamically on__Page.Render__ and the page is AJAX-enabled through __RadAjax__. The control, is rendering twicebecause __RadAjax__ is calling the __Render__ method twice in order to achieve partial rendering.The additional call of the method is for rendering the AJAX-enabled controls only. However, note that the page itself is rendered once.Therefore, you should add controls earlier in the __Page__ lifecycle.

1. Problem: __UseSubmitBehavior__ for __ASP Button__ is ignored when the control is AJAX enabled through __RadAjaxManager__ or __RadAjaxPanel__.When you enable AJAX for __ASP Button__ through __RadAjaxManager__ or __RadAjaxPanel__,the __UseSubmitBehavior__ property of the button is internally set to __false__,which causes the input element rendered for the button to always be set to "__button__".

# See Also

 * [Overview]({%slug ajax/radajaxpanel/overview%})

 * [RadCodeBlock and RadScriptBlock]({%slug ajax/radcodeblock-and-radscriptblock%})

 * [Load User Controls]({%slug ajax/how-to/load-user-controls%})

 * [Skins]({%slug ajax/appearance-and-styling/skins%})
