class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :exercise_id
end
