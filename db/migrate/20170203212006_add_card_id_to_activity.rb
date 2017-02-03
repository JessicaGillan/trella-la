class AddCardIdToActivity < ActiveRecord::Migration[5.0]

  def up
    add_column :activities, :card_id, :integer
  end

  def down
    remove_column :activities, :card_id, :integer
  end

end
