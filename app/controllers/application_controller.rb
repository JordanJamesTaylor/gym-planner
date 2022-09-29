class ApplicationController < ActionController::API
    
    # Enable access to cookies hash
    include ActionController::Cookies
    
    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end

end
