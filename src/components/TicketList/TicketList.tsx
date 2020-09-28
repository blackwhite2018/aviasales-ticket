import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';

import { ITicket } from './../../types';
import TicketListItem from '../TicketListItem';

import styles from './index.module.scss';

const sortTicket = (active: number, tickets: ITicket[]): ITicket[] => {
  if (active === 0) {
    return tickets.sort((ticket1: any, ticket2: any) => ticket1.price - ticket2.price);
  }
  return tickets.sort(
    (ticket1: any, ticket2: any) =>
      ticket1.segments[0].duration -
      ticket2.segments[0].duration +
      ticket1.segments[1].duration -
      ticket2.segments[1].duration
  );
};

const transferTicketsSort = (transferSort: boolean[], tickets: ITicket[]): ITicket[] => {
  if (transferSort[0]) {
    return tickets;
  }
  if (transferSort[1]) {
    return tickets.filter(
      (ticket: any) => ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0
    );
  }
  if (transferSort[2] || transferSort[3] || transferSort[4]) {
    return tickets.filter((ticket: any) => {
      for (let i = 1; i < 4; i++) {
        if ((ticket.segments[0].stops.length === i || ticket.segments[1].stops.length === i) && transferSort[i]) {
          return true;
        }
      }
      return false;
    });
  }
  return tickets;
};

const TicketList: React.FC = ({ tickets, active, transferSort, loadedTickets }: any) => {
  const [ticketsList, setTicketList] = useState<ITicket[]>(sortTicket(0, tickets));
  const [ticketsCountShow, setTicketsCountShow] = useState<number>(10);

  useEffect(() => {
    setTicketList(transferTicketsSort(transferSort, sortTicket(active, [].concat(tickets))));
  }, [tickets, active, transferSort]);

  const handleAddTickets = () => {
    setTicketsCountShow(prev => prev + 10);
  };

  if (tickets.length === 0 && loadedTickets) {
    return <div>Рейсов, подходящих под заданные фильтры, не найдено</div>;
  }

  return (
    <div className={styles['ticket-list']}>
      {ticketsList.slice(0, ticketsCountShow).map((ticket: any) => (
        <TicketListItem key={shortid.generate()} ticket={ticket} />
      ))}
      {!loadedTickets && <div>loaded tickets</div>}
      {loadedTickets && (
        <input type="button" onClick={handleAddTickets} className={styles['show-tickets']} value="Show tickets" />
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  tickets: state.tickets,
  active: state.active,
  transferSort: state.transferSort,
  loadedTickets: state.loadedTickets,
});

export default connect(mapStateToProps)(TicketList);
