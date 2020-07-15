class CreateSentMails < ActiveRecord::Migration[5.2]
  def change
    create_table :sent_mails do |t|

      t.timestamps
    end
  end
end
