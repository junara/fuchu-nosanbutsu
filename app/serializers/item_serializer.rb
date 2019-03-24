class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :name_hiragana
end
