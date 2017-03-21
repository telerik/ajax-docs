---
title: Controlling the Point of Collapsing All Nodes
page_title: Controlling the Point of Collapsing All Nodes | RadNavigation for ASP.NET AJAX Documentation
description: Controlling the Point of Collapsing All Nodes
slug: navigation/how-to/controlling-the-point-of-collapsing-all-nodes
tags: controlling,point,collapsing,all,nodes
published: True
position: 1
---

# Controlling the Point of Collapsing All Nodes

By default the **RadNavigation** will collapse all of its Nodes under the sandwich button when the window's width is less than 720px. You can control this behavior by setting the minimal width value with the **Navigation**'s **set_minWidth** client-side method. Calling the method with a smaller value than the default (720) would allow the Nodes to remain visible until the window's width reaches the value set:


````ASPNET
<div class="container">
    <telerik:RadNavigation runat="server" ID="RadNavigation1" OnClientLoad="OnClientLoad">
        <Nodes>
            <telerik:NavigationNode Text="RootNode1"></telerik:NavigationNode>
            <telerik:NavigationNode Text="RootNode2"></telerik:NavigationNode>
            <telerik:NavigationNode Text="RootNode3"></telerik:NavigationNode>
            <telerik:NavigationNode Text="RootNode4"></telerik:NavigationNode>
            <telerik:NavigationNode Text="RootNode5"></telerik:NavigationNode>
            <telerik:NavigationNode Text="RootNode6"></telerik:NavigationNode>
            <telerik:NavigationNode Text="RootNode7"></telerik:NavigationNode>
            <telerik:NavigationNode Text="RootNode8"></telerik:NavigationNode>
            <telerik:NavigationNode Text="RootNode9"></telerik:NavigationNode>
            <telerik:NavigationNode Text="RootNode10"></telerik:NavigationNode>
        </Nodes>
    </telerik:RadNavigation>
</div>
<script type="text/javascript">
    function OnClientLoad(sender) {
        sender.set_minWidth(300);
    }
</script>
````

If you need to change it dynamically, you must call the `repaint()` method for the changes to take effect immediately:

````ASP.NET
<script>
	function changeBreakpoint() {
		var nav = $find("<%=RadNavigation1.ClientID%>");
		nav.set_minWidth(1000);
		nav.repaint();
	}
</script>
<telerik:RadNavigation runat="server" ID="RadNavigation1">
	<Nodes>
		<telerik:NavigationNode Text="the first node"></telerik:NavigationNode>
		<telerik:NavigationNode Text="the second node"></telerik:NavigationNode>
		<telerik:NavigationNode Text="the third node"></telerik:NavigationNode>
		<telerik:NavigationNode Text="the fourth node"></telerik:NavigationNode>
		<telerik:NavigationNode Text="the fifth node"></telerik:NavigationNode>
		<telerik:NavigationNode Text="the sixth node"></telerik:NavigationNode>
		<telerik:NavigationNode Text="the seventh node"></telerik:NavigationNode>
		<telerik:NavigationNode Text="the eighth node"></telerik:NavigationNode>
		<telerik:NavigationNode Text="the ninth node"></telerik:NavigationNode>
		<telerik:NavigationNode Text="the tenth node"></telerik:NavigationNode>
	</Nodes>
</telerik:RadNavigation>
<asp:Button ID="Button1" Text="change breakpoint dynamically" OnClientClick="changeBreakpoint(); return false;" runat="server" />
````

# See Also
