class AddNameFuriToItem < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :name_hiragana, :string
  end
end
