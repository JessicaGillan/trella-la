class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.integer :list_id
      t.integer :position
      t.string :title
      t.text :description
      t.datetime :completed

      t.timestamps
    end
  end
end
