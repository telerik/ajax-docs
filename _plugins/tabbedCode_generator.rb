module Reading
  class TabbedCodeGenerator < Jekyll::Generator
		def generate(site)	
			@site = site
			@converter = site.getConverterImpl(Jekyll::Converters::Markdown)	
			site.pages.each do |p|			
				createTabbedCode(p.content)
			end
		end
	
		def createTabbedCode(content)
			sub_string = content.scan(/(>tabbedCode)([\w\W\n][^>]*)(>end)/)
			
			sub_string.each do |s|
				block ="<div class='tabbedCode'>" +  @converter.convert(s[1]) + "</div>"
				
				Jekyll.logger.warn "tabbedCode:", "#{s[1]}"
				content.sub!(s[0] + s[1] + s[2], block)
			end
		end
	end
end