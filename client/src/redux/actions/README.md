QUE ONDA CHICOS DEL BACK COMO ANDAN???? ESTE ARCHIVO ES PARA VOSOTROS!!!!!!

-------
Tickets:
1)
-componente: AdminTickets.jsx
-action creator: getTicketsAdmin() ---> devuelve los tickets en estado "pending" y "processing": {pending: [], processing: []}
2)
-componente: TicketProcess.jsx
-action creator: changeTicketStatus({status, id}) ---> cambia el estado de un ticket y devuelve {pending: [], processing: []}

-------
Users:
1) 
-componente: UsersList.jsx
-action creator: getUsers({ nombre }) ---> si recibe nombre devuelve los usuarios que coincidan, caso contrario devuelve todos los usuarios
2)
-componente: UserDetail.jsx
-action creator: changeUserRole({changeRol, id}) ---> si changeRol es true cambia el rol del usuario al opuesto y devuelve la lista de usuarios actualizada.

-------
Stock:
1)
-componente: Create.jsx
-action creator: createItem({}) ---> crea un item en la db con la info que se pasa por body
2)
-componente: StockUpdate.jsx
-action creator: deleteItem(id) ---> borra un item de la db