class ApplicationController < ActionController::API
    
    # Enable access to cookies hash
    include ActionController::Cookies

    include ActiveStorage::Blob::Analyzable
    
    # Catches errors across all controllers
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    # Set logged in user to be inherited 
    before_action :current_user
    # Check user permissions
    before_action :authorize

    private
  
    # Find current user with session cookies
    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
    end
  
    # Don't allow access to app unless a user is logged in
    def authorize
      unless @current_user
        render json: { message: 'Not authorized' }, status: :unauthorized
      end
    end

    def render_record_not_found error
        render json: { error: error.message }, status: :not_found
    end

    def render_unprocessable_entity invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
