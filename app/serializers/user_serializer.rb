class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username

  def show
    self.id
    self.username
    self.password
    self.email
    self.first_name
    self.last_name
  end

end
