exclude_file = "_excludefile.yml"
config_file = "_config.yml"

paths_to_include = ARGV.collect!{|arg| arg += '/' unless arg[-1] == '/'}

orig_config = File.read(config_file)
orig_exlude = orig_config[/(?<=exclude: \[)[^\]]*/].split(',')
all_paths = Dir["*/"].reject{ |f| f["images"] || f[0] == '_' || orig_exlude.include?(f) || paths_to_include.include?(f) || f == "controls/"}
all_controls_paths = Dir["controls/*/"].reject{ |f| f["images"] || f[0] == '_' || orig_exlude.include?(f) || paths_to_include.include?(f)}

exclude = orig_exlude + all_paths + all_controls_paths
exclude_text = "exclude: [" + exclude.join(',') + "]"

File.write(exclude_file, exclude_text)