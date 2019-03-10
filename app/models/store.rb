require 'csv'
class Store < ApplicationRecord
  def self.import_csv(file)
    list = []
    ActiveRecord::Base.transaction do
      CSV.foreach(file, encoding: 'cp932', headers: true) do |row|
        list << self.new(store_params(row))
      end
      import list
    end
  end

  def self.store_params(row)
    {
        name: row['名 前'],
        description: row['販売品目']
    }
  end
end