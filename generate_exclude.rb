system "git checkout -- _config.yml"

temp_file = "temp_exclude_result.tmp"
File.delete(temp_file) if File.exist?(temp_file)

paths_to_include = ARGV.collect!{|arg| arg += '/' unless arg[-1] == '/'}

orig_config = File.read("_config.yml")
orig_exlude = orig_config[/(?<=exclude: \[)[^\]]*/].split(',')
all_paths = Dir["*/"].reject{ |f| f["images"] || f[0] == '_' || orig_exlude.include?(f) || paths_to_include.include?(f) || f == "controls/"}
all_controls_paths = Dir["controls/*/"].reject{ |f| f["images"] || f[0] == '_' || orig_exlude.include?(f) || paths_to_include.include?(f)}

exclude = orig_exlude + all_paths + all_controls_paths
exclude_text = "[" + exclude.join(',') + "]"

File.write(temp_file, exclude_text)
system "notepad #{temp_file}"
File.delete(temp_file)
