class AddImageToAccounts < ActiveRecord::Migration[7.0]
  def change
    add_colum :accounts, :image, :string
  end
end
