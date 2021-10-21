---
title: Mega Drop-Down RadMenu Bind to Xml DataSource
description: Mega Drop-Down RadMenu Bind to Xml DataSource . Check it now!
type: how-to
page_title: Mega Drop-Down RadMenu Bind to Xml DataSource
slug: menu-mega-drop-down-menu-bind-to-xml-datasource-
res_type: kb
---

  
## How to

Implement Mega Drop-Down Menu like the on-line [demo](http://demos.telerik.com/aspnet-ajax/menu/examples/megadropdown/defaultcs.aspx) and bind it to an xml file using RadSiteMap control.  (included both C# and VB version of the code)   
   
## Solution

Binding an already existing xml file to a Mega Drop-Down menu is much easier than creating the DataSource in the markup. Therefore, we decided to provide an example how this could be implemented using an xml file and the RadSitemap control. This example also demonstrates how a [custom attribute]({%slug menu/radmenu-items/custom-attributes%}) (*ImagePosition*)
can be applied to the xml file and then used in the code behind. The
current example provides the position of the image (the value 1 assigns
the position at the last place while the value of 0 assigns the position
of the image at the first place).       
 
````ASPX
<div id="MegaDropDown">
	<telerik:RadMenu ID="RadMenu1"  runat="server" OnDataBound="RadMenu1_DataBound">
	</telerik:RadMenu>
</div>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        RadMenu1.LoadContentFile("menu.xml");
        RadMenu1.DataBind();
    }
}

protected void RadMenu1_DataBound(object sender, EventArgs e)
{
    RadMenu menu = (RadMenu)sender;
    foreach (RadMenuItem item in menu.Items)
    {
        RadSiteMap sm = new RadSiteMap();
        PopulateSiteMap(sm, null, item);

        //sitemap settings to have the menu items appear in columns 

        SiteMapLevelSetting rootLevelSetting = new SiteMapLevelSetting(0);
        rootLevelSetting.ListLayout.RepeatColumns = 3;
        rootLevelSetting.ListLayout.RepeatDirection = SiteMapRepeatDirection.Vertical;
        sm.LevelSettings.Add(rootLevelSetting);
        item.Items.Clear();
        RadMenuItem childItem = new RadMenuItem();



        Panel catWrapper = new Panel();
        //catWrapper.CssClass = "Wrapper";
        catWrapper.Width = Unit.Pixel(450);
        catWrapper.Controls.Add(sm);

        if ((item.Attributes["ImagePosition"] != null) && (item.Attributes["GroupImageUrl"] != null))
        {
            Image img1 = new Image();
            img1.ImageUrl = item.Attributes["GroupImageUrl"];
            catWrapper.Controls.AddAt(int.Parse(item.Attributes["ImagePosition"]), img1);
        }


        childItem.Controls.Add(catWrapper);
        item.Items.Add(childItem);
    }
}

private static void PopulateSiteMap(RadSiteMap sm, RadSiteMapNode node, RadMenuItem item)
{
    if (node == null)
    {
        foreach (RadMenuItem child in item.Items)
        {
            node = new RadSiteMapNode(child.Text, child.NavigateUrl);
            sm.Nodes.Add(node);
            if (child.Items.Count > 0)
            {
                PopulateSiteMap(sm, node, child);
            }
        }
    }
    else
    {
        foreach (RadMenuItem child in item.Items)
        {
            node.Nodes.Add(new RadSiteMapNode(child.Text, child.NavigateUrl));
            if (child.Items.Count > 0)
            {
                PopulateSiteMap(sm, node, child);
            }
        }
    }
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
    If Not Page.IsPostBack Then
        RadMenu1.LoadContentFile("menu.xml")
        RadMenu1.DataBind()
    End If
End Sub

Protected Sub RadMenu1_DataBound(sender As Object, e As EventArgs) Handles RadMenu1.DataBound
    Dim menu As RadMenu = DirectCast(sender, RadMenu)
    For Each item As RadMenuItem In menu.Items
        Dim sm As New RadSiteMap()
        PopulateSiteMap(sm, Nothing, item)

        'sitemap settings to have the menu items appear in columns 

        Dim rootLevelSetting As New SiteMapLevelSetting(0)
        rootLevelSetting.ListLayout.RepeatColumns = 3
        rootLevelSetting.ListLayout.RepeatDirection = SiteMapRepeatDirection.Vertical
        sm.LevelSettings.Add(rootLevelSetting)
        item.Items.Clear()
        Dim childItem As New RadMenuItem()



        Dim catWrapper As New Panel()
        'catWrapper.CssClass = "Wrapper";
        catWrapper.Width = Unit.Pixel(450)
        catWrapper.Controls.Add(sm)

        If (item.Attributes("ImagePosition") IsNot Nothing) AndAlso (item.Attributes("GroupImageUrl") IsNot Nothing) Then
            Dim img1 As New Image()
            img1.ImageUrl = item.Attributes("GroupImageUrl")
            catWrapper.Controls.AddAt(Integer.Parse(item.Attributes("ImagePosition")), img1)
        End If


        childItem.Controls.Add(catWrapper)
        item.Items.Add(childItem)
    Next
End Sub

Private Shared Sub PopulateSiteMap(sm As RadSiteMap, node As RadSiteMapNode, item As RadMenuItem)
    If node Is Nothing Then
        For Each child As RadMenuItem In item.Items
            node = New RadSiteMapNode(child.Text, child.NavigateUrl)
            sm.Nodes.Add(node)
            If child.Items.Count > 0 Then
                PopulateSiteMap(sm, node, child)
            End If
        Next
    Else
        For Each child As RadMenuItem In item.Items
            node.Nodes.Add(New RadSiteMapNode(child.Text, child.NavigateUrl))
            If child.Items.Count > 0 Then
                PopulateSiteMap(sm, node, child)
            End If
        Next
    End If
End Sub
````

````menu.xml
<?xml version="1.0" encoding="utf-8" ?>
<Menu>
	<Group>
		<Item Text="Products" GroupImageUrl="~/Img/interior.png" ImagePosition="1" >
			<Group>
				<Item Text="Furniture">
					<Group>
						<Item Text="Tables and Chairs" />
						<Item Text="Sofas" />
						<Item Text="Occasional Furniture" />
						<Item Text="Childerns Furniture" />
						<Item  Text="Beds" />
					</Group>
				</Item>
				<Item Text="Decor">
					<Group Flow="Vertical">
						<Item Text="Bed Linen" />
						<Item Text="Throws" />
						<Item Text="Curtains and Blinds" />
						<Item  Text="Rugs" />
						<Item Text="Carpets" />
					</Group>
				</Item>
				<Item Text="Storage">
					<Group Flow="Vertical">
						<Item Text="Wall Shelving" />
						<Item Text="Kids Storage" />
						<Item Text="Baskets" />
						<Item Text="Multimedia Storage" />
						<Item Text="Floor Shelving" />
						<Item Text="Toilet Roll Holders" />
						<Item Text="Storage Jars" />
						<Item Text="Drawers" />
						<Item Text="Boxes" />
					</Group>
				</Item>
				<Item Text="Lights">
					<Group Flow="Vertical" OffsetX="-26">
						<Item Text="Ceiling" />
						<Item Text="Table" />
						<Item Text="Floor" />
						<Item Text="Shades" />
						<Item Text="Wall Lights" />
						<Item Text="Spotlights" />
						<Item Text="Push Light" />
						<Item Text="String Lights" />
					</Group>
				</Item>
			</Group>
		</Item>
		<Item Text="Stores"  GroupImageUrl="~/Img/world.gif" ImagePosition="0">
			<Group>
				<Item Text="Stores">
					<Group>
						<Item Text="Canada" />
						<Item Text="Europe" />
						<Item Text="Australia" />
						<Item Text="India" />
						<Item  Text="United Kingdom" />
						<Item  Text="United States" />
						<Item Text="Philippines" />
						<Item  Text="Middle East" />
						<Item  Text="New Zealand" />
						<Item Text="Malaysia" />
					</Group>
				</Item>
			</Group>
		</Item>
	</Group>
</Menu>
````

````CSS
div#MegaDropDown 
{
   margin: 0;
   padding: 20px 0 0 0;
   width: 880px;
   height: 352px;
   background-image: url('Img/main_back.jpg');
   background-repeat: no-repeat; 
}
div.RadSiteMap .rsmLink, 
div.RadSiteMap .rsmTemplate
{
    padding: 0;
}

.RadSiteMap .rsmTwoLevels .rsmLevel1 .rsmItem {
    list-style:disc inside none;
}

div.RadSiteMap .rsmTwoLevels .rsmLevel1 .rsmLink, 
div.RadSiteMap .rsmTwoLevels .rsmLevel1 .rsmTemplate
{
    padding-left: 0;
}

div.RadMenu .rmGroup .rmText {
    margin:0 0 0 4px;
    padding: 8px 0 0 10px;
}

div.RadMenu_Sitefinity ul.rmRootGroup, 
div.RadMenu_Sitefinity div.rmRootGroup
{
	background: none;
	border: 0;
	height: 100%;
	padding-left: 20px;
}

div.RadMenu_Sitefinity .rmHorizontal .rmItem
{
	padding: 0;
}

div.RadMenu .rmItem {
    position: static;
}

div.RadMenu_Sitefinity .rmLink .rmText,
div.RadMenu_Sitefinity .rmFocused .rmText
{
	line-height: 57px;
	color: #FFF;
	text-transform: uppercase;
}

div.RadMenu_Sitefinity .rmLink:hover,
div.RadMenu_Sitefinity .rmFocused,
div.RadMenu_Sitefinity .rmSelected,
div.RadMenu_Sitefinity .rmExpanded
{
	background: transparent url('Img/RootBg.png') repeat-x 0 0;
}

* html div.RadMenu_Sitefinity .rmLink:hover,
* html div.RadMenu_Sitefinity .rmFocused,
* html div.RadMenu_Sitefinity .rmSelected,
* html div.RadMenu_Sitefinity .rmExpanded
{
	background: #FFF;
	filter: alpha(opacity=70);
}

div.RadMenu_Sitefinity .rmSelected .rmText,
div.RadMenu_Sitefinity .rmLink:hover .rmText,
div.RadMenu_Sitefinity .rmExpanded .rmText
{
	color: #555;
}

div.RadMenu_Sitefinity .rmHorizontal .rmItem a.rmLink .rmText
{
	border:0 none;
}
````

 