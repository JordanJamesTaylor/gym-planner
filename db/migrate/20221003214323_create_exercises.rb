class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :description
      t.string :muscle_group
      t.string :form
      t.string :intensity
      t.string :image
      t.boolean :liked
      t.integer :seconds
      t.integer :reps
      t.integer :sets

      t.timestamps
    end
  end
end
