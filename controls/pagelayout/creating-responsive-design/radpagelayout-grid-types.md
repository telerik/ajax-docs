---
title: RadPageLayout Grid Types
page_title: RadPageLayout Grid Types | UI for ASP.NET AJAX Documentation
description: RadPageLayout Grid Types
slug: pagelayout/creating-responsive-design/radpagelayout-grid-types
tags: radpagelayout,grid,types
published: True
position: 3
---

# RadPageLayout Grid Types



## 

The __RadPageLayout__ control has three available types of [Grid Based Layout]({%slug pagelayout/creating-responsive-design/grid-based-layout-%}) that specify the behavior of the control:

* __Fixed__ - there are five predefined width values for the grid columns and the container responds to viewport size changes by setting a grid column width that corresponds to the current size of the viewport. More information about these size ranges can be found in the article [Viewport Breakpoints]({%slug pagelayout/creating-responsive-design/viewport-breakpoints%}).

* __Fluid__ - fluidly reacts to changes in the viewport size by setting the size of the grid rows so that it fits the available space.

* __Static__ - the grid is static and does not respond to changes in the size of the viewport.

You can check how __RadPageLayout__ looks with each of the three layout types enabled in the following screenshots. The green grid columns inthe background, shown by setting the property __ShowGrid__ to __true__, visualize how every page layout type responds to changes in the size of the viewport:



__Example 1__: Configuring Grid Based Layout in a __RadPageLayout__ control. You will check the result in __Figure 1__, __Figure 2__ and __Figure 3__ by changing the property __GridType__ with the values in the list above.

````ASPNET
	    <telerik:RadPageLayout ID="RadPageLayout1" runat="server" GridType="Fluid" ShowGrid="true">
	        <Rows>
	            <telerik:LayoutRow>
	                <Content>
	                    <div class="card">Header</div>
	                </Content>
	            </telerik:LayoutRow>
	            <telerik:LayoutRow>
	                <Columns>
	                    <telerik:LayoutColumn Span="3">
	                        <div class="card" style="height: 300px">Sidebar</div>
	                    </telerik:LayoutColumn>
	                    <telerik:LayoutColumn Span="9">
	                        <div class="card" style="height: 300px">Main content</div>
	                    </telerik:LayoutColumn>
	                </Columns>
	            </telerik:LayoutRow>
	            <telerik:LayoutRow>
	                <Content>
	                    <div class="card">Footer</div>
	                </Content>
	            </telerik:LayoutRow>
	        </Rows>
	    </telerik:RadPageLayout>
	
````



# See Also

 * [RadPageLayout Grid Based Layout]({%slug pagelayout/creating-responsive-design/grid-based-layout-%})

 * [RadPageLayout Viewport Breakpoints]({%slug pagelayout/creating-responsive-design/viewport-breakpoints%})
