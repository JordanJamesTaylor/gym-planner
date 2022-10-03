class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :muscle_group, :form, :image, :seconds, :reps, :sets

end
