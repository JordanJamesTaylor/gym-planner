class WorkoutsController < ApplicationController

    def index
        render json: Workout.all
    end

    def show 
        render json: Workout.find_by(id: params[:id])
    end

    def create
        render json: Workout.create!(workout_params), status: :created
    end

    def update
        render json: Workout.update!(workout_params)
    end

    def destroy
        workoutToDelete = Workout.find_by(id: params[:id])
        workoutToDelete.destroy
        head :no_content 
    end

    private

    def workout_params
        params.permit(:name, :description, :muscle_group, :form, :image, :seconds, :reps, :sets)
    end
    
end
