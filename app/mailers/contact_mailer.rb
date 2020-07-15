class ContactMailer < ApplicationMailer

  # Method creating an email and sending it.
  def contact_email(email, name, telephone, title, message)
    @email = email
    @name = name
    @telephone = telephone
    @title = title
    @message = message

    mail cc: @email, subject: title
  end
end