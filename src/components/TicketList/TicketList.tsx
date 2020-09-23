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
  return tickets.sort((ticket1: any, ticket2: any) => ticket1.segments[0].duration - ticket2.segments[0].duration);
};

const transferTicketsSort = (transferSort: boolean[], tickets: ITicket[]): ITicket[] => {
  if (transferSort[0]) {
    return tickets;
  }
  if (transferSort[1]) {
    return tickets.filter(
      (ticket: any) => ticket.segments[0].stops.length === 0 || ticket.segments[1].stops.length === 0
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

  useEffect(() => {
    setTicketList(tickets);
  }, [tickets]);

  useEffect(() => {
    setTicketList(sortTicket(active, [].concat(tickets)));
  }, [active]);

  useEffect(() => {
    setTicketList(transferTicketsSort(transferSort, tickets));
  }, [transferSort]);

  if (tickets.length === 0 && loadedTickets) {
    return <div>Рейсов, подходящих под заданные фильтры, не найдено</div>;
  }

  return (
    <div className={styles['ticket-list']}>
      {ticketsList.map((ticket: any) => (
        <TicketListItem key={shortid.generate()} ticket={ticket} />
      ))}
      {!loadedTickets && <div>loaded tickets</div>}
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
