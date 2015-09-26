class CreateAttractions < ActiveRecord::Migration
  def change
    create_table :attractions do |t|
      t.string :title
      t.string :media
      t.datetime :schedule
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
