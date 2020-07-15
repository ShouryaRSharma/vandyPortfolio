class SentMail < ApplicationRecord
  # Regex validating a correct Phone number (constant)
  PHONE_NUMBER_REGEX = %r{\A([+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*)?\Z}.freeze

  # Regex validating a correct Email address (constant)
  EMAIL_REGEX = %r{\A[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\Z}.freeze

  # Name, email and message must not be empty
  validates :name, :email, :message, presence: true

  # The email must follow the format specified by the regex
  validates :email, format: {with: EMAIL_REGEX, message: I18n.t('email_validation_feedback') }

  # The telephone number must follow the format specified by the regex (empty telephone is also possible)
  validates :phone, format: {with: PHONE_NUMBER_REGEX, message: I18n.t('models.email.telephone_validation_feedback') }

end
