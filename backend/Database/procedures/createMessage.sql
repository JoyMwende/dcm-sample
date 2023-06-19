create procedure createMessage(
@full_name VarChar(max),
@email VarChar(max),
@message VarChar(max)
)

as begin
INSERT INTO contactUs(full_name, email, message) VALUES(@full_name, @email, @message)
end

