class PublicController < ApplicationController
  def main
    if account_signed_in?
      redirect_to dashboard_path, flash: {success: "Successfully Signed In.Welcome to Application for Property Finder" } and return
    end
    @properties = Property.latest
  end
end
