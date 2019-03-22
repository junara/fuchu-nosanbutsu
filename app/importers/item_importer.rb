class ItemImporter
  def initialize(descriptions)
    @descriptions = descriptions
  end

  def execute
    ActiveRecord::Base.transaction do
      Item.delete_all
      list = []
      item_names.uniq.compact.each do |item_name|
        list << Item.new(name: item_name)
      end
      Item.import list
    end
  end

  private

  def item_names
    current_item_names = Item.pluck(:name)
    @descriptions.each_with_object(current_item_names) do |str, res|
      res.concat(custom_split(str))
    end
  end

  def custom_split(str)
    return [] if str.nil?
    str.split(/・|\(|（|）|、|：|\n|　|\)| /)
  end
end