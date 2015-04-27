---
title: Overview
page_title: Mobile Support Overview | RadRotator for ASP.NET AJAX Documentation
description: Overview
slug: rotator/mobile-support/overview
tags: overview
published: True
position: 0
---

# Mobile Support Overview



This article explains the **responsive design capabilities RadRotator offers**. The control supports **responsive design since Q2 2014**.

Generally, responsive design means that the page and its content are able to adapt to different screen resolutions without deteriorating the user experience. This often includes changing the font size and having dimensions set in percent.

## Responsive design

**RadRotator** is a control that moves its content dynamically in order to display parts of it in a sequence. The size of the rotator and its items is usually set in pixels according to the instructions in the [How to configure RadRotator]({%slug rotator/getting-started/overview%}) help article so that the control can calculate how much items will be visible in its view port.

**RadRotator** supports setting its **Width** property in percentage as of the Q2 2014 release of UI for ASP.NET AJAX. This means that the control can adapt to the width of the current screen resolution. You can try the responsive capabilities of **RadRotator** with **Example 1**.

Example 1: **RadRotator** with 100% width.

````ASPNET
	        <telerik:RadRotator runat="server" ID="RadRotator1" RotatorType="Buttons" Width="100%" ItemWidth="200px" Height="50px">
	            <ItemTemplate>
	                RadRotatorItem <%# Container.DataItem %>
	            </ItemTemplate>
	        </telerik:RadRotator>
````





````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!IsPostBack)
	        {
	            RadRotator1.DataSource = Enumerable.Range(1, 20);
	            RadRotator1.DataBind();
	        }
	    }
````
````VB
	    Protected Sub Page_Load(sender As Object, e As EventArgs)
	        If Not IsPostBack Then
	            RadRotator1.DataSource = Enumerable.Range(1, 20)
	            RadRotator1.DataBind()
	        End If
	    End Sub
	#End Region
	
	End Class




>note When you set the width of **RadRotator** in percentage the number of items in its view port cannot be controlled, because the width will change dynamically, however the items' width is fixed. As a result the first and last item in the view port may be partially visible.
>


## Responsiveness of Carousel and CoverFlow rotators

If you have set the RotatorType property to **Carousel**, **CarouselButtons**, **CoverFlow** or **CoverFlowButtons**, changing the screen width will trigger the resizing of the rotator container, however, the position of the items inside will remain the same and part of them may be hidden. You can handle this scenario manually by attaching to an event that is fired when the width of the rotator changes and calling the Client-Side function **repaint()**. **Example 2** shows a possible approach to achieve this.

Example 2: **RadRotator** is repainted on window resize so that its items are adjusted according to its size.

````ASPNET
	        <script type="text/javascript">
	            var rotator = null;
	            function OnClientLoad(sender, args) {
	                rotator = sender;
	            }
	
	            window.onresize = function () {
	                rotator.repaint();
	            }
	        </script>
	        <telerik:RadRotator runat="server" ID="RadRotator2" RotatorType="CarouselButtons" Width="100%" ItemWidth="200px" Height="450px" 
	            OnClientLoad="OnClientLoad" >
	            <ItemTemplate>
	                RadRotatorItem <%# Container.DataItem %>
	            </ItemTemplate>
	        </telerik:RadRotator>
````



>note The **repaint()** functions redraws the entire rotator control. If you call it repeatedly you will most probably encounter performance issues. This is why it issuggested to invoke this function with an interval to achieve as smooth resizing as possible.
>


# See Also

 * [RadRotator - Elastic capabilities]({%slug rotator/mobile-support/elastic-capabilities%})

 * [RadRotator - How to configure RadRotator]({%slug rotator/getting-started/overview%})

 * [RadRotator - RadRotator types]({%slug rotator/functionality/radrotator-types%})
