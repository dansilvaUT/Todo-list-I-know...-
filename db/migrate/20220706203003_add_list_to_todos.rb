class AddListToTodos < ActiveRecord::Migration[6.1]
  def change
    add_reference :todos, :lists, null: false, foreign_key: true
  end
end
