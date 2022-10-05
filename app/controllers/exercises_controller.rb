class ExercisesController < ApplicationController

    def index
        render json: Exercise.all
    end

    def show 
        render json: Exercise.find_by(id: params[:id])
    end

    def create
        render json: Exercise.create!(exercises_params), status: :created
    end

    def update
        exercise = Exercise.find_by(id: params[:id])
        exercise.update!(exercises_params)
        render json: exercise, status: :accepted
    end
    
    def destroy
        exerciseToDelete = Exercise.find_by(id: params[:id])
        exerciseToDelete.destroy
        head :no_content 
    end

    private

    def exercises_params
        params.permit(:name, :description, :muscle_group, :intensity, :form, :image, :liked, :seconds, :reps, :sets)
    end
    
end
