module Reading
  class TemplateGenerator < Jekyll::Generator
		def generate(site)	
			@site = site
			@converter = site.getConverterImpl(Jekyll::Converters::Markdown)	
			site.pages.each do |p|	
				process_content(p, p.content)
			end
		end
		
		def process_content(page, content)
			template_regexp = /@\[template[^\]]*\]\(\/([^#]*)#([^\s]*)(\s+"([^"]*)")?\)/
			template_match = content.match template_regexp
			
			while template_match
				begin
					result = process_template(template_match).force_encoding("UTF-8")
					content.gsub!(template_match.to_s, result)
					template_match = content.match template_regexp			
				rescue => error
					Jekyll.logger.warn "Error:", "Templates processing failed in #{page.path}" 
					raise error
				end
			end
		end
		
		def process_template(match)
			file_name = match[1]
			section_id = match[2].downcase
			has_arguments = match[3]
			arguments = match[4]

			unless $template_hash
				$template_hash = Hash.new
			end
			
			unless $template_hash[file_name]
				read_template_file(file_name)
			end
			
			result = $template_hash[file_name][section_id].to_s

			if(has_arguments)
				arg_plc_start = "@{"
				arg_plc_end = "}"
				placeholder_regex = /#{arg_plc_start}([^#{arg_plc_end}]*)#{arg_plc_end}/
				arguments_hash = generate_arguments_hash(arguments, arg_plc_start, arg_plc_end)
				return result.gsub(placeholder_regex, arguments_hash).rstrip
			end
			
			return result.rstrip
		end 
	
		def read_template_file(file_name)
			$template_hash[file_name] = Hash.new 
			start_regex = /#+([^#]*)/
			end_regex = /#+end/i

			lines = IO.readlines(file_name)
			start_recording = false
			id = ""
			
			lines.each do |line|
				start_match = start_regex.match(line)
				end_match = end_regex.match(line)

				if(end_match and start_recording)
					start_recording = false
					id = ""
				end
				
				if(start_recording)
					$template_hash[file_name][id] = $template_hash[file_name][id].to_s << line
				end
				
				if(start_match and !start_recording and !end_match)
					start_recording = true
					id = start_match[1].strip.downcase
					$template_hash[file_name][id] = ""
				end
			end
		end
	
		def generate_arguments_hash(arguments, plc_start, plc_end)
			args_array = arguments.split(",").collect{|x| x.strip.split(":").collect{|value| value.strip}}
			hash_args = Hash.new
			Hash[args_array].each {|key, value| 
				hash_key = "#{plc_start}#{key}#{plc_end}"
				hash_args[hash_key] = value
			}
			
			return hash_args
		end
	end
end