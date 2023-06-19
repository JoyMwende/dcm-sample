create procedure updateMessage(
@id INT,
@full_name VarChar(max),
@email VarChar(max),
@message VarChar(max)
)

as begin
UPDATE contactUs SET full_name = @full_name, email = @email, message = @message
	WHERE id = @id
end