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
			tab_start = ">tabbedCode"
			tab_end = ">end"

			start_length = tab_start.length
			end_length = tab_end.length

			first_index = content.index(tab_start)
			last_index = content.index(tab_end)

			while content.index(tab_start)
				block = @converter.convert(content[first_index+start_length..last_index-1]) 

				content[first_index..last_index+end_length] = "<div class='tabbedCode'>" + block + "</div>"

				first_index = content.index(tab_start)
				last_index = content.index(tab_end)
			end
		end
	end
end