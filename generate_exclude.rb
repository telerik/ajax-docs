system "git checkout -- _config.yml"

def start_watch(paths)
	require 'listen'
	system "Jekyll build"
	
	listener = Listen.to(paths) do |modified, added, removed|
	  puts "\n Modified File: #{modified} \n\n Building Jekyll site."
	  system "Jekyll build"
	  puts "Use Ctrl+C to stop the process!"
	end
	
	puts "\n\nWatching #{paths.join(", ")}\n\n"
	puts "Use Ctrl+C to stop the process!\n\n"
	
	listener.start # not blocking
	sleep
end

temp_file = "temp_exclude_result.tmp"
File.delete(temp_file) if File.exist?(temp_file)
config_file = "_config.yml"
to_start_watch = false

if ARGV[-1] == "--watch" || ARGV[-1] == "-w"
	to_start_watch = true
end

paths_to_include = ARGV.collect!{|arg| arg += '/' unless arg[-1] == '/'}
paths_to_include.pop if to_start_watch

orig_config = File.read(config_file)
orig_exlude = orig_config[/(?<=exclude: \[)[^\]]*/].split(',')
all_paths = Dir["*/"].reject{ |f| f["images"] || f[0] == '_' || orig_exlude.include?(f) || paths_to_include.include?(f) || f == "controls/"}
all_controls_paths = Dir["controls/*/"].reject{ |f| f["images"] || f[0] == '_' || orig_exlude.include?(f) || paths_to_include.include?(f)}

exclude = orig_exlude + all_paths + all_controls_paths
exclude_text = "[" + exclude.join(',') + "]"

unless to_start_watch
	File.write(temp_file, exclude_text)
	system "notepad #{temp_file}"
	File.delete(temp_file)
else
	new_config = orig_config.gsub(/exclude: \[[^\]]*\]/, "exclude: " + exclude_text)
	File.write(config_file, new_config)
	start_watch(paths_to_include)
end
