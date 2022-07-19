class AddTodosCountToLists < ActiveRecord::Migration[6.1]
  def change
    add_column :lists, :todos_count, :integer, null: true
  end
end
