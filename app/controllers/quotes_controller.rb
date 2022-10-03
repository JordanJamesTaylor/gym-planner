class QuotesController < ApplicationController

    def index
        render json: Quote.all
    end

    def show
        render json: Quote.find_by(id: params[:id])
    end

    def create
        newQuote = Quote.create!(quote_params)
        render json: newQuote, status: :created
    end

    def update
        updatedQuote = Quote.find_by(id: params[:id])
        updatedQuote.update!(quote_params)
        render json: updatedQuote, status: :accepted
    end

    def destroy
        quoteToDelete = Quote.fin_by(id: params[:id])
        quoteToDelete.destroy
        head :no_content 
    end

    private

    def quote_params
        params.permit(:text, :author)
    end

end
