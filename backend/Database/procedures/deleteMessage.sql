create procedure deleteMessage(@id INT)

as begin
delete from contactUs where id = @id
end