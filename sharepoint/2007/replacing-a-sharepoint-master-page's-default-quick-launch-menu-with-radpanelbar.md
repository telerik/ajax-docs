---
title: Replacing a SharePoint master page's default Quick Launch menu with RadPanelbar
page_title: Replacing a SharePoint master page's default Quick Launch menu with RadPanelbar | UI for ASP.NET AJAX Documentation
description: Replacing a SharePoint master page's default Quick Launch menu with RadPanelbar
slug: sharepoint/2007/replacing-a-sharepoint-master-page's-default-quick-launch-menu-with-radpanelbar
tags: replacing,a,sharepoint,master,page's,default,quick,launch,menu,with,radpanelbar
published: True
position: 6
---

# Replacing a SharePoint master page's default Quick Launch menu with RadPanelbar




This topic explains how to switch the SharePoint's Quick Launch menu in SharePoint site's default.master page with RadPanelbar. The control exposes advanced client and server-side capabilities from which your SharePoint site can benefit (without any extra coding).

In order to substitute the Quick launch UI of the SharePoint master page, follow the steps specified below (note that RadPanelBar will wrapped in the same navigation block and will be bound to the same data source as the standard menu for navigation):

1. Following the directions from [this topic]({%slug sharepoint/2007/deploying-telerik-ui-for-asp.net-ajax%}) to add the necessary SafeControl and http handler/module definitions in the web.config of the SharePoint site. Note that this step can be skipped in case you used the automatic SharePoint 2010 installer of Telerik UI for ASP.NET AJAX because the installer will perform these actions instead of you.

1. Launch Office SharePoint designer and open the desired SharePoint site

1. Within the Folder List tool window expand the tree until the master pages folder is visible. A typical location is **http://server_name/_catalogs/masterpage**

	![](images/moss2.gif)

1. Open the master page currently used by your site (e.g. default.master). If prompted to check out the file select “Yes”.

1. Insert the following @Register directive in the default.master page:

	**ASP.NET**

		<%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI, Version=x.x.x.x, Culture=neutral, PublicKeyToken=121fae78165ba3d4" %>




1. In the default.master page, locate the ContentPlaceHolder control with id *PlaceHolderLeftNavBar*.

1. Inside the ContentPlaceHolder specified in the previous point, designate the menu control with id *QuickLaunchMenu*.

1. Delete or comment the markup of the default menu control and insert the RadPanelbar definition as specified below:

	**ASP.NET**

	    <%--
	        <SharePoint:AspMenu
	           id="QuickLaunchMenu"
	           DataSourceId="QuickLaunchSiteMap"
	           runat="server"
	           Orientation="Vertical"
	           StaticDisplayLevels="2"
	           ItemWrap="true"
	           MaximumDynamicDisplayLevels="0"
	           StaticSubMenuIndent="0"
	           SkipLinkText=""
	        >
	        <LevelMenuItemStyles>
	           <asp:MenuItemStyle CssClass="ms-navheader"/>
	           <asp:MenuItemStyle CssClass="ms-navitem"/>
	        </LevelMenuItemStyles>
	        <LevelSubMenuStyles>
	           <asp:SubMenuStyle CssClass="ms-navSubMenu1"/>
	           <asp:SubMenuStyle CssClass="ms-navSubMenu2"/>
	        </LevelSubMenuStyles>
	        <LevelSelectedStyles>
	           <asp:MenuItemStyle CssClass="ms-selectednavheader"/>
	           <asp:MenuItemStyle CssClass="ms-selectednav"/>
	        </LevelSelectedStyles>
	        </SharePoint:AspMenu>
	    --%>
	    <telerik:RadPanelBar ID="QuickLaunchPanelBar" runat="server" DataSourceID="QuickLaunchSiteMap"
	        Skin="Windows7" />


	Keep in mind that you need to set the same *DataSourceID *value for RadPanelbar to display the same site navigation structure in it.

1. Find the SPNavigationManager control with id *QuickLaunchNavigationManager*, and alter its *QuickLaunchControlId *property to point to our RadPanelbar's id.

	**XML**

		<sharepoint:spnavigationmanager id="QuickLaunchNavigationManager" runat="server"
	            quicklaunchcontrolid="QuickLaunchPanelBar" containedcontrol="QuickLaunch" enableviewstate="false">
	                ... 	




1. Save/check-in the default.master page and open an arbitrary page from the same SharePoint site to see the modification you applied.

The same sequence of steps is used to replace the default navigation on [Telerik's SharePoint 2010 demo site](http://sharepoint.telerik.com/Pages/default.aspx).
