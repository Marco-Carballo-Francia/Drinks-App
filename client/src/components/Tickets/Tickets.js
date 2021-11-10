import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTickets } from "../../redux/actions/actions";

const Tickets = () => {
  const dispatch = useDispatch();
  const { user, tickets } = useSelector((state) => state.user);
  console.log("averga",tickets)
  const { id } = user;

  useEffect(() => {
    dispatch(getUserTickets(id));
  }, [dispatch, id]);

  return (
    <div>
      {tickets &&
        tickets.map((x) => (
          <div >
            compra
          </div>
        ))}
    </div>
  );
};

export default Tickets;
