# frozen_string_literal: true

namespace :item do
  desc 'item.nameに読み仮名をつける'
  # rake item:name_hiragana
  task name_hiragana: :environment do
    Item.all.each {|item| item.update_name_hiragana}
  end
end
