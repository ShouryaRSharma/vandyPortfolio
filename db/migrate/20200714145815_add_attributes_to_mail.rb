class AddAttributesToMail < ActiveRecord::Migration[5.2]
  def change
    add_column :sent_mails, :name, :string
    add_column :sent_mails, :email, :string
    add_column :sent_mails, :phone, :string
    add_column :sent_mails, :title, :string
    add_column :sent_mails, :message, :string
  end
end
