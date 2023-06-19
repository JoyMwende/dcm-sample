create procedure getAMessage(
@id INT
)

as begin
select * from contactUs where id = @id
end