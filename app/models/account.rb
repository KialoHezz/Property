class Account < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,  :trackable
  has_many :properties

  mount_uploader :image, ProfilePictureUploader


  def full_name
    "Hezron K."
  end

  def company
    "Test Company{M.I.T} "
  end
end
