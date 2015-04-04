---
title: How to Use RadWindow with AJAX
page_title: How to Use RadWindow with AJAX | UI for ASP.NET AJAX Documentation
description: How to Use RadWindow with AJAX
slug: window/application-scenarios/how-to-use-radwindow-with-ajax
tags: how,to,use,radwindow,with,ajax
published: True
position: 0
---

# How to Use RadWindow with AJAX



__RadWindow__, being a container control, often has to host a number of controls that need to perform AJAX requests or be updated via AJAX. This sometimes presents a difficulty, because the __RadWindow__'s content is moved in the DOM tree when it is created - i.e. the child controls are not in the same place in the generated HTML where they are in the ASPX markup. This may break the functionality of the update panels, as they use the innerHTML property to update their child controls, which have moved and are not available. The result from attempting to perform such an update may vary - from nothing to a server error that the update panel cannot be unregistered. For more information on the latter see[this KB article](http://www.telerik.com/support/kb/aspnet-ajax/window/cannot-unregister-updatepanel-with-id-updatepanelid-since-it-was-not-registered-with-the-scriptmanager.aspx).

## When using the NavigateUrl

When the __NavigateUrl__ property is used to load an entire page in the __RadWindow__ it acts just like an iframe would - it creates a separate document for the other page and it cannot be accessed directly from the main page, especially in the code-behind. In this case using AJAX in the content page is pretty straightforward - just do it as if the page is loaded in the browser. You can freely use asp UpdatePanels, the Telerik __RadAjaxPanel__ or __RadAjaxManager__ with its settings as required by the current scenario.

The difficulty in this scenario is if you need to communicate with the parent page where the __RadWindow__ is located. This can be achieved easily via JavaScript - you could [call a function from the main page]({%slug window/application-scenarios/calling-functions-in-windows%}) that will perform the needed actions there and vice-versa.

## When using the ContentTemplate

When the __ContentTemplat__e of the __RadWindow__ is used the controls inside are still a part of the main page while the __RadWindow__ acts as any other [INaming container](http://msdn.microsoft.com/en-us/library/system.web.ui.inamingcontainer.aspx). The only major difference is that it renders as a direct child of the form element when it is first shown so that it can pop up above the other elements without inheriting any restrictions and limitations. If you wrap the entire __RadWindow__ in an update panel with the concept that the controls inside will perform an AJAX request or will be updated by one will no longer work, as they will not be inside the update panel actually.

What you should do in this scenario is to place the UpdatePanel (or __RadAjaxPanel__) inside the __ContentTemplate__. For example:

````ASPNET
	    <telerik:radwindow runat="server" id="RadWindow1" visibleonpageload="true">
	        <ContentTemplate>
	            <asp:UpdatePanel ID="Updatepanel1" runat="server" UpdateMode="Conditional">
	                <ContentTemplate>
	                    <asp:Button ID="Button1" Text="Click for AJAX" runat="server" OnClick="Button1_Click" />
	                    <br />
	                    <asp:Label ID="Label1" Text="I will be updated" runat="server" />
	                </ContentTemplate>
	            </asp:UpdatePanel>
	        </ContentTemplate>
	    </telerik:radwindow>
	    <asp:Label ID="Label2" Text="I will not be updated" runat="server" />
````





````C#
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        Label1.Text = DateTime.Now.ToString();
	        Label2.Text = DateTime.Now.ToString();
	    }
````
````VB.NET
	    Protected Sub Button1_Click(sender As Object, e As System.EventArgs) Handles Button1.Click
	        Label1.Text = DateTime.Now.ToString()
	        Label2.Text = DateTime.Now.ToString()
	    End Sub
	    #End Region
	End Class




If you are using the __RadAjaxManager__ you should *not* add the __RadWindow__ as an AJAX initiator or as an updated control. Instead, you should directly use the controls from its __ContentTemplate__ in the AJAX settings.

>tip A common problem when using a RadWindow instance with AJAX is that the popup still closes, even though its content is properly configured to invoke AJAX requests. The most common cause for this is that the RadWindow markup is still inside an UpdatePanel or AjaxSetting, so it disposes with the response, and thus its popup element is lost because it is generated with HTML only when it shows for the first time.
>To avoid this, you must make sure such RadWindows are not included in the partial page rendering at all, only the controls in their ContentTemplates should be.	Common causes are UpdatePanels with UpdateMode set to Always that include the RadWindow, or UpdatePanels/AjaxSettings from user controls or master pages on a higher level	and you should move the RadWindow out of them, or call its show() client-side method again when needed.
>


## In Conclusion

Generally placing the __RadWindow__ in an update panel (or __RadAjaxPanel__, or adding it to the __RadAjaxManager__'s AJAX settings) is not recommended, because the rendered HTML is moved from its original location in the markup. This will most often result in the expected functionality simply not working. There is also little need for such a step - the __RadWindow__ is a client-side object and thus it should be manipulated via JavaScript and therefore changing server-side properties during runtime is rarely needed. It is possible, but if you place a __RadWindow__ in an update panel please examine the guidelines above first.

# See Also

 * [The difference between the ContentTemplate and the NavigateUrl](http://demos.telerik.com/aspnet-ajax/window/examples/contenttemplatevsnavigateurl/defaultcs.aspx)

 * [Calling functions in windows]({%slug window/application-scenarios/calling-functions-in-windows%})

 * [Cannot unregister UpdatePanel with ID 'UpdatePanelID' since it was not registered with the ScriptManager error](http://www.telerik.com/support/kb/aspnet-ajax/window/cannot-unregister-updatepanel-with-id-updatepanelid-since-it-was-not-registered-with-the-scriptmanager.aspx)
