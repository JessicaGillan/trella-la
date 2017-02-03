class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.text :description
      t.integer :user_id

      t.timestamps
    end

    add_index :activities, :user_id
  end
end
