require "yaml"
require "fileutils"

class Submodule
  def initialize(name, config_file)
    @name = name
    @config = YAML.load_file(config_file)[name]
  end
  
  def init
    system "git submodule add -f #{@config['remote_ssh']} #{@config['submodule_path']}"
  end
  
  def update
    system "git submodule update --remote -f #{@config['submodule_path']}"
  end
  
  def destroy
    system "git submodule deinit -f #{@config['submodule_path']}"
    system "git rm -f #{@config['submodule_path']}"
    if File.zero?(".gitmodules")
      system "git rm -f .gitmodules"
    end
  end
  
  def map_folders
    mappings = @config["mappings"]
    mappings.each do |map|
	  FileUtils.rm_rf(map["target"])
      FileUtils.cp_r(File.join(@config['submodule_path'], map["source"]), map["target"])
    end
  end
  
  def get_target_folders
    target_folders = Array.new
    
    @config["mappings"].each do |map|
      target_folders.push(map["target"])
    end
    
    return target_folders
  end
end