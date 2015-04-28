---
title: Populate Static Content
page_title: Populate Static Content | RadNotification for ASP.NET AJAX Documentation
description: Populate Static Content
slug: notification/setting-content/populate-static-content
tags: populate,static,content
published: True
position: 0
---

# Populate Static Content




Content can be added to **RadNotification** in multiple ways and is displayed in the following order of precedence:

1. Setting simple content:
	1. Setting the **Text** property:
		
		__C#__

	        RadNotification1.Text = "Sample Notification text";
	        RadNotification1.TitleIcon = "info";
	        RadNotification1.ContentIcon = "info";

		__VB__

	        RadNotification1.Text = "Sample Notification text"
	        RadNotification1.TitleIcon = "info"
	        RadNotification1.ContentIcon = "info"



	1. Setting the **Title** property:

		__C#__

	        RadNotification1.Text = "Sample Notification text";
	        RadNotification1.Title = "Title";
	        RadNotification1.TitleIcon = "info";
	        RadNotification1.ContentIcon = "info";

		__VB__

	        RadNotification1.Text = "Sample Notification text"
	        RadNotification1.Title = "Title"
	        RadNotification1.TitleIcon = "info"
	        RadNotification1.ContentIcon = "info"
		
		![Title and Text](images/radnotification-title-and-text.png)


1. Setting rich content:

	1. Setting content declaratively between the opening and closing tags of the notification's ContentTemplate:
	
		__ASP.NET__

		    <telerik:RadNotification runat="server" ID="RadNotification1" VisibleOnPageLoad="true"
		        TitleIcon="info" ContentIcon="info" Width="250px" Height="100px">
		        <ContentTemplate>
		            Rich content:<br />
		            <asp:Button ID="Button1" Text="Button in a notification" runat="server" />
		        </ContentTemplate>
		    </telerik:RadNotification>

		![radnotification-rich-content](images/radnotification-rich-content.png)



	1. Setting content dynamically through the code-behind:

		__ASP.NET__

		    <telerik:RadNotification runat="server" ID="RadNotification2" VisibleOnPageLoad="true"
		        Width="250px" Height="100px">
		        <ContentTemplate>
		        </ContentTemplate>
		    </telerik:RadNotification>


		>caution If you are planning to add controls dynamically you need to declare an empty **ContentTemplate** , since if it is not present **RadNotification** automatically detects it and enters into simple content mode and you will not be able to add controls in it.

		
		__C#__

	        RadNotification1.ContentContainer.Controls.Add(new LiteralControl("Rich content:<br />"));
	        Button button = new Button();
	        button.ID = "Button1";
	        button.Text = "Button in a notification";
	        RadNotification1.ContentContainer.Controls.Add(button);
	        RadNotification1.TitleIcon = "info";
        	RadNotification1.ContentIcon = "info";

		__VB__

	        RadNotification1.ContentContainer.Controls.Add(new LiteralControl("Rich content:<br />"))
	        Dim button As new Button()
	        button.ID = "Button1"
	        button.Text = "Button in a notification"
	        RadNotification1.ContentContainer.Controls.Add(button)
	        RadNotification1.TitleIcon = "info"
	        RadNotification1.ContentIcon = "info"


