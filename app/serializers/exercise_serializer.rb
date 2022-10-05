class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :muscle_group, :form, :intensity, :image, :liked, :seconds, :reps, :sets

end
