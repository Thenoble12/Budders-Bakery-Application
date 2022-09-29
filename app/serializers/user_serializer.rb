class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest

  def show
    self.id
    self.username
    self.password
    self.email
    self.first_name
    self.last_name
  end

end
