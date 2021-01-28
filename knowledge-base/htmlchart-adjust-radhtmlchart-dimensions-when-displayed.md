---
title: Adjust RadHtmlChart dimensions when displayed
description: How to resize initially hidden HtmlCharts when they are displayed.
type: how-to
page_title: Hidden chart to be resized when displayed - RadHtmlChart
slug: htmlchart-adjust-radhtmlchart-dimensions-when-displayed
position: 
tags: 
ticketid: 1443948
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadDrawer for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

I am using a RadHtmlChart that is hiddent by css. This RadHtmlChart is one of many. They are then used within a RadPageLayout that is then hook to a RadDrawer.

If I remove the CSS that hides the second one. On building of the webpage, it will show corrected, as a full 100%.

If I hide it (as it should be). When I click the menu button to go from one tab to another, the RadHTMLChart will not go full width. It's some size it picks. If I set to not 100% but based on px, say 300px, all works.

## Solution

The during on page load the chart is running its own internal logic to adjust its own dimensions based on the container, however, in this case, the container is hidden at initial load. The logic is unable to determine the element's dimensions since they are hidden, therefore it automatically shrunk down to as much as the Chart's inner content allows.

To work around this issue, try accessing the JavaScript object of the Chart and call the repaint() method when opening a drawer that used to be hidden before.

Here is an example, where the ItemClick event of the Drawer is used, and in the event handler the logic gets access to the Chart, and calls the repaint() method only, if the currently selected item is "Notification". That is just for demonstration purposes, you can, of course, remove that logic and apply your own.

````ASP.NET
<link href="styles.css" rel="stylesheet" />
<script src="scripts.js"></script>

<telerik:RadToolBar runat="server" ID="RadToolBar1" OnClientButtonClicked="OnClientButtonClicked">
    <Items>
        <telerik:RadToolBarButton Value="toggle" CssClass="k-i-menu k-icon">
        </telerik:RadToolBarButton>
        <telerik:RadToolBarButton>
            <ItemTemplate>
                <h3 class="toolbar-title">Mail Box</h3>
            </ItemTemplate>
        </telerik:RadToolBarButton>
    </Items>
</telerik:RadToolBar>
<telerik:RadDrawer runat="server" ID="RadDrawer1" CssClass="RadDrawer1CssSelector" Mode="push" Position="left" MinHeight="330" DrawerWidth="200" Mini="true" SwipeToOpen="true">
    <ClientEvents OnItemClick="OnItemClick" />
    <MiniSettings Width="50" />
    <ContentTemplate>
        <div id="Inbox">
            <ul class="inboxList">
                <li>
                    <h6>Monday meeting</h6>
                    <p>Hi Tom, Since Monday I'll be out of office, I'm rescheduling the meeting for Tuesday.</p>
                </li>
                <li>
                    <h6>I'm sorry, Tom</h6>
                    <p>Hi Tom, my aunt comes for a visit this Saturday, so I can't come back to St. Pete...</p>
                </li>
            </ul>
        </div>
        <div id="Notifications" class="hidden" style="height: 100%">
            <uc1:WebUserControl runat="server" ID="WebUserControl" />
            <uc1:WebUserControl runat="server" ID="WebUserControl1" />
            <uc1:WebUserControl runat="server" ID="WebUserControl2" />
            <uc1:WebUserControl runat="server" ID="WebUserControl3" />
            <uc1:WebUserControl runat="server" ID="WebUserControl4" />
            <uc1:WebUserControl runat="server" ID="WebUserControl5" />
        </div>
        <div id="Calendar" class="hidden">
            <ul>
                <li>
                    <h6>11/5 Monday</h6>
                    <p>Martha Birthday</p>
                </li>
                <li>
                    <h6>15/6 Sunday</h6>
                    <p>Job interview for internal position</p>
                </li>
            </ul>
        </div>
        <div id="Attachments" class="hidden">
            <ul>
                <li>Build enterprise apps</li>
                <li>Fw: Regarding Multiline textbox</li>
                <li>Away next week</li>
                <li>Fw: Your Costume is ready</li>
                <li>Update completed</li>
            </ul>
        </div>
        <div id="Favourites" class="hidden">
            <ul>
                <li>90% Discount!</li>
                <li>90% Discount!</li>
                <li>One time offer!</li>
            </ul>
        </div>
    </ContentTemplate>
    <ItemsTemplate>
            <ul> 
            <li data-role='drawer-item' class='k-state-selected'><span class='k-icon k-i-inbox'></span><span class='k-item-text'>Inbox</span></li> 
            <li data-role='drawer-separator'></li> 
            <li data-role='drawer-item'><span class='k-icon k-i-notification k-i-bell'></span><span class='k-item-text'>Notifications</span></li> 
            <li data-role='drawer-item'><span class='k-icon k-i-calendar'></span><span class='k-item-text'>Calendar</span></li> 
            <li data-role='drawer-separator'></li> 
            <li data-role='drawer-item'><span class='k-icon k-i-hyperlink-email'></span><span class='k-item-text'>Attachments</span></li> 
            <li data-role='drawer-item'><span class='k-icon k-i-star-outline k-i-bookmark-outline'></span><span class='k-item-text'>Favourites</span></li> 
        </ul>
    </ItemsTemplate>
</telerik:RadDrawer>
````

WebUserControl.ascx

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="ColumnChart" Width="100%" Height="100%" Transitions="true">
    <PlotArea>
        <Series>
            <telerik:ColumnSeries Name="Wooden Table" Stacked="false" Gap="1.5" Spacing="0.4">
                <Appearance>
                    <FillStyle BackgroundColor="#d5a2bb"></FillStyle>
                </Appearance>
                <LabelsAppearance DataFormatString="{0} sales" Position="OutsideEnd"></LabelsAppearance>
                <TooltipsAppearance DataFormatString="{0} sales" Color="White"></TooltipsAppearance>
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="25000"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="12000"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="39000"></telerik:CategorySeriesItem>
                </SeriesItems>
            </telerik:ColumnSeries>
            <telerik:ColumnSeries Name="Lounge">
                <Appearance>
                    <FillStyle BackgroundColor="#850071"></FillStyle>
                </Appearance>
                <LabelsAppearance DataFormatString="{0} sales" Position="OutsideEnd"></LabelsAppearance>
                <TooltipsAppearance DataFormatString="{0} sales" Color="White"></TooltipsAppearance>
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="15000"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="23000"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="10000"></telerik:CategorySeriesItem>
                </SeriesItems>
            </telerik:ColumnSeries>
            <telerik:ColumnSeries Name="Grey Sofa">
                <Appearance>
                    <FillStyle BackgroundColor="#620055"></FillStyle>
                </Appearance>
                <LabelsAppearance DataFormatString="{0} sales" Position="OutsideEnd"></LabelsAppearance>
                <TooltipsAppearance DataFormatString="{0} sales" Color="White"></TooltipsAppearance>
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="35000"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="10000"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="20000"></telerik:CategorySeriesItem>
                </SeriesItems>
            </telerik:ColumnSeries>
        </Series>
        <Appearance>
            <FillStyle BackgroundColor="Transparent"></FillStyle>
        </Appearance>
        <XAxis AxisCrossingValue="0" Color="black" MajorTickType="Outside" MinorTickType="Outside"
            Reversed="false">
            <Items>
                <telerik:AxisItem LabelText="1"></telerik:AxisItem>
                <telerik:AxisItem LabelText="2"></telerik:AxisItem>
                <telerik:AxisItem LabelText="3"></telerik:AxisItem>
            </Items>
            <LabelsAppearance DataFormatString="Q{0}" RotationAngle="0" Skip="0" Step="1"></LabelsAppearance>
            <TitleAppearance Position="Center" RotationAngle="0" Text="Quarters">
            </TitleAppearance>
        </XAxis>
        <YAxis AxisCrossingValue="0" Color="black" MajorTickSize="1" MajorTickType="Outside"
            MinorTickType="None" Reversed="false">
            <LabelsAppearance DataFormatString="{0} sales" RotationAngle="0" Skip="0" Step="1"></LabelsAppearance>
            <TitleAppearance Position="Center" RotationAngle="0" Text="Sales">
            </TitleAppearance>
        </YAxis>
    </PlotArea>
    <Appearance>
        <FillStyle BackgroundColor="Transparent"></FillStyle>
    </Appearance>
    <ChartTitle Text="Product sales for 2011">
        <Appearance Align="Center" BackgroundColor="Transparent" Position="Top">
        </Appearance>
    </ChartTitle>
    <Legend>
        <Appearance BackgroundColor="Transparent" Position="Bottom">
        </Appearance>
    </Legend>
</telerik:RadHtmlChart>
````

scripts.js

````javascript
function OnClientButtonClicked(sender, args) {
    if (args.get_item().get_value() == "toggle") {
        toggleDrawer();
    }
}

function toggleDrawer() {
    var drawer = $telerik.$(".RadDrawer1CssSelector")[0].control;
    var drawerContainer = drawer.get_drawerContainer();

    if (drawerContainer.hasClass("k-drawer-expanded")) {
        drawer.hide();
    } else {
        drawer.show();
    }
}

function OnItemClick(sender, args) {
    var $drawerElement = $telerik.$(sender.get_element());
    var clickedItem = args.get_item();
    var clickedItemText = args.get_text();

    $drawerElement.find(".k-drawer-content > div").addClass("hidden");
    var targetContent = $drawerElement.find(".k-drawer-content").find("#" + clickedItemText);

    // showing the Content
    targetContent.removeClass("hidden");

    // if the target content is Notifications
    if (args.get_text() == "Notifications") {
        // use jQuery to access the chart(s) and loop through the collection
        $telerik.$('.RadHtmlChart').each(function () {
            if (this.control) {
                var chart = this.control;
                // repaint each chart
                chart.repaint();
            }
        })
    }
}
````

styles.css

````CSS
.RadToolBar .rtbItem .k-icon.k-i-menu {
    text-align: left;
}

    .RadToolBar .rtbItem .k-icon.k-i-menu:before {
        content: "\e030";
    }

.RadToolBar .rtbItem h3.toolbar-title {
    margin: 0 0 0 20px;
    font-size: 1.1em;
    line-height: 30px
}

.k-i-inbox:before {
    content: "\e802";
}

.k-i-calendar:before {
    content: "\e108";
}

.k-i-bell:before {
    content: "\e400";
}

.k-i-hyperlink-email:before {
    content: "\e674";
}

.k-i-bookmark-outline:before {
    content: "\e302";
}

.k-drawer-content ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.k-drawer-content li {
    font-size: 1.2em;
    padding-left: .89em;
    background: 0 0;
    border-radius: 0;
    border-width: 0 0 1px;
    border-color: rgba(33, 37, 41, 0.125);
    border-style: solid;
    line-height: 1.5em;
    padding: 1.09em .84em 1.23em .84em;
}

    .k-drawer-content li:last-child {
        border: 0;
    }

.hidden {
    display: none;
}

.k-toolbar .k-icon {
    font-size: 18px;
}
````

