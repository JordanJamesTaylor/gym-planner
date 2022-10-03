class ApplicationController < ActionController::API
    
    # Enable access to cookies hash
    include ActionController::Cookies

    # Catches errors across all controllers
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    private

    def render_record_not_found error
        render json: { error: error.message }, status: :not_found
    end

    def render_unprocessable_entity invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
