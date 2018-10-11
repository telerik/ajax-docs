class SlugTag < Liquid::Tag
    @@page_by_slug = nil

    def initialize(tag_name, text, tokens)
        @text = text.strip
    end

    def index_slugs(site)
        return if @@page_by_slug

        @@page_by_slug = Hash.new
        Jekyll.logger.info "      Indexing slugs in #{site.pages.length} pages..."

        duplicates = false
        site.pages.each do |p|
            slug = p.data['slug']
            if (slug)
                if @@page_by_slug.has_key?(slug)
                    Jekyll.logger.warn "Duplicate slug '#{slug}' on #{p.url}"
                    duplicates = true
                end

                @@page_by_slug[slug] = p
            end
        end

        if duplicates
            # raise "Duplicate slugs found. Aborting"
        else
            Jekyll.logger.info "      Done. Found #{@@page_by_slug.length} unique slugs."
        end
    end

    def render(context)
        site = context.registers[:site]
        index_slugs site
        slug_overrides = site.config['slug_overrides'] || Hash.new

        page = @@page_by_slug[@text]
        page_url = context.environments.first["page"]["url"]

        if !page && page_url =~ /\.X\//
            root_slug = @text.sub(/.*\.X_(.*)/, '\1')
            page = @@page_by_slug[root_slug]
        end

        if page
            return site.baseurl + page.url.sub('.html', '')
        elsif slug_overrides.has_key? @text
            return site.baseurl + slug_overrides[@text]
        else
            Jekyll.logger.warn "ERROR:", "No page with slug `#{@text}` in #{page_url}. Consider fixing the slug or use normal link."

            at_exit do
                exit 1
            end
        end
    end
end

Liquid::Template.register_tag('slug', SlugTag)
